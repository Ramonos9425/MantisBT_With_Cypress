/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsFixtures from '../fixtures/manageProjectsFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';

describe('Create a Version', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Create Version Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedProject()
        cy.fillVersion(ManageProjectsFixtures.nameVersion)
        cy.selectAddVersion()
        cy.selectProceed()
        cy.assertText(ManageProjectsLocators.textValidationVersion, ManageProjectsFixtures.nameVersion) 
    });

});