/// <reference types="cypress" />
import LoginFixtures from '../../fixtures/loginFixtures';
import ManageProjectsLocators from '../../support/locators/manageProjectsLocators';

describe('loginTests', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Delete SubProject', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedSubProject()
        cy.selectDeleteProject()
        cy.selectConfirmDeleteProject()
        cy.assertText2(ManageProjectsLocators.txCreatedSubProject) 
    });
    

});