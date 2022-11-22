export class GoogleSearch{
    googleSearch(){
    return cy.get('input[name="q"]').first();
    }
    googleSearchBtn(){
     return cy.get('input[name="btnK"]').first();
     }
     searchResults(){
         return cy.get('h3').contains('Skyscanner: Comparez des vols pas chers, réservez vos ...');
     }
    Siteclick()
     {
        return cy.get(('[href="https://www.skyscanner.fr/"] > .LC20lb'));
     } 
     searchResultsVols(){
        return cy.get('[data-cy="airli-feature"]').first();
    }
    DateSelector(){
        //aria-label="jeudi 1 décembre 2022"
        return cy.get('[aria-label="jeudi 1 décembre 2022"]');
    }
    searchResultsHotels(){
        return cy.get('[data-cy="skhot-feature"]').first();
    }
    searchResultsCars(){
        return cy.get('[data-cy="carhi-feature"]').first();
    }
    AllersimpleClick()
     {
        return cy.get(('#fsc-trip-type-selector-one-way'));
     }
     AllerClick()
     {
        return cy.get("#fsc-origin-search");
     }
     RetourClick()
     {
        return cy.get("#fsc-destination-search");
     }
     Autocomplete()
     {
        return cy.get("#aria-autocomplete");

     }
  }
  