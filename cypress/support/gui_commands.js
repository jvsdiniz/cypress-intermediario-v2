Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
) => {
    const login = () => {
        cy.visit('/')

        cy.get('#user_login').type(user)
        cy.get('#user_password').type(password, { log: false })
        cy.get('[data-qa-selector="sign_in_button"]').click();
    }
    login()
})

Cypress.Commands.add('logout', () => {
    cy.get('[data-qa-selector="user_menu"]').click()
    cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new')

    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
})