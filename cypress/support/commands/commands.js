Cypress.Commands.add("assertText", (element, text) => {
    cy.get(element).should("include.text", text)
});
  
Cypress.Commands.add("assertText2", (element) => {
  cy.get(element).should("not.exist")
});