require('cypress-plugin-tab')
describe('Napier HIS hospital', () => {

    it('Login to Napier HIS app script', () => {

        cy.visit("https://hisblankdb.napierhealthcare.com/napier-his-web/index.html");
        cy.get("#username").type("suman")
        cy.get("#password").type("User@3").tab()
        cy.get("#login_submit_frm").click()
        
    })
})