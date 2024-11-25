// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setNumberInputValue', (selector, value) => { 
    
    cy.get(selector).clear().type(value.toString()).should('have.value', value.toString()) 

})
Cypress.Commands.add('setSliderValue', (sliderSelector, value) => { 
    
    cy.get(sliderSelector) .invoke('val', value) .trigger('input', { force: true }) .trigger('change', { force: true }) .should('have.value', value.toString())
})
Cypress.Commands.add('verifySliderValue', (sliderSelector, value) => { 
    
    cy.get(sliderSelector).should('have.value', value.toString()) 

})
Cypress.Commands.add('setAndVerifySlider', (numberInputSelector, sliderSelector, value) => { 
    
    cy.setNumberInputValue(numberInputSelector, value) 
    cy.setSliderValue(sliderSelector, value) 
    cy.verifySliderValue(sliderSelector,value)

})