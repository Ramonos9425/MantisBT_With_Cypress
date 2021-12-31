/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsFixtures from '../fixtures/manageProjectsFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';

describe('Edit a Category', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Edit Category Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedProject()
        cy.selectEditCategory()
        cy.fillNameCategory(ManageProjectsFixtures.nameEditCategory)
        cy.selectAssignTo(ManageProjectsFixtures.nameAssign)
        cy.selectUpdateCategory()
        cy.selectProceed()
        cy.assertText(ManageProjectsLocators.textValidationCategory, ManageProjectsFixtures.nameEditCategory) 
    });

});