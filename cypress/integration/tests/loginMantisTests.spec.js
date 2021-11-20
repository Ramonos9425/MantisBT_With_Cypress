/// <reference types="cypress" />
import LoginFixtures from '../../fixtures/loginFixtures';
import LoginLocators from '../../support/locators/loginLocators'

describe('loginTests', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Login Sucess', () => {
        cy.fillUsername(LoginFixtures.userName)
        cy.submitLogin()
        cy.fillPassword(LoginFixtures.password)
        cy.submitLogin()
        cy.assertText(LoginLocators.messageValidation, LoginFixtures.messageValidationLogin)    
    });
    
    it('Login without information', () => {
        cy.submitLogin()
        cy.assertText(LoginLocators.messageErrorLogin, LoginFixtures.messageErrorLogin)   
      });

    it('Passoword without information', () => {
        cy.fillUsername(LoginFixtures.userName)
        cy.submitLogin()
        cy.submitLogin()
        cy.assertText(LoginLocators.messageErrorLogin, LoginFixtures.messageErrorLogin)   
    });

    it('Login wrong', () => {
        cy.fillUsername(LoginFixtures.userNameWrong)
        cy.submitLogin()
        cy.fillPassword(LoginFixtures.password)
        cy.submitLogin()
        cy.assertText(LoginLocators.messageErrorLogin, LoginFixtures.messageErrorLogin)   
    });

    it('Passwrod wrong', () => {
        cy.fillUsername(LoginFixtures.userName)
        cy.submitLogin()
        cy.fillPassword(LoginFixtures.passwordWrong)
        cy.submitLogin()
        cy.assertText(LoginLocators.messageErrorLogin, LoginFixtures.messageErrorLogin)   
    });
    
});