/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';
import InitialScreenLocators from '../support/locators/initialScreenLocators'

describe('loginTests', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Edit Category Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.get(InitialScreenLocators.btmanage).click()
        cy.get(ManageProjectsLocators.btmanageProjects).click()
        //cy.createProjectFlows(ManageProjectsFixtures.nameProjectFlows, ManageProjectsFixtures.descriptionFlows)
        cy.selectCreatedProject()
        cy.selectDeleteCategory()
        cy.selectConfirmDeleteCategory()
        cy.selectProceed()
        cy.assertText2(ManageProjectsLocators.textValidationCategory) 
    });

});