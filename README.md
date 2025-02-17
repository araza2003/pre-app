Here is the text you requested without changing the content:

---

# CREATE AND DEPLOY YOUR FIRST REACT APPLICATION

### Step #01: Install Node.js and npm

1. Goto: https://nodejs.org/en
2. Download the LTS version.
3. Run the exe.
5. Verify the installation. Open Command Prompt, Run the command: `node -v` (This will return the node version).
6. Also verify npm installation using: `npm -v` (This will return the npm version).
7. Open Environment variables from search.
8. Under system variables click on Path then Edit.
9. Verify that the path to where your nodejs is installed is present there.
10. If not, add the path.

### Step #02: Create a New React Application

1. Create a new folder.
2. Open that folder in any IDE (e.g., VS CODE).
3. Open a new terminal.
4. Run the command to create a new Vite project: `npm create vite@latest`.
5. Name your project and package.
6. From the options select React.
7. Now depending on your need, select TypeScript or JavaScript.
8. Now to install the node modules, run the command: `npm install`.
9. Then change the directory to go inside your project directory. For that, run the command: `cd "your_project_name"`.
10. To install the node modules, run the command: `npm install`.
11. Now your application is created. The `src` folder contains the code of your application in the `App.css`, `App.jsx` or `App.tsx`, `index.css`, and `main.jsx` or `main.tsx` files.
   - **App.css**: Contains styles specific to the App component. Used to style the overall layout and appearance.
   - **App.jsx / App.tsx**: The main component that defines the overall structure and renders child components. Uses `.jsx` for JavaScript or `.tsx` for TypeScript.
   - **index.css**: Contains global styles and resets for the entire application. It is applied to the app before rendering.
   - **main.jsx / main.tsx**: The entry point where the app is rendered into the DOM. It connects the React app to the root HTML element.
12. You can change/modify the files according to your need.
13. Then to run the application, run the command: `npm run dev`.
14. A local host link will appear. Ctrl + Click that link to open the application in the browser.

### Step #03: Install Git (Not GitHub)

1. Goto: https://git-scm.com/downloads
2. Download the Windows/MAC/Linux version depending on your operating system.
3. Run the exe.
4. Install.
5. Open the terminal to verify the installation.
6. Run the command: `git -v` (This will return the git version).
7. Open Environment variables from search.
8. Under system variables click on Path then Edit.
9. Verify that the path to where your git is installed is present there.
10. If not, add the path.

### Step #04: Push Your Application to GitHub

1. Goto: https://github.com/
2. Login/SignUp.
3. Create a new repository. (Do not initialize it with README.MD or .gitignore because your project already contains those files).
4. Open terminal and navigate to the directory in which your project is present using: `cd "path_to_your_project_directory"` or simply just open the folder from File Explorer, right-click, and open terminal.
   - **Step 1**: Initialize Git repository  
     `git init`
   
   - **Step 2**: Add a remote repository (Replace `<repository_url>` with your actual GitHub repo URL)  
     `git remote add origin <repository_url>`
   
   - **Step 3**: Stage all files  
     `git add .`
   
   - **Step 4**: Commit the changes with a message  
     `git commit -m "Initial commit"`
   
   - **Step 5**: Push changes to the GitHub repository (on the main branch)  
     `git branch -M main`  
     `git push -u origin main`

### Step #05: Deploy to Vercel

1. Goto: https://vercel.com/
2. Login/Signup.
3. Click Add new -> Project.
4. Link Vercel with GitHub.
5. Install GitHub.
6. Import the repository that you want to deploy.
7. Then click deploy.
8. A window will open showing your deployed application in the browser.
9. Copy the URL, which is your deployment link.

Additionally, one advantage is that you won't need to open GitHub or Vercel deploy again every time you make changes to your project. Just make changes in your VS Code, open terminal, and run the following commands:
1. `git add .`
2. `git commit -m "Updated feature"`
3. `git push origin main`
4. `vercel --prod`
