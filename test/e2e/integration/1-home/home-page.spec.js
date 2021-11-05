/// <reference types="Cypress" />

describe('Home Page', () => {
  it('should display the app name on the home page', () => {
    cy.visit('/'); // go to the home page

    // get the rocket element and verify that the app name is in it
    cy.get('nb-layout-header h1')
      .should('contain.text', 'Patiënten administratie');
  });

  it.only('should show user details after clicking on a row', () => {
    cy.visit('/'); // go to the home page

    cy.get('nb-list nb-list-item').last().click();
    cy.get('nb-card-header h4')
      .should('contain.text', 'Albert-Jan Dekker');
    cy.get('nb-card-header img')
      .should('contain.class', 'profile-picture');

  });
});
