/// <reference types="cypress" />
import LoginFixtures from '../fixtures/loginFixtures';
import ManageProjectsFixtures from '../fixtures/manageProjectsFixtures';
import ManageProjectsLocators from '../support/locators/manageProjectsLocators';

describe('Edit a SubProject', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('url'));
    })

    afterEach(()=>{

    })

    it('Edit SubProject Sucess', () => {
        cy.submitLoginFlows(LoginFixtures.userName, LoginFixtures.password)
        cy.selectManager()
        cy.selectManageProjects()
        cy.selectCreatedSubProject() // nao esta clicando !!!!!!!!
        cy.fillNameProject(ManageProjectsFixtures.nameSubProjectEdit)
        cy.selectState(ManageProjectsFixtures.stateEdit)
        cy.selectVisibilitie(ManageProjectsFixtures.visibilitieEdit)
        cy.fillDescription(ManageProjectsFixtures.descriptionSubProjectEdit)
        cy.selectAddProject()
        cy.assertText(ManageProjectsLocators.txCreatedSubProject, ManageProjectsFixtures.nameSubProjectEdit) 
    });
    

});