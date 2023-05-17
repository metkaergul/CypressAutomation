/// <reference types="cypress" />

describe('find or get elements by using different locators', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('multiple_buttons');
  });

  it('check different button actions', () => {
    // select a button with text
    cy.contains('Button 2').should('be.visible').click();

    cy.contains('Clicked on button two!').should('be.visible');

    // find element with class attribute and create a list then select 3 rd one
    cy.get('.btn.btn-primary').then(($buttons) => {
      cy.wrap($buttons).eq(2).click();
      // assert the textx
      cy.contains('Clicked on button three!').should('be.visible');
    });

    cy.get('button').each((item, index, list) => {
      // assert the length of the list which means verifying number of buttons

      expect(list).to.have.length(6);
      expect(item).to.have.attr('onclick');
    });

    // i will get all buttons like previous approach ,get only the item then check for each text of the item if
    // if it is equal to 'Button 4', then click on it

    cy.get('button').each((item) => {
      if (item.text() == 'Button 4') {
        cy.log(item.text());
        // item.click()    you can not use cypress click with jQuery element 'item'
        cy.wrap(item).click();
        cy.contains('Clicked on button four!').should('be.visible');
      }
    });
  });

  // npx cypress --headless -b chrome
});
