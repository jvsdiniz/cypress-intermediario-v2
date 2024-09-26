describe('empty spec', () => {
  it('passes', () => {
    cy.login()
    cy.contains('Welcome to GitLab').should('be.visible')
  })
})