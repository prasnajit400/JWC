@echo off
title Jena Welding Company - Production Preview
cd /d "%~dp0"
echo ========================================================
echo   JENA WELDING COMPANY - PRODUCTION PREVIEW SERVER
echo ========================================================
echo Starting production preview server...
echo Access in browser: http://localhost:5173/
echo.
start http://localhost:5173/
npm run preview
pause
