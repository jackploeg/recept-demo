/// <reference types="Cypress" />

describe('Home Page', () => {
  it('should display header and footer', () => {
    cy.visit('/'); // go to the home page

    cy.get('nb-layout-header h1')
      .should('contain.text', 'Patiënten administratie');
    cy.get('nb-layout-footer div.version').should(($div) => {
      const text = $div.text();
      expect(text).to.match(/Versie \d+\.\d+\.\d+/);
    });
    const year = new Date().getFullYear();
    cy.get('nb-layout-footer h6')
      .should('contain.text', year);
  });

  it('should show user details after clicking on a row', () => {
    cy.visit('/'); // go to the home page

    cy.get('nb-list nb-list-item').last().click();
    cy.get('nb-card-header h4')
      .should('contain.text', 'Albert-Jan Dekker');
    cy.get('nb-card-header img')
      .should('contain.class', 'profile-picture');

  });
});
