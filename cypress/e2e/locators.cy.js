/// <reference types="cypress" />

describe('find or get elements by using different locators',()=>{

    beforeEach(()=>{
        cy.clearCookies
        cy.visit('login')
    })


    it('check different locator strategies',()=>{
        
        cy.get("input[name='username']").type('hayyy yammy kolrid'); 
        cy.get("[type='text']").clear();
    })


})