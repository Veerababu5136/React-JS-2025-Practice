/*

React js

-React Js is library 

-React js is used to build front end applications with advanced methods like components based development,fast rendering

-React js is a open source code

-React js has virtual DOM (document object model) , used for fastest rendering.

-React js used to develop single page application

-In react js we use component based development (for reusability). 

-In React js we use jsx syntax for writing code and that will be converted to html by using babel package



Advantages/Features:

Components based development

Virtual dom

Fastest Rendering

Single Page Application development

Used to develop web and mobile applications (react-native)







 React.js Folder and Files Structure

1. src Folder:  

  -The `src` (source) folder is where the main application code resides. It typically contains:

   - Components: Reusable UI elements (e.g., `Header.js`, `Footer.js`) are stored in the `components` folder.

   - App.js: The root component that brings together all other components and renders the main application
.
   - index.js: The entry point of the application where the React app is attached to the DOM.

2. public` Folder:  

   The `public` folder contains static files that do not undergo any build process. Key files include:

   - index.html: The HTML template file that serves the React application. It includes a `<div id="root"></div>` where the React components are rendered.

   - Static Assets: Images, favicon, and other assets that are directly accessible and can be referenced in the application.

3. package.json File:
  
   This file serves as the configuration file for the project, detailing the project's metadata, dependencies, and scripts. Key sections include:

   - Dependencies: Lists all the packages the project relies on, like `react`, `react-dom`, and others.

   - Scripts: Defines the commands to build, start, and test the application (e.g., `npm start`, `npm build`).


4. node_modules` Folder:  

   The `node_modules` folder stores all the installed npm packages and their dependencies. It is automatically generated when you run `npm install` and should be included in `.gitignore` to avoid version control conflicts.


5. .gitignore File:  

   This file specifies which files and folders should be ignored by Git, typically including `node_modules`, build artifacts, and environment files.

6. README.md File:
  
   This file usually contains documentation about the project, including how to set it up, run it, and any other important notes. It's often the first file a developer reads when starting with a new project.

7. build Folder:  
   After running the build command (`npm run build`), this folder is generated. It contains the optimized, minified, and production-ready version of your app that can be deployed to a web server.

This structure helps keep the project organized, making it easier to manage as it grows.






Note:

-In js we can write the html code using create element

-Next we use react to create code

-React can be included in 2 ways using CDN, and create react app

- In order to easy writing code we use jsx.




*/
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; // we use this function from anywhere
