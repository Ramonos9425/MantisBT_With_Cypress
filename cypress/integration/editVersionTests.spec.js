/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsFixtures from '../fixtures/manageProjectsFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';

describe('Edit a Version', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Edit Version Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedProject()
        cy.selectEditVersion()
        cy.fillEditVersion(ManageProjectsFixtures.nameEditVersion)
        cy.fillDescriptionVersion(ManageProjectsFixtures.descriptionVersion)
        cy.selectReleasedVersion()
        cy.selectUpdateVersion()
        cy.selectProceed()
        cy.assertText(ManageProjectsLocators.textValidationVersion, ManageProjectsFixtures.nameEditVersion) 
    });

});