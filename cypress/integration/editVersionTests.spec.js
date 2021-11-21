/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsFixtures from '../fixtures/manageProjectsFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';
import InitialScreenLocators from '../support/locators/initialScreenLocators'

describe('loginTests', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Edit Version Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.get(InitialScreenLocators.btmanage).click()
        cy.get(ManageProjectsLocators.btmanageProjects).click()
        //cy.createProjectFlows(ManageProjectsFixtures.nameProjectFlows, ManageProjectsFixtures.descriptionFlows)
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