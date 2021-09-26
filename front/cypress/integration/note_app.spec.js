const user = {
  name: 'Test',
  email: 'test@test.com',
  password: '123456'
}

const newNote = {
  title: 'Test note',
  content: 'Test content'
}

describe('Note App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

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
    cy.get('input').first().type(user.email)
    cy.get('input').last().type(user.password)
    cy.get('#form-login-button').click()
    cy.contains('Nueva Nota')
  })

  describe('when logged in', () => {
    beforeEach(() => {
      cy.login({ email: user.email, password: user.password })
    })

    it('a new note can be created', () => {
      cy.contains('Nueva Nota').click()
      cy.get('[placeholder="Titulo"]').type(newNote.title)
      cy.get('[placeholder="Descripcion"]').type(newNote.content)
      cy.contains('Crear Nota').click()

      cy.contains(newNote.title)
      cy.contains(newNote.content)
    })

    it('cancel the create note', () => {
      cy.contains('Nueva Nota').click()
      cy.get('[placeholder="Titulo"]').type(newNote.title)
      cy.get('[placeholder="Descripcion"]').type(newNote.content)
      cy.contains('Cancelar').click()

      cy.contains('Notas')
      cy.get('li').should('have.length', 0)
    })
  })
})
