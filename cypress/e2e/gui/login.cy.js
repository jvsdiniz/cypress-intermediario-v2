describe('empty spec', () => {
  it('login', () => {
    cy.login()
    cy.contains('Welcome to GitLab').should('be.visible')
  })
})