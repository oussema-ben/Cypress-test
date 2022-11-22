import { GoogleSearch } from '../page-objects/google-search.page';
const search = new GoogleSearch();

describe('Google Navigation', () => {
  it('Google Search', () => {
    cy.visit('https://www.google.fr');

    search.googleSearch().type('skysccaner');
    search.googleSearchBtn().click({ force: true });
    search.searchResults().should('be.visible');
    search.Siteclick().click();
    Cypress.on('uncaught:exception', () => {
      // prevent google error
      return false
    });
  })
  it('Check Assertions', () => {

    search.searchResultsVols().should('be.visible');
    search.searchResultsHotels().should('be.visible');
    search.searchResultsCars().should('be.visible');
  })
  it('Search and click Paris Orly', () => {

    cy.get('#fsc-origin-search').type('Paris');
    cy.get('#react-autowhatever-fsc-origin-search').should('be.visible');
    cy.get('#react-autowhatever-fsc-origin-search--item-1').click();
  })
  it('Search and click Tanger', () => {

    cy.get('#fsc-destination-search').should('be.visible');
    cy.get('#fsc-destination-search').type('Tanger');
    cy.get('#react-autowhatever-fsc-destination-search--item-0').click();
  })
  it('Date 1/12/2022 choose', () => {

    cy.get('#depart-fsc-datepicker-button > .DateInput_DateInput--text__MzMyY').click();
    search.DateSelector().click();
  })
  it('Search validate', () => {

    cy.get('[aria-label="Trouver un vol"]').should('be.visible');
    cy.get('[aria-label="Trouver un vol"]').click();
  })

});