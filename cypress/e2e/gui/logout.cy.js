describe('empty spec', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })

    it('logout', () => {
        cy.logout()
        cy.contains('Sign in').should('be.visible')
    });
})


