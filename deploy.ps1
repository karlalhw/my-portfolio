# deploy.ps1 — Build and deploy karlalhw.com portfolio
# Usage: .\deploy.ps1

$username    = Read-Host "SSH username"
$ip          = Read-Host "Server IP"
$serverPath  = Read-Host "Server path (e.g. domains/yourdomain.com/public_html/my-portfolio)"

$remote      = "${username}@${ip}"
$archiveName = "next-build.tar.gz"

# ── 1. Build ────────────────────────────────────────────────────────────────
Write-Host "`nBuilding..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Aborting." -ForegroundColor Red
    exit 1
}

# ── 2. Package (excludes .next/cache — not needed on server) ────────────────
Write-Host "`nPackaging .next/ and public/ (excluding cache)..." -ForegroundColor Cyan
if (Test-Path $archiveName) { Remove-Item $archiveName }
tar -czf $archiveName --exclude='.next/cache' .next public

# ── 3. Upload first — don't touch the server until this succeeds ────────────
Write-Host "`nUploading $archiveName... (password prompt 1 of 2)" -ForegroundColor Cyan
scp $archiveName "${remote}:${serverPath}/"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Upload failed. Server is unchanged — safe to retry." -ForegroundColor Red
    Remove-Item $archiveName
    exit 1
}

# ── 4. Swap .next and extract (single SSH session) ──────────────────────────
# Upload is confirmed — now safe to replace .next on server
Write-Host "`nDeploying on server... (password prompt 2 of 2)" -ForegroundColor Cyan
ssh $remote "cd $serverPath && rm -rf .next && tar -xzf $archiveName && rm $archiveName"

# ── 5. Clean up local archive ───────────────────────────────────────────────
Write-Host "`nCleaning up local archive..." -ForegroundColor Cyan
Remove-Item $archiveName

Write-Host "`nDone! Restart the Node.js app in DirectAdmin to apply changes." -ForegroundColor Green
