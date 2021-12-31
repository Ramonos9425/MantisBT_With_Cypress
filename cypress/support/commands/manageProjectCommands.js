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

Cypress.Commands.add("selectCreateSubProject", () => {
    cy.get(ManageProjectsLocators.btCreateSubproject).click({force: true})
})

Cypress.Commands.add("selectCreatedSubProject", () => {
    cy.get(ManageProjectsLocators.txCreatedSubProject).click()
})

Cypress.Commands.add("fillNewCategory", (category) => {
    cy.get(ManageProjectsLocators.txNewCategory).type(category)
})

Cypress.Commands.add("selectCreateCategory", () => {
    cy.get(ManageProjectsLocators.btaddCategory).click()
})

Cypress.Commands.add("selectEditCategory", () => {
    cy.get(ManageProjectsLocators.btEditCategory).click()
})

Cypress.Commands.add("fillNameCategory", (nameCategory) => {
    cy.get(ManageProjectsLocators.txNameCategory).clear().type(nameCategory)
})

Cypress.Commands.add("selectAssignTo", (nameAssign) => {
    cy.get(ManageProjectsLocators.cbAssignTo).select(nameAssign)
})

Cypress.Commands.add("selectUpdateCategory", () => {
    cy.get(ManageProjectsLocators.btUpdateCategory).click()
})

Cypress.Commands.add("selectDeleteCategory", () => {
    cy.get(ManageProjectsLocators.btDeleteCategory).click()
})

Cypress.Commands.add("selectConfirmDeleteCategory", () => {
    cy.get(ManageProjectsLocators.btConfirmDeleteCategory).click()
})

Cypress.Commands.add("fillVersion", (nameVersion) => {
    cy.get(ManageProjectsLocators.txNameVersion).type(nameVersion)
})

Cypress.Commands.add("selectAddVersion", () => {
    cy.get(ManageProjectsLocators.btAddVerion).click()
})

Cypress.Commands.add("selectEditVersion", () => {
    cy.get(ManageProjectsLocators.btEditVersion).click()
})

Cypress.Commands.add("fillEditVersion", (nameVersion) => {
    cy.get(ManageProjectsLocators.txNameEditVersion).clear().type(nameVersion)
})

Cypress.Commands.add("selectDataVersion", () => {
    cy.get(ManageProjectsLocators.txNameEditVersion).click()
})

Cypress.Commands.add("fillDescriptionVersion", (descriptionVersion) => {
    cy.get(ManageProjectsLocators.txDescriptionVersion).clear().type(descriptionVersion)
})

Cypress.Commands.add("selectReleasedVersion", () => {
    cy.get(ManageProjectsLocators.sbReleased).click()
})

Cypress.Commands.add("selectUpdateVersion", () => {
    cy.get(ManageProjectsLocators.btUpdateVersion).click()
})

Cypress.Commands.add("selectDeleteVersion", () => {
    cy.get(ManageProjectsLocators.btDeleteVersion).click()
})

Cypress.Commands.add("selectConfirmDeleteVersion", () => {
    cy.get(ManageProjectsLocators.btConfirmDeleteVersion).click()
})