describe('Login com sucesso', () => {

  it('logando no sistema', () => {
    cy.login(Cypress.env('nome'),Cypress.env('senha'));
  })

})