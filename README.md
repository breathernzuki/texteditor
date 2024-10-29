Text Editor PWA

This project is a Progressive Web Application (PWA) that provides a single-page text editor, capable of running offline and utilizing IndexedDB for data persistence. The application is built using modern web development tools such as Webpack, Babel, and Workbox, making it installable and accessible offline. This project was deployed to Render following the Render Deployment Guide.
Table of Contents

    User Story
    Acceptance Criteria
    Features
    Installation
    Usage
    Technologies Used
    Deployment
    Screenshots
    License

User Story

As a developer, I want to create notes or code snippets with or without an internet connection so that I can reliably retrieve them for later use.
Acceptance Criteria

    When the application is opened, it displays a client-server folder structure.
    Running npm run start from the root directory starts both the backend and frontend.
    The application is bundled using Webpack, and generates an HTML file, service worker, and manifest.
    Uses next-gen JavaScript, and the app works without errors in the browser.
    IndexedDB is created immediately upon opening the app.
    Content in the editor is saved when clicking outside the DOM window and is retained after reopening.
    The application can be installed as a PWA with an icon on the desktop.
    The service worker is registered and precaches static assets.
    The application is deployed on Render with appropriate build scripts.

Features

    Offline Support: Functions offline through service worker caching.
    Data Persistence: Stores editor content using IndexedDB and automatically saves data when the DOM is unfocused.
    Webpack Bundling: JavaScript is bundled with Webpack, including Babel for async/await support.
    Manifest and Service Worker: Uses a manifest for PWA functionality and Workbox for service worker setup.
    Installable: Can be installed to the user’s desktop or mobile device as a PWA.

Installation

To set up the project locally, follow these steps:

    Clone the repository and navigate to the project directory:

    bash

git clone <https://github.com/breathernzuki/texteditor.git>
cd text-editor-pwa

Install dependencies:

bash

npm install

Build the client:

bash

npm run build

Start the development server:

bash

    npm run start

Usage

Once the server is running, you can:

    Open the application in the browser, and you’ll find that the IndexedDB database is created immediately.
    Enter text into the editor, and it will be saved to IndexedDB when you click outside the editor window.
    Reopen the app to retrieve saved content from IndexedDB.
    Click on the "Install" button to install the app to your desktop as a PWA.

To view service worker and IndexedDB activity, open DevTools in your browser and go to the Application tab.
Technologies Used

    Webpack: For bundling JavaScript files and managing plugins.
    Babel: To enable modern JavaScript features, including async/await.
    IndexedDB: To store and retrieve data locally, ensuring persistence across sessions.
    idb: A lightweight wrapper around IndexedDB for simplified data management.
    Workbox: For generating the service worker and precaching assets.
    Render: For deploying the application.

Deployment

This application is deployed on Render. You can access the live version here (replace with your Render URL).
Screenshots
App Interface

Manifest File

Registered Service Worker

IndexedDB Storage

License

This project is licensed under the MIT License.