/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';

describe('Remove a Project', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Remove Project Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedProject()
        cy.selectDeleteProject()
        cy.selectConfirmDeleteProject()
        cy.assertText2(ManageProjectsLocators.txCreatedProject) 
    });
    

});