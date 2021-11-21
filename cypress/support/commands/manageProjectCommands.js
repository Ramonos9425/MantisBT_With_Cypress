import ManageProjectsLocators from "../locators/manageProjectsLocators"

Cypress.Commands.add("selectManageProjects", () => {
    cy.get(ManageProjectsLocators.btmanageProjects).click()
})

Cypress.Commands.add("selectNewProject", () => {
    cy.get(ManageProjectsLocators.btCreateNewProject).click()
})


Cypress.Commands.add("fillNameProject", (nameProject) => {
    cy.get(ManageProjectsLocators.txNameProject).clear().type(nameProject)
})

Cypress.Commands.add("selectState", (state) => {
    cy.get(ManageProjectsLocators.cbState).select(state)
})

Cypress.Commands.add("selectVisibilitie", (visibilitie) => {
    cy.get(ManageProjectsLocators.cbVisibilitie).select(visibilitie)
})

Cypress.Commands.add("fillDescription", (description) => {
    cy.get(ManageProjectsLocators.txDescription).clear().type(description)
})

Cypress.Commands.add("selectAddProject", () => {
    cy.get(ManageProjectsLocators.btAddProject).click()
})

Cypress.Commands.add("selectCreatedProject", () => {
    cy.get(ManageProjectsLocators.txCreatedProject).click()
})

Cypress.Commands.add("selectProceed", () => {
    cy.get(ManageProjectsLocators.btProceed).click()
})

Cypress.Commands.add("selectDeleteProject", () => {
    cy.get(ManageProjectsLocators.btDeleteProject).click()
})

Cypress.Commands.add("selectConfirmDeleteProject", () => {
    cy.get(ManageProjectsLocators.btConfirmDeleteProject).click()
})
