/// <reference types="cypress" />

describe('Context: My First Tests', () => {
  /**
   * Step 1
   * in order to upload files in Cypress we need to install plugin
   * we will run following command:
   * npm install -dev cypress-file-upload
   *Step 2
   * you need to import necessary command to our project
   * in our support folder we have commands.js file : this file is a good place for putting our utility methods
   * add following line
   * import 'cypress-file-upload';
   * Step 3
   * the file that you want to upload should be in your fixture folder
   */
  beforeEach(() => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/upload');
  });

  it('Check upload function', () => {
    //locator for choose file button
    cy.get('input#file-upload').attachFile('users.png');
    //click on upload button
    cy.get('#file-submit').click()
    //assert that path message is displayed

    cy.get('#uploaded-files').then((uploadedFiles)=>{

        cy.contains('users.png').should('be.visible')

    })

  });
});
