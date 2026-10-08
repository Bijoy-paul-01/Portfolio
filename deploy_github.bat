@echo off
setlocal enabledelayedexpansion
title Deploy Portfolio to GitHub

echo ========================================================
echo   🚀 Bijoy's AI / ML Portfolio - GitHub Deployment
echo ========================================================
echo.
echo Make sure you have created an empty repository on GitHub first:
echo 👉 https://github.com/new
echo (e.g. Repository name: portfolio)
echo.

set /p REPO_NAME="Enter your GitHub repository name [default: portfolio]: "
if "%REPO_NAME%"=="" set REPO_NAME=portfolio

echo.
echo Setting remote to https://github.com/Bijoy-paul-01/%REPO_NAME%.git ...
git remote remove origin 2>nul
git remote add origin https://github.com/Bijoy-paul-01/%REPO_NAME%.git
git branch -M main

echo.
echo Pushing code to GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo ✅ Successfully pushed to GitHub!
    echo.
    echo 🌐 Your portfolio will be live at:
    echo    https://bijoy-paul-01.github.io/%REPO_NAME%/
    echo.
    echo ⚙️ In GitHub, go to:
    echo    Settings -^> Pages -^> Source: GitHub Actions (or Deploy from branch 'main')
    echo ========================================================
) else (
    echo.
    echo ❌ Push failed. Please verify that:
    echo    1. You created the repository '%REPO_NAME%' on https://github.com/new
    echo    2. You are logged into your GitHub account in Windows.
)

pause
