import ManageProjectsLocators from '../locators/manageProjectsLocators'
import InitialScreenLocators from "../locators/initialScreenLocators"

Cypress.Commands.add("createProjectFlows", (nameProject,description)=> {

    cy.get(ManageProjectsLocators.btCreateNewProject).click()
    cy.get(ManageProjectsLocators.txNameProject).clear().type(nameProject)
    cy.get(ManageProjectsLocators.txDescription).clear().type(description)
    cy.get(ManageProjectsLocators.btAddProject).click()
    cy.get(ManageProjectsLocators.btProceed).click()
})