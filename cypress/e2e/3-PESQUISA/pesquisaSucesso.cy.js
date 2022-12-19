describe('Pesquisar demanda', () => {

    beforeEach('logando no sistema',() => {
        cy.login(Cypress.env('nome'),Cypress.env('senha'));
    })

    it('pesquisar por codigo', () => {
        
        cy.get('.search-query').type('11111');
        cy.get('[type="submit"]').click();
        cy.contains('11111').should('be.visible');

    })    

    it('pesquisar por responsavel', () => {
        
        cy.get('select').select('Marcos Aurelio');
        cy.get('[type="submit"]').click();
        cy.contains('Marcos Aurelio').should('be.visible');

    })    

    it('pesquisar por nome', () => {

        cy.get('.search-query').type('teste raul');
        cy.get('[type="submit"]').click();
        cy.contains('00000-00002').should('be.visible');

    })    

})