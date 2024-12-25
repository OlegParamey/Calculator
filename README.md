# Calculator Application

This is a simple calculator application built with JavaScript and Webpack. It includes a responsive user interface with a toggleable theme (light and dark theme).

## Task

https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?pli=1&tab=t.0

## How to run the app

### Development

Run the development server:

npm start

This will start a local server at `http://localhost:3000` and enable hot reloading.

### Building for Production

To build the application for production:

npm run build:prod

### Building for Development

To build the application for development:

npm run build:dev

## Features

-   Basic arithmetic operations: addition, subtraction, multiplication, and division.
-   Clear (AC) and percentage (%) functionality.
-   Toggle between light and dark themes.

## Project Structure

calculator/
├── build/ # Compiled files (output by Webpack)
│ ├── index.html
│ └── main.js
├── node_modules/ # Dependencies
├── public/
│ └── index.html # Template HTML file
├── src/ # Source code
│ ├── js/
│ │ ├── display.js # Handles UI updates
│ │ ├── handlers.js # Event listeners for calculator actions
│ │ ├── operations.js # Logic for arithmetic operations
│ │ └── utils.js # Utility functions
│ ├── state/
│ │ └── calculator.js # Calculator state management
│ └── style.css # Styling for the application
├── .gitignore # Files and directories to ignore in git
├── package.json # Project metadata and scripts
├── package-lock.json # Locks dependency versions
├── README.md # Project documentation (this file)
└── webpack.config.js # Webpack configuration

## Technologies Used

-   HTML, CSS, and JavaScript
-   Webpack
-   Node.js
