# Node.js Environment Setup Script
$NodePath = "$env:LOCALAPPDATA\Microsoft\WinGet\Packages\OpenJS.NodeJS_Microsoft.Winget.Source_8wekyb3d8bbwe\node-v24.6.0-win-x64"

# Add to PATH for current session
$env:PATH = "$NodePath;$env:PATH"

# Create aliases for easy access
Set-Alias -Name node -Value "$NodePath\node.exe" -Scope Global
Set-Alias -Name npm -Value "$NodePath\npm.cmd" -Scope Global  
Set-Alias -Name pnpm -Value "$NodePath\pnpm.cmd" -Scope Global

Write-Host "Node.js environment loaded!" -ForegroundColor Green
Write-Host "Available commands: node, npm, pnpm" -ForegroundColor Yellow
Write-Host "PATH updated for this session" -ForegroundColor Cyan
