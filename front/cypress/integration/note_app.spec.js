describe('Note App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const user = {
      name: 'Test',
      email: 'test@test.com',
      password: '123456'
    }
    cy.request('POST', 'http://localhost:3001/api/users', user)
  })

  it('frontpage can be opened', () => {
    cy.contains('Notas')
  })

  it('Login form can be opened', () => {
    cy.contains('Login').click()
    /* cy.get('input:first').type('admin')
    cy.get('input:last').type('admin password') */
    cy.get('[placeholder="Email"]').type('admin')
    cy.get('[placeholder="Contraseña"]').type('admin password')
  })

  it('user can login', () => {
    cy.contains('Login').click()
    cy.get('input').first().type('test@test.com')
    cy.get('input').last().type('123456')
    cy.get('#form-login-button').click()
    cy.contains('Nueva Nota')
  })

  describe('when logged in', () => {
    beforeEach(() => {
      cy.contains('Login').click()
      cy.get('input').first().type('test@test.com')
      cy.get('input').last().type('123456')
      cy.get('#form-login-button').click()
    })

    it('a new note can be created', () => {
      cy.contains('Nueva Nota').click()
      cy.get('[placeholder="Titulo"]').type('Test note')
      cy.get('[placeholder="Descripcion"]').type('Test note content')
      cy.contains('Crear Nota').click()

      cy.contains('Test note')
      cy.contains('Test note content')
    })
  })
})
