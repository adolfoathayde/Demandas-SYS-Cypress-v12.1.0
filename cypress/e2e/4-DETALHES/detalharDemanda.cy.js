describe('Detalhar demanda', () => {

    beforeEach('logando no sistema',() => {
        cy.login(Cypress.env('nome'),Cypress.env('senha'));
    })

    it('acessar detalhar demanda com sucesso', () => {
        
        cy.get(':nth-child(1) > :nth-child(7) > #detalhar').click();
        cy.contains('Dados da Demanda').should('be.visible');
        cy.contains('Status da Demanda').should('be.visible');
        cy.contains('Gestão de Tempo').should('be.visible');
        cy.contains('Histórico da Demanda').should('be.visible');

    })    

})