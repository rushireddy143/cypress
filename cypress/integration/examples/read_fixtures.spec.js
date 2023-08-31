
describe('diathrive login',() => {
 //ditect access
 /*it ('Read files using fixtures', () => {
        
        cy.visit('https://web-staging.diathrive.com/')

    cy.fixture('example.json').then((data) => {
        cy.get('[data-testid=SignIn-SignInInputForm-EmailInput]').type(data.username);
        cy.get('[data-testid=SignIn-SignInInputForm-PasswordInput]').type(data.password);
        cy.get('[data-testid=Button-Text-Title]').should('have.text',data.login).click();
        cy.get('[data-testid=BottomExpandableDrawer-Button-1]').click();
        cy.get('[data-testid=EligibilityStatusModal-Button-Close]').should('have.text',data.next).click();
        cy.get('[data-testid=SidePannel-Text-SignOut]').should('have.text',data.logout).click();
        cy.get('[data-testid=SidePannel-Button-SignOut]').click();
         
        
    })
})*/

// Access through hook -for multiple it blocks
let userdata;
before( () => {
    cy.fixture('example.json').then((data) => {
        userdata=data;
    }) 
})

it ('Read files using fixtures', () => {
        
    cy.visit('https://web-staging.diathrive.com/')


    cy.get('[data-testid=SignIn-SignInInputForm-EmailInput]').type(userdata.username);
    cy.get('[data-testid=SignIn-SignInInputForm-PasswordInput]').type(userdata.password);
    cy.get('[data-testid=Button-Text-Title]').should('have.text',userdata.login).click();
    cy.get('[data-testid=BottomExpandableDrawer-Button-1]').click();
    cy.get('[data-testid=EligibilityStatusModal-Button-Close]').should('have.text',userdata.next).click();
    cy.get('[data-testid=SidePannel-Text-SignOut]').should('have.text',userdata.logout).click();
    cy.get('[data-testid=SidePannel-Button-SignOut]').click();
     
    
})
})