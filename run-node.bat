@echo off
set NODE_PATH=%LOCALAPPDATA%\Microsoft\WinGet\Packages\OpenJS.NodeJS_Microsoft.Winget.Source_8wekyb3d8bbwe\node-v24.6.0-win-x64
set PATH=%NODE_PATH%;%PATH%

echo Node.js environment loaded!
echo Available commands:
echo   node - Node.js runtime
echo   npm  - Node package manager  
echo   pnpm - Fast package manager
echo.
echo Type your command or 'exit' to close:
cmd /k
