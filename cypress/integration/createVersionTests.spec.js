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

    it('Create Version Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.get(InitialScreenLocators.btmanage).click()
        cy.get(ManageProjectsLocators.btmanageProjects).click()
        //cy.createProjectFlows(ManageProjectsFixtures.nameProjectFlows, ManageProjectsFixtures.descriptionFlows)
        cy.selectCreatedProject()
        cy.fillVersion(ManageProjectsFixtures.nameVersion)
        cy.selectAddVersion()
        cy.selectProceed()
        cy.assertText(ManageProjectsLocators.textValidationVersion, ManageProjectsFixtures.nameVersion) 
    });

});