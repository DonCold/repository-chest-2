describe('Note App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
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
  })
})
