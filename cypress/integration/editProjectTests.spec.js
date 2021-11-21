/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsFixtures from '../fixtures/manageProjectsFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';

describe('loginTests', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Edit Project Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedProject()
        cy.fillNameProject(ManageProjectsFixtures.nameProjectEdit)
        cy.selectState(ManageProjectsFixtures.stateEdit)
        cy.selectVisibilitie(ManageProjectsFixtures.visibilitieEdit)
        cy.fillDescription(ManageProjectsFixtures.descriptionEdit)
        cy.selectAddProject()
        cy.assertText(ManageProjectsLocators.txCreatedProject, ManageProjectsFixtures.nameProjectEdit) 
    });
    

});