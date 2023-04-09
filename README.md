# 13-in-and-out-inventory

## Description
This is an object-relational mapping (ORM) challenge to build the back end for an e-commerce site. The application is an Express.js API that is configured to use Sequelize to interact with a MySQL database. The application allows users to view, create, update, and delete data in the database.

In building this app, I learned how to leverage insomnia to add, delete and change data in a database, which was challenging and rewarding. One crazy thing happened where there was a weird glitch in one of my GET and the only way to fix it was deleting it and creating a new one. Sometime's it's best to just unplug and plug back in. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Tests](#tests)

## Installation
To use this application, clone the repository and install the required dependencies by running the command npm install in the terminal.

## Usage
Before starting the application, ensure that the database name, MySQL username, and MySQL password are added to an environment variable file. After installation, run the command npm run seed to seed the development database with test data. Then, start the server by running npm start. Once the server is running, use Insomnia Core to test the API routes for categories, products, or tags. The data for each of these routes is displayed in formatted JSON.

You can also follow a video guide on installation and useage here: https://drive.google.com/file/d/1upsY-Kolw0SGitAfAsDhB4vfIcov-toM/view

## Credits
This application was created as a challenge project for a course on Full-Stack Web Development.

## License
This application is licensed under the MIT license.

## Features
Allows users to view, create, update, and delete data in the database
Uses Sequelize to interact with a MySQL database
Configured as an Express.js API

## Tests
To test the application, use Insomnia Core to test the API routes for categories, products, or tags. When testing the routes, ensure that the acceptance criteria outlined in the User Story section are being met.

Additionally, a walkthrough video demonstrating the application's functionality should be created and submitted alongside the application. The video should showcase the functionality of the application and demonstrate that all of the acceptance criteria are being met.