import { faker } from '@faker-js/faker';

describe('Cadastrar demanda com sucesso', () => {

    beforeEach('logando no sistema',() => {
        cy.login(Cypress.env('nome'),Cypress.env('senha'));
        cy.get('#menu > a').click();
    })

    it('cadastro demanda completa', () => {
        
        cy.get('#codigo').type(faker.datatype.number(9999999999));
        cy.get('#nome').type(`testAuto${faker.datatype.number(999999)}`);       
        cy.get(':nth-child(3) > :nth-child(2) > [value="1"]').click();
        cy.get('#cenarios').type(faker.datatype.number(99));
        cy.get('td > .btn-success').click();
        cy.contains('Cadastro realizado com sucesso!').should('be.visible');
    })    

    it('cadastro demanda parcial', () => {
        
        cy.get('#codigo').type(faker.datatype.number(9999999999));
        cy.get('#nome').type(`testAuto${faker.datatype.number(999999)}`);       
        cy.get('[value="2"]').click();        
        cy.get('td > .btn-success').click();
        cy.contains('Cadastro realizado com sucesso!').should('be.visible');
    })    



})