describe('Verificar o endereçamento do menu', () => {

    beforeEach('logando no sistema', () => {
        cy.login(Cypress.env('nome'),Cypress.env('senha'));

    })

    it('cadastrar', () => {

        cy.get('#menu > a').click();
        cy.url().should('be.equal', 'http://demandas-frwk.online/cadastrar.php');

    })

    it('painel', () => {

        cy.get('.icon-th-list').click();
        cy.url().should('be.equal', 'http://demandas-frwk.online/painel.php');

    })

    it('relate um bug', () => {

        cy.get('.nav > :nth-child(3) > a').click();
        cy.url().should('be.equal', 'http://demandas-frwk.online/registra_bug.php');

    })

    it('relatorios', () => {

        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(1) > a').click();
        cy.url().should('be.equal', 'http://demandas-frwk.online/relatorios.php?tipo=demandas');

        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();
        cy.url().should('be.equal', 'http://demandas-frwk.online/relatorios.php?tipo=SLA');

        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(3) > a').click();
        cy.url().should('be.equal', 'http://demandas-frwk.online/relatorios.php?tipo=Projeto');

        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(4) > a').click();
        cy.url().should('be.equal', 'http://demandas-frwk.online/relatorios.php?tipo=execucao');  

    })

})