/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';

describe('Remove a SubProject', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Remove SubProject Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedSubProject() //problema ao clicar aqui
        cy.selectDeleteProject()
        cy.selectConfirmDeleteProject()
        cy.assertText2(ManageProjectsLocators.txCreatedSubProject) 
    });
    

});