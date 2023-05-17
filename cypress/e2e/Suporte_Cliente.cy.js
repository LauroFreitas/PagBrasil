describe('Soporte ao Cliente', () => {
  beforeEach(() => {
    cy.visit('') 
  })

  it('Um usuário envia uma solicitação de suporte valida', () => {
    cy.get('#Name').type('Lauro')
    cy.get('#Email').type('lauroh.sfreitas@gmail.com')
    cy.get('#Company').type('LDTA Freitas')
    cy.get('#Website').type('http://www.freitas-ldta.com')
    cy.get('#Phone').type('55 5199155-3817')
    cy.get('#Inquiry').type('Auxílio no checkout para o meu e-commerce.')
    cy.get('form').submit()
    cy.get('.success-message').should('be.visible')
  })

  it('Um usuário envia uma solicitação de suporte invalida dado invalido ', () => {
    cy.get('#Name').type('Lauro')
    cy.get('#Email').type('AAA')
    cy.get('#Company').type('LDTA Freitas')
    cy.get('#Website').type('http://www.freitas-ldta.com')
    cy.get('#Phone').type('55 5199155-3817')
    cy.get('#Inquiry').type('Auxílio no checkout para o meu e-commerce.')
    cy.get('form').submit()
    cy.get('#Error').should('contain', 'Campo Email inválido.')
  
  })
})