@echo off
title CraftConnect - AI Artisan Platform Launcher
color 06

echo ==============================================================================
echo       CraftConnect - AI-Powered Smart Artisan Platform (SIH 2026)
echo       Tech Stack: Java Spring Boot, React.js, Python FastAPI, MySQL
echo ==============================================================================
echo.

cd /d "%~dp0"

echo [1/3] Starting Python AI & ML Microservice (:8000)...
start "CraftConnect Python AI Engine" /min cmd /c "cd ai-service-python && .\.venv\Scripts\python -m uvicorn app:app --host 127.0.0.1 --port 8000"

echo [2/3] Starting Web Server (:3000)...
start "CraftConnect Web Server" /min cmd /c "python -m http.server 3000"

echo [3/3] Launching Google Chrome...
timeout /t 2 /nobreak >nul
start chrome "http://localhost:3000"

echo.
echo ==============================================================================
echo  CraftConnect is now running!
echo  - Web Application: http://localhost:3000
echo  - Python AI API:   http://localhost:8000 (Swagger: http://localhost:8000/docs)
echo ==============================================================================
echo  Press any key to stop all background services and exit...
echo.
pause >nul

echo Stopping services...
taskkill /F /FI "WINDOWTITLE eq CraftConnect*" >nul 2>&1
echo Done!
