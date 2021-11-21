/// <reference types="cypress" />
import LoginFixtures from '../../fixtures/loginFixtures';
import ManageProjectsFixtures from '../../fixtures/manageProjectsFixtures';
import ManageProjectsLocators from '../../support/locators/manageProjectsLocators';
import InitialScreenLocators from '../../support/locators/initialScreenLocators'

describe('loginTests', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it.only('Create Category Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.get(InitialScreenLocators.btmanage).click()
        cy.get(ManageProjectsLocators.btmanageProjects).click()
        //cy.createProjectFlows(ManageProjectsFixtures.nameProjectFlows, ManageProjectsFixtures.descriptionFlows)
        cy.selectCreatedProject()
        cy.fillNewCategory(ManageProjectsFixtures.nameCategory)
        cy.selectCreateCategory()
        cy.assertText(ManageProjectsLocators.textValidationCategory, ManageProjectsFixtures.nameCategory) 
    });

});