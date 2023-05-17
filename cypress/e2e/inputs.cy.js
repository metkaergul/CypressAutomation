/// <reference types='cypress'/>


describe('Input Forms tests', () => {
  beforeEach('navigate to registration page', () => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/registration_form');
  });

  it.skip('Check different input box fields and verify', () => {
    cy.get('input[name="firstname"]').type('Mike');
    cy.get('input[name="lastname"]').type('brown');
    cy.get('input[name="username"]').type('Mbrown');

    /**
     * Math.random(): creates a number between 0 - 1
     * Math.floor(): makes it a whole number
     */

    const email = `formtest${Math.floor(10000 + Math.random() * 90000)}@cydeo.com`;
    cy.get('input[name="email"]').type(email);

    const password = `test${Math.floor(10000 + Math.random() * 90000)}`;
    cy.get('input[name="password"]').type(password);
    const phoneNumber = `555-000-${Math.floor(1000 + Math.random() * 9000)}`;
    cy.get('input[name="birthday"]').type('01/01/1999');
  });

  it.skip('Check different radio button actions', () => {
    cy.get('.radio')
      .find('[type=radio]')
      .then((radio) => {
        // get all radio buttons ,select the first one and verify that is checked
        cy.wrap(radio).first().check().should('be.checked');
        // get all radio buttons ,select the first one and verify that is checked  and confirmation label is visible

        cy.wrap(radio).eq(1).check().should('be.checked');
        cy.get('[data-bv-icon-for="gender"]').should('be.visible');

        //third radio button is not checked
        cy.wrap(radio).last().should('not.be.checked')
      });
  });


    it('Check different checkbox actions',()=>{

            //get all checkboxes we will select java and verify it is selected

            cy.get('[type="checkbox"]').then((checkboxes)=>{

        cy.wrap(checkboxes).eq(1).check().should('be.checked')
        //uncheck java
        cy.wrap(checkboxes).eq(1).uncheck().should('not.be.checked')

            })


    })



});
