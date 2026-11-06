@echo off
title Site Feira - ODS 13

cd /d "%~dp0"

echo Iniciando o site...
echo.

where py >nul 2>nul
if %errorlevel%==0 (
    start "" "http://127.0.0.1:8000/"
    py -m http.server 8000 --bind 127.0.0.1
    exit /b
)

where python >nul 2>nul
if %errorlevel%==0 (
    start "" "http://127.0.0.1:8000/"
    python -m http.server 8000 --bind 127.0.0.1
    exit /b
)

echo Python nao foi encontrado neste computador.
echo.
echo Instale o Python ou abra o projeto pelo VS Code com Live Server.
echo.
pause
