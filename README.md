# CREATE AND DEPLOY YOUR FIRST REACT APPLICATION 

Step # 01. Install Node.js and npm

1. Goto: https://nodejs.org/en
2. Download the LTS version.
3. Run the exe.
5. Verify the installtion. Open Command Prompt, Run the command: node-v (This will return the node version)
6. Also verify npm installtion using: npm -v (This will return the npm version)
7. Open Environment variables from search.
8. Under system vaiables click on Path then Edit.
9. Verify that the path to where your nodejs is installed is present there.
10. If not add the path.

Step # 02. Create a New React Appliacation

1.  Create a new folder.
2.  Open that folder in any IDE. (Eg. VS CODE)
3.  Open a new terminal.
4.  Run the command to create a new vite project: npm create vite@latest
5.  Name your project and package.
6.  From the options select React.
7.  Now depending on your need select Typescript or Javascript.
8.  Now to install the node modules, run the command: npm install
9.  Then change the directory to go inside your project directory. For that run the command: cd "your_project_name"
10. To install the node modules, run the command: npm install.
11. Now you application is created. The src folder conatins the code of your application in the App.css, App.jsx or App.tsx, index.css and main.jsx or main.tsx files.
12. Your can change/modify the files according to your need.
13. Then to run the application, run the command: npm run dev
14. A local host link will appear Ctrl + Click that link to open the application on the browser.

Step # 03: Install Git (Not GitHub)

1. Goto: https://git-scm.com/downloads
2. Download the Windows/MAC/Linux version depending on youe operating system.
3. Run the exe.
4. Install
5. Open terminal to verify the installation.
6. Run the command: git -v (This will return the git version)
7. Open Environment variables from search.
8. Under system vaiables click on Path then Edit.
9. Verify that the path to where your git is installed is present there.
10. If not add the path.

Step # 04: Push your aplication to Github

1. Goto: Github.com
2. Login/SignUp
3. Create a new repository. (Do not initialize it with README.MD or .gitignore beacuse your project already contains those files)
4. Open terminal and navigate to the directory in which your project is present using: cd "path_to_your_project_directory" or simply just open the folder from file explorer Right Click and open terminal.
  # Step 1: Initialize Git repository  
  git init  
  
   Step 2: Add a remote repository (Replace <repository_url> with your actual GitHub repo URL)  
  git remote add origin <repository_url>  
  
   Step 3: Stage all files  
  git add .  
  
   Step 4: Commit the changes with a message  
  git commit -m "Initial commit"  
  
   Step 5: Push changes to the GitHub repository (on the main branch)  
  git branch -M main  
  git push -u origin main  

Step # 05: Deploy to Vercel
1. Goto: Vercel.com
2. Login/Signup
3. Click Add new -> Project
4. Link Vercel with Github
5. Install Github
6. Import the repository that you want to deploy.
7. The click deploy.
8. A window will be opened click that window, your deployed application will be shown on the browser.
9. Copy the URL, which t=is your deployment link.

Additionally, one advantage is that, you won't need to pen github or vercel deploy again everytime you make changes to your project just make changes in your vs code open terminal run the following commands,
git add .
git commit -m "Updated feature"
git push origin main
vercel --prod
