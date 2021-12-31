/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';

describe('Remove a Category', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Remove Category Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedProject()
        cy.selectDeleteCategory()
        cy.selectConfirmDeleteCategory()
        cy.selectProceed()
        cy.assertText2(ManageProjectsLocators.textValidationCategory) 
    });

});