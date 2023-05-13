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
        
            
        //find element with class attribute and create a list then select 3 rd one 
        cy.get('.btn.btn-primary').then(($buttons)=>{
            cy.wrap($buttons).eq(2).click();
            //assert the textx
            cy.contains('Clicked on button three!').should('be.visible')

        
        })

    })

   
    })



