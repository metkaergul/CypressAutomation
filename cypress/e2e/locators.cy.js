/// <reference types="cypress" />

describe('find or get elements by using different locators',()=>{

    beforeEach(()=>{
        cy.clearCookies
        cy.visit('login')
    })


    it('check different locator strategies',()=>{
        
        cy.get("input[name='username']").type('hayyy yammy kolrid'); 
        cy.get("[type='text']").clear();
        cy.get("input").each((item ,index,list)=>{

            //assert the length  of the list is 2
            expect(list).to.have.length(2);
                expect(item).to.have.attr('type');
                
    })


    })

})