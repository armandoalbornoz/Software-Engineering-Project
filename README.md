# BMI Tracker
<a name="bmi-tracker"></a>
BMI Tracker is a tool to take charge of your health and fitness journey.
This README provides an overview of the structure and content of the BMI Tracker codebase.

## Table of Contents
<a name="table-of-contents"></a>
- [BMI Tracker](#bmi-tracker)
- [Table of Contents](#table-of-contents)
- [Project Content Structure](#project-content-structure)
    - [Client Overview](#client-overview)
    - [Client Content](#client-content)
    - [Server](#server-overview)
    - [Server Content](#server-content)
- [Application Structure](#application-structure)
- [Contributors](#contributors)

## Project Content Structure
<a name="project-content-structure"></a>
The BMI Tracker codebase is organized into two main directories, client, and server
each is responsible for different parts of the application.

### Client Overview
<a name="client-overview"></a>
- The frontend of the application is built using React.js
- Components are organized under the `src/components` directory.
- Context providers and custom hooks are used for managing application state and logic.

#### Client Content
<a name="client-content"></a>
- data: Contains JSON files used as databases for the application.
- public: Assets and HTML files served by the frontend.
- src: Source code for the frontend.
  - components: React components used to build the user interface.
  - context: Context providers for managing application state.
  - css: Stylesheets for styling the application.
  - customHooks: Custom React hooks.
  - getLPTheme.js: JavaScript file for getting the LP theme.
  - index.js: Entry point for the frontend application.

### Server Overview
<a name="server-overview"></a>

- The backend is implemented using Node.js and Express.js framework. 

- Middleware functions handle incoming requests. 

- Data models and routes define the structure and behavior of the API.

#### Server Content
<a name="server-content"></a>
- src: Source code for the backend.
  - middleware: Middleware functions used in the backend.
  - models: Data models for interacting with the database.
  - routes: API routes for handling requests.
  - index.js: Entry point for the backend application.

## Application Blueprint

```
Software-Engineering-Project
│   .gitignore
│   CMakeLists.txt
│   package.json
│   package-lock.json
│   README.md
│
├── client
│   ├── data
│   │   ├── db.json
│   │   └── db2.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── components
│       ├── context
│       ├── css
│       ├── customHooks
│       ├── getLPTheme.js
│       └── index.js
│
└── server
    ├── src
    │   ├── middleware
    │   ├── models
    │   ├── routes
    │   ├── .gitignore
    │   ├── index.js
    │   ├── package.json
    │   └── package-lock.json
```

## Contributors
<a name="contributors"></a> 
  - Armando Albornoz: Project Manager
  - Eric Hengber: Srum Master
  - Jiho Lee: Developer
  - Christopher Brierley: Developer