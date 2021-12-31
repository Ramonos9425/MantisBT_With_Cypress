/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';

describe('Remove a Version', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Remove Version Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedProject()
        cy.selectDeleteVersion()
        cy.selectConfirmDeleteVersion()
        cy.assertText2(ManageProjectsLocators.textValidationVersion) 
    });

});