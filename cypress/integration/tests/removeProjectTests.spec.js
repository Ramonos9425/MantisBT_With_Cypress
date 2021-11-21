/// <reference types="cypress" />
import LoginFixtures from '../../fixtures/loginFixtures';
import ManageProjectsFixtures from '../../fixtures/manageProjectsFixtures';
import ManageProjectsLocators from '../../support/locators/manageProjectsLocators';

describe('loginTests', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Delete Project', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedProject()
        cy.selectDeleteProject()
        cy.selectConfirmDeleteProject()
        cy.assertText2(ManageProjectsLocators.txCreatedProject) 
    });
    

});