@echo off
title Jena Welding Company - Local Server
cd /d "%~dp0"
echo ========================================================
echo   JENA WELDING COMPANY - LOCAL DEVELOPMENT SERVER
echo ========================================================
echo Starting Vite server...
echo Access in browser: http://localhost:5173/
echo.
start http://localhost:5173/
npm run dev
pause
