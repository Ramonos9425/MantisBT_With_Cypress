/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsFixtures from '../fixtures/manageProjectsFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';

describe('Create a SubProject', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it.only('Create SubProject Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedProject()
        cy.selectCreateSubProject()
        cy.fillNameProject(ManageProjectsFixtures.nameSubProject)
        cy.fillDescription(ManageProjectsFixtures.descriptionSubProject)
        cy.selectAddProject()
        cy.selectProceed()
        cy.assertText(ManageProjectsLocators.txCreatedSubProject, ManageProjectsFixtures.nameSubProject) 
    });

    it('Create SubProject Without Name', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedProject()
        cy.selectCreateSubProject()
        cy.fillDescription(ManageProjectsFixtures.descriptionSubProject)
        cy.selectAddProject()
        cy.assertText(ManageProjectsLocators.txValidationNameProject, ManageProjectsFixtures.textValidationState) //arrumar
    });
    

});