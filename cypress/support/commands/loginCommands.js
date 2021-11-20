import LoginLocators from "../locators/loginLocators"

Cypress.Commands.add("fillUsername", (username) => {
    cy.get(LoginLocators.tfUsername).type(username)
})

Cypress.Commands.add("fillPassword", (password) => {
    cy.get(LoginLocators.tfPassword).type(password)
})

Cypress.Commands.add("submitLogin", () => {
    cy.get(LoginLocators.btLogin).click()
})

