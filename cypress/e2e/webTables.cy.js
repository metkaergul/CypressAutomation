/// <reference types="cypress" />

describe('Cypress Webtable Test',{baseUrl:'https://demoqa.com'}, () => {
    
    beforeEach('Navigate to upload page',() => {
      // run before each test case, beforeMethod in TestNG
      cy.clearCookies();
      cy.visit('/webtables')
    });
    
    it('Check finding and editing a record', () => {
            //locate table body and navigate through this element to find ALden ,then update info with another person
            cy.get('.rt-tbody') //get me the table body
            .contains('.rt-tr-group','Alden') //get me the row that contains Alden
            .then((row)=>{

                //click on edit button
            cy.wrap(row).find('[title="Edit"]').click();

            //edit it within edit popsup
            cy.get('#firstName').clear().type('Aldennee')
            cy.get('#lastName').clear().type('Centrallele')
            cy.get('#userEmail').clear().type('aldenneexam@example.com')
            cy.get('#submit').click();

            cy.wrap(row).find('.rt-td').eq(0).should('contain',"Aldenne")
            cy.wrap(row).find('.rt-td').eq(1).should('contain',"Centrallele")
            })
    });
   

  });
  