# Introdution
This project have the goal to automation the application Mantis Bug Tracker with the tool Cypress with JavaScript, when was testaded some tests cases referes the application, with test patterns.

# Installing the application Mantis with Windows

- Make download the tool xampp: https://www.apachefriends.org/download.html and install
- Make download the MantisBT: https://www.mantisbt.org/download.php, I used the version: 2.25.2
- Copy the unzipped mantis folder into the htdocs folder in xampp: C:\xampp\htdocs and leave the mantis folder with just the name mantis
- The, open the xampp and start the Apache and MySQL
- Open the browser and type: localhost/mantis

## Clone Project
`https://github.com/Ramonos9425/MantisBT_With_Cypress.git`
## Installing the Cypress first time (only in the first time)
[![npm version](https://camo.githubusercontent.com/eeac3804665f2c05dfaf1d18dff2722db530cde0/68747470733a2f2f62616467652e667572792e696f2f6a732f637970726573732e737667)](https://badge.fury.io/js/cypress)
Install Cypress for Mac, Linux, or Windows, then  [get started](https://docs.cypress.io/guides/getting-started/installing-cypress.html).

`npm install cypress --save-dev`

## Prepare the dependencies
install all dependencies from the root directory

`npm install`

## Opening Cypress GUI
to open the cypress and run tests

`npx cypress open` 

# Tests Cases

## Login
- Login Sucess
- Login Without Information
- Password Without Information
- Login Wrong
- Password Wrong


## Project
- Create Project
- Edit Project
- Delete Project
- Create Project Without Name

## SubProject
- Create SubProject
- Edit SubProject
- Delete SubProject
- Create SubProject Without Name

## Category
- Create Category
- Edit Category
- Delete Category
- Create the same Category

## Version
- Create Version
- Edit Version
- Delete Version
- Create the same Version