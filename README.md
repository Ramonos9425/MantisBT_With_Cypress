# Introdution
This project have the goal to automation the application Mantis Bug Tracker with the tool Postman with JavaScript, when was testaded some end points referes the application.

# Installing the application Mantis with Windows

- Make download the tool xampp: https://www.apachefriends.org/download.html and install
- Make download the MantisBT: https://www.mantisbt.org/download.php, I used the version: 2.25.2
- Copy the unzipped mantis folder into the htdocs folder in xampp: C:\xampp\htdocs and leave the mantis folder with just the name mantis
- The, open the xampp and start the Apache and MySQL
- Open the browser and type: localhost/mantis

## Clone Project
`https://github.com/Ramonos9425/MantisBT_With_Cypress.git`

## To open the collection and environment in Postman: File -> Import -> File
- Its necessary to change the authorization token, do login in Mantis, go to user configuration: API Keys, its necessary to create one, and to change in Postman: environment  to set the access_token in current_value

# Tests Cases

## Projects
- Get all projects
- Get a project
- Create a project
- Update a project
- Delete a project
- Add a sub-project
- Update a subproject
- Delete a sub-project
- Create a project version

## Issues
- Get an issue
- Get issue files
- Get issue file (single)
- Get all issues
- Get issues for a project
- Get issues matching filter
- Get isssues assigned to me
- Get issues reported by me
- Get issues monitored by me
- Get unassigned issues
- Create an issue (minimal)
- Create an issue
- Create an issue with attachment
- Update an issue (minimal)
- Update an issue
- Delete an issue
- Add attachments to issue
- Create an issue note
- Create an issue note with time tracking
- Create an issue note with attachment
- Delete an issue note
- Monior an issue
- Monitor an issue (for specified users)
- Attach a tag to issue
- Detach a tag from an issue
- Attach a tag to issue copy
- Add an issue relationship
- Delete an issue relationship

## SubProject
- Get all filters
- Get a filter
- Delete a filter

## Users
- Get My User Info
- Create a user
- Create a user (minimal)
- Delete a user
- Reset user password

## Config
- Get Configuration Option
- Get Multiple Configuration Options

## Lang
- Get a localized string
- Get multiple localized strings

## Pages
- Get Issue View Page