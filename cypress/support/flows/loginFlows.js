import LoginLocators from "../locators/loginLocators"

Cypress.Commands.add("submitLoginFlows", () => {
    cy.get(LoginLocators.tfUsername).type(username)
    cy.get(LoginLocators.btLogin).click()
    cy.get(LoginLocators.tfPassword).type(password)
    cy.get(LoginLocators.btLogin).click()
    
})
