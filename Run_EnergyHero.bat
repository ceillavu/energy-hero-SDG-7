@echo off
title Energy Hero - SDG 7
echo Starting Energy Hero...
java -jar EnergyHero.jar
if %errorlevel% neq 0 (
    echo.
    echo ========================================================
    echo Error: Failed to launch Energy Hero.
    echo Please ensure Java 17 or higher is installed on your PC.
    echo You can download Java from: https://www.oracle.com/java/
    echo ========================================================
    echo.
    pause
)
