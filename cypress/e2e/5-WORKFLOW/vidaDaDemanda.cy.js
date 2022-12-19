import { faker } from '@faker-js/faker';

describe('Workflow de uma demanada', () => {

  //let nomeAleatorio = `testAuto${faker.datatype.number(999999)}`; 
  let nomeAleatorio = 'testAuto130626'; 

  beforeEach('logando no sistema', () => {
    cy.login(Cypress.env('nome'),Cypress.env('senha'));      
    cy.get('.search-query').type(nomeAleatorio);
    cy.get('[type="submit"]').click();
  })

  it('cadastro da demanda', () => {
    
    cy.get('#menu > a').click();       
    cy.get('#codigo').type(faker.datatype.number(9999999999));
    cy.get('#nome').type(nomeAleatorio);
    cy.get(':nth-child(3) > :nth-child(2) > [value="1"]').click();
    cy.get('#cenarios').type(faker.datatype.number(99));
    cy.get('td > .btn-success').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');    
  })

  it('estado - Em Validação', () => {   

    cy.responsavelEStatus('Adolfo Athayde','Em Validação');
    cy.confirmarRecarregar();    
  }) 

  it('estado - Validação Paralisada e Pausa do cronometro', () => {   

    cy.get(':nth-child(1) > :nth-child(7) > #detalhar').click();
    cy.wait(3000);
    cy.get(':nth-child(12) > tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(($value_1) => {

      cy.get('#status').select('Validação Paralisada');  
      cy.get('#refresh').click();  
      cy.wait(3000);
      cy.get('#status').select('Em Validação');  
      cy.get('#refresh').click();  

      cy.get(':nth-child(12) > tbody > :nth-child(1) > :nth-child(2)').invoke('text').then(($value_2) => {
        cy.log($value_1);
        cy.log($value_2);
        expect($value_1).to.not.eq($value_2)
      })      
    })   
  }) 

  it('estado - Aguardando Construção', () => {

    cy.status('Aguardando Construção');
    cy.confirmarRecarregar();  
  }) 

  it('estado - Em Construção', () => {

    cy.responsavelEStatus('Adolfo Athayde','Em Construção');
    cy.get('#base').select('Homologação - 1');
    cy.confirmarRecarregar();  
  }) 

  it.only('estado - Aguardando Teste', () => {

    cy.status('Aguardando Teste');
    cy.confirmarRecarregar();  
  }) 

  it.only('estado - Execução de Testes', () => {

    cy.responsavelEStatus('Adolfo Athayde','Execução de Testes');
    cy.confirmarRecarregar();  
  }) 

  it.only('estado - Aguardando usuário', () => {

    cy.status('Aguardando usuário');
    cy.confirmarRecarregar();  
  }) 

  it.only('estado - Reteste', () => {

    cy.responsavelEStatus('Adolfo Athayde','Reteste');
    cy.confirmarRecarregar();  
  }) 

  it.only('estado - Aguardando usuário', () => {

    cy.status('Aguardando usuário');
    cy.confirmarRecarregar();   
  }) 

  it('estado - Em implantação', () => {

    cy.responsavelEStatus('Adolfo Athayde','Em implantação');
    cy.confirmarRecarregar();  
  }) 

  it('estado - Aguardando Validação em Produção', () => {

    cy.status('Aguardando Validação em Produção');
    cy.confirmarRecarregar();         
  }) 

  it('estado - Validação Em Produção', () => {

    cy.responsavelEStatus('Adolfo Athayde','Validação Em Produção');
    cy.confirmarRecarregar();  
  }) 

  it('estado - Finalizada em produção', () => {

    cy.status('Finalizada em produção');
    cy.confirmarRecarregar();  
  })   

  it('checar cronometro', () => {

    cy.get('[style="margin-left:10px; margin-right:10px"] > [value="1"]').click();
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(1) > :nth-child(7) > #detalhar').click();
    cy.wait(3000);
    cy.contains('00:00:00').should('not.exist');  
    })
})     