@echo off
call npm install
rem check if config.json exists and if not, run npm setup
IF EXIST config.json (
    echo found config.json
) ELSE (
    call npm run setup
)
call npm start
@echo on
