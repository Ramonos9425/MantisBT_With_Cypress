/// <reference types="cypress" />
import LoginFixtures from '../../fixtures/loginFixtures';
import ManageProjectsFixtures from '../../fixtures/manageProjectsFixtures';
import ManageProjectsLocators from '../../support/locators/manageProjectsLocators';

describe('loginTests', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Create Project Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectNewProject()
        cy.fillNameProject(ManageProjectsFixtures.nameProject)
        cy.selectState(ManageProjectsFixtures.state)
        cy.selectVisibilitie(ManageProjectsFixtures.visibilitie)
        cy.fillDescription(ManageProjectsFixtures.description)
        cy.selectAddProject()
        cy.assertText(ManageProjectsLocators.messageValidationSucess, ManageProjectsFixtures.messageValidationProjectSucess)
        cy.selectProceed()
        cy.assertText(ManageProjectsLocators.txCreatedProject, ManageProjectsFixtures.nameProject) 
    });
    

});