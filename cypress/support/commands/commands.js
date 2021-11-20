Cypress.Commands.add("assertText", (element, text) => {
    cy.get(element).should("include.text", text)
  });
    
  Cypress.Commands.add("clickElementByText", (text) => {
    cy.contains(text).click();
  });
    
  Cypress.Commands.add("clickElement", (element) => {
    cy.get(element).click();
  });
    
  Cypress.Commands.add("clearInput", (element) => {
    cy.get(element).clear();
  });