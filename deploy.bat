@echo off
echo ==========================================
echo Nail Salon Next.js - Deployment Helper
echo ==========================================
echo.
echo This script helps prepare your project for deployment.
echo.
echo Steps:
echo 1. Initialize Git repository
echo 2. Create GitHub repository (manual step)
echo 3. Push to GitHub
echo 4. Deploy to Vercel
echo.
pause

echo Step 1: Checking Git installation...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed. Please install Git from https://git-scm.com/
    pause
    exit /b 1
)
echo Git is installed.

echo.
echo Step 2: Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo Node.js is installed.

echo.
echo Step 3: Initializing Git repository...
cd /d "C:\Users\Experttech.pk\Documents\Open Code\Temp Nail Salon\nail-salon-nextjs"
git init
echo Git repository initialized.

echo.
echo Step 4: Adding files to Git...
git add .
echo Files added.

echo.
echo Step 5: Making initial commit...
git commit -m "Initial commit: Nail salon website with booking system"
echo Initial commit created.

echo.
echo ==========================================
echo NEXT STEPS:
echo ==========================================
echo.
echo 1. Create a GitHub repository at: https://github.com/new
echo    - Repository name: nail-salon-nextjs
echo    - Keep it public or private (your choice)
echo    - Do NOT initialize with README, .gitignore, or license
echo.
echo 2. Copy the repository URL from GitHub
echo.
echo 3. Run these commands (replace YOUR_USERNAME):
echo    git remote add origin https://github.com/YOUR_USERNAME/nail-salon-nextjs.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 4. Go to Vercel: https://vercel.com
echo    - Sign up with GitHub
echo    - Click "Add New" -> "Project"
echo    - Import your GitHub repository
echo    - Deploy!
echo.
echo 5. Your site will be live at: https://nail-salon-nextjs.vercel.app
echo.
echo For detailed instructions, see DEPLOYMENT.md
echo.
pause