describe('Login sem sucesso', () => {

  beforeEach(() => {
      cy.visit('/');
  })

  it('campos incompletos', () => {
    cy.get('.btn-success').click();
    cy.contains('Preencha o Login!').should('be.visible'); 
    cy.contains('Preencha a Senha!').should('be.visible'); 
    cy.get('#login').type('adolfo.athayde');
    cy.get('.btn-success').click();
    cy.contains('Preencha a Senha!').should('be.visible'); 
  })

  it('senha incorreta', () => {
    cy.get('#login').type('adolfo.athayde');
    cy.get('#senha').type('batata');
    cy.get('.btn-success').click();
    cy.contains('Erro ao efetuar o login. Dados incorretos!').should('be.visible'); 
  })

  it('usuario incorreto', () => {
    cy.get('#login').type('Irineu');
    cy.get('#senha').type('batata');
    cy.get('.btn-success').click();
    cy.contains('Erro ao efetuar o login. Dados incorretos!').should('be.visible'); 
  })

})