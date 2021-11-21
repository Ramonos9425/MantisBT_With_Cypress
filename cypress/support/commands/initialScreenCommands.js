import InitialScreenLocators from "../locators/initialScreenLocators"

Cypress.Commands.add("selectManager", () => {
    cy.get(InitialScreenLocators.btmanage).click()
})
