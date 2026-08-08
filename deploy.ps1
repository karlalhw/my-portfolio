# deploy.ps1 — Build and deploy karlalhw.com portfolio
# Usage: .\deploy.ps1

$username = Read-Host "SSH username"
$ip       = Read-Host "Server IP"

$remote     = "${username}@${ip}"
$serverPath = "domains/karlalhw.com/public_html/my-portfolio"
$zipName    = "next-build.zip"

# ── 1. Build ────────────────────────────────────────────────────────────────
Write-Host "`nBuilding..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Aborting." -ForegroundColor Red
    exit 1
}

# ── 2. Package ──────────────────────────────────────────────────────────────
Write-Host "`nPackaging .next/ and public/..." -ForegroundColor Cyan
if (Test-Path $zipName) { Remove-Item $zipName }
Compress-Archive -Path ".next", "public" -DestinationPath $zipName

# ── 3. Upload ────────────────────────────────────────────────────────────────
Write-Host "`nUploading $zipName... (password prompt 1 of 2)" -ForegroundColor Cyan
scp $zipName "${remote}:${serverPath}/"

# ── 4. Clear old .next, extract, and clean up on server (single SSH session) ─
Write-Host "`nDeploying on server... (password prompt 2 of 2)" -ForegroundColor Cyan
ssh $remote "rm -rf $serverPath/.next && cd $serverPath && unzip -o $zipName && rm $zipName"

# ── 6. Clean up local zip ───────────────────────────────────────────────────
Write-Host "`nCleaning up local zip..." -ForegroundColor Cyan
Remove-Item $zipName

Write-Host "`nDone! Restart the Node.js app in DirectAdmin to apply changes." -ForegroundColor Green
