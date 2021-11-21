# Introdution
This project have the goal to automation the application Mantis Bug Tracker with the tool Cypress, when was testaded some tests cases referes the application, with test patterns.

# Installing the application Mantis with Windows

1 - Make download the tool xampp: https://www.apachefriends.org/download.html and install
2 - Make download the MantisBT: https://www.mantisbt.org/download.php, I used the version: 2.25.2
3 - Copy the unzipped mantis folder into the htdocs folder in xampp: C:\xampp\htdocs and leave the mantis folder with just the name mantis
4 - The, open the xampp and start the Apache and MySQL
5 - Open the browser and type: localhost/mantis

## Clone Project
`git clone https://github.com/Sayoan/cypress_example.git`
## Installing the Cypress first time (only in the first time)
[![npm version](https://camo.githubusercontent.com/eeac3804665f2c05dfaf1d18dff2722db530cde0/68747470733a2f2f62616467652e667572792e696f2f6a732f637970726573732e737667)](https://badge.fury.io/js/cypress)
Install Cypress for Mac, Linux, or Windows, then  [get started](https://docs.cypress.io/guides/getting-started/installing-cypress.html).

`npm install cypress --save-dev`

## Prepare the dependencies
install all dependencies from the root directory

`npm install`

## Opening Cypress GUI
to open the cypress and run tests

`npm run cypress:open` 

if u want customize u need access `.../package.json`

## Running from the CLI
`npm run cypress:run`

running switching browser

`npm run cypress:run -- --browser chrome`

sends test results, videos, screenshots to Cypress dashboard

`npm run cypress:run -- --record`
