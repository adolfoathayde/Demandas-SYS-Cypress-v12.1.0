describe('Verificando botoes em detalhar', () => {

    beforeEach('logando no sistema',() => {
        cy.login(Cypress.env('nome'),Cypress.env('senha'));
    })

    it.only('botão refresh', () => {
        
        cy.get(':nth-child(1) > :nth-child(7) > #detalhar').click();
        cy.get('#refresh').click();
        cy.contains('Dados da Demanda').should('be.visible');
        cy.contains('Status da Demanda').should('be.visible');
        cy.contains('Gestão de Tempo').should('be.visible');
        cy.contains('Histórico da Demanda').should('be.visible');
        cy.get(':nth-child(12) > tbody > :nth-child(4) > :nth-child(2)').contains('00:00:00').should('be.visible');
     
    })    

    it('botão voltar', () => {
        
        cy.get(':nth-child(1) > :nth-child(7) > #detalhar').click();
        cy.get('#cancelar').click();
        cy.wait(500);
        cy.contains('Painel de Demandas').should('be.visible');

    })    

})