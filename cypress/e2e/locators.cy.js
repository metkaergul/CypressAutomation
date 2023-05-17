/// <reference types="cypress" />

describe('find or get elements by using different locators', () => {
  beforeEach(() => {
    cy.clearCookies;
    cy.visit('login');
  });

  it('check different locator strategies', () => {
    cy.get("input[name='username']").type('hayyy yammy kolrid');

    // attribute name and value
    cy.get("[type='text']").clear();

    // tagName
    cy.get('input').each((item, index, list) => {
      // assert the length  of the list is 2
      expect(list).to.have.length(2);
      expect(item).to.have.attr('type');
    });

    // by attribute name
    cy.get('[type]');

    // by class attribute's value
    cy.get('.btn.btn-primary');

    // by id
    cy.get('#wooden_spoon');

    // if we want to use text of the web element how we do this with cypress
    cy.get('button').should('contain', 'Login').click();
  });

  it('Check finding elements by traveling through DOM', () => {
    // Find the login button

    cy.get('input[name = "username"]')
      .parents('form')
      .find('button')
      .should('contain', 'Login')
      .click();
  });

  it.only('Check different type of assertions', () => {
    // cypress itself use some assertions provided by Chai ,JQuery libraries
    // Should assertions
    cy.get('#wooden_spoon').should('contain', 'Login');

    // expect assertions
    cy.get('#wooden_spoon').then((buttonElement) => {
      expect(buttonElement).to.have.text('Login');
    });
  });
});
