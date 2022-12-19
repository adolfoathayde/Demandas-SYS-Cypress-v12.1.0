import { faker } from '@faker-js/faker';

describe(' Não conseguir cadastrar demanda', () => {

    beforeEach('logando no sistema',() => {
        cy.login(Cypress.env('nome'),Cypress.env('senha'));
        cy.get('#menu > a').click();
    })

    it('cadastro com dados repetido', () => {
        
        cy.get('#codigo').type('11111');
        cy.get('#nome').type(`testes1`);       
        cy.get(':nth-child(3) > :nth-child(2) > [value="1"]').click();
        cy.get('#cenarios').type(faker.datatype.number(99));
        cy.get('td > .btn-success').click();
        cy.contains('Código \'11111\' já foi cadastrado').should('be.visible');
        cy.contains('Nome \'testes1\' já foi cadastrado').should('be.visible');

    })    

    it('cadastro faltando dados', () => {
        
        cy.get('td > .btn-success').click();   
        
        cy.contains('Preencha o Código da Demanda!').should('be.visible');
        cy.contains('Preencha o Nome da Demanda!').should('be.visible');
        cy.contains('Preencha o Número de cenários!').should('be.visible');
    })    
   

})