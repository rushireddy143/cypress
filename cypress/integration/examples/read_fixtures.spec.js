
describe('diathrive login',() => {
before(() => {
    cy.visit('https://web-staging.diathrive.com/')
    
})
beforeEach(() => {
    // root-level hook
    // runs before every test block
  }) 
it ('Read files using fixtures', () => {

    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)

    })
})
})
