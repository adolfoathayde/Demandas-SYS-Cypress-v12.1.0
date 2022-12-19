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

Cypress.Commands.add('login', (name, pw) => {

    cy.visit('/');
    cy.get('#login').type(name);
    cy.get('#senha').type(pw, { log: false });
    cy.get('.btn-success').click();
    cy.url().should('be.equal', 'http://demandas-frwk.online/painel.php');
})

Cypress.Commands.add('confirmarRecarregar', () => {

    cy.get('#enviar_status').click(); 
    cy.get('#refresh').click();
})


Cypress.Commands.add('responsavelEStatus', (responsavel,status) => { 

    cy.get(':nth-child(1) > :nth-child(7) > #detalhar').click();
    cy.get('#responsavel').select(responsavel);
    cy.get('#status').select(status);
})

Cypress.Commands.add('status', (status) => { 

    cy.get(':nth-child(1) > :nth-child(7) > #detalhar').click();
    cy.get('#status').select(status);
})