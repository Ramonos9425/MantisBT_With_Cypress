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

    it.only('Create SubProject Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.get(InitialScreenLocators.btmanage).click()
        cy.get(ManageProjectsLocators.btmanageProjects).click()
        //cy.createProjectFlows(ManageProjectsFixtures.nameProjectFlows, ManageProjectsFixtures.descriptionFlows)
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
        cy.get(InitialScreenLocators.btmanage).click()
        cy.get(ManageProjectsLocators.btmanageProjects).click()
        cy.selectCreatedProject()
        cy.selectCreateSubProject()
        cy.fillDescription(ManageProjectsFixtures.descriptionSubProject)
        cy.selectAddProject()
        cy.assertText(ManageProjectsLocators.txValidationNameProject, ManageProjectsFixtures.textValidationState) //arrumar
    });
    

});