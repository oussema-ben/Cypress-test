export class Utility {
    getBaseUrl() {
        let envi = Cypress.env('ENV'); 
        if (envi == 'dev') 
            return "https://www.DEV.com"; 
        else if (envi == 'beta')
            return "https://BETA.com";
        else if (envi == 'prod')
            return "http://PROD.com";
    }
}