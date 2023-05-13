/// <reference types="cypress" />

describe('find or get elements by using different locators',()=>{

    beforeEach(()=>{
        cy.clearCookies()
        cy.visit('multiple_buttons')
    })


    it('check different button actions',()=>{
        
        //select a button with text 
        cy.contains('Button 2').should('be.visible').click();

        cy.contains('Clicked on button two!').should('be.visible')
        
                
    })

   
    })



