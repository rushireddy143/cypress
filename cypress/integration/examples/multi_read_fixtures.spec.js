describe('diathrive miltiple logins', () => {

    it('Read files using fixtures', () => {

        cy.fixture("example1.json").then((data)=>{

            cy.visit('https://web-staging.diathrive.com/')

            data.forEach((userdata)=>{
                cy.get('[data-testid=SignIn-SignInInputForm-EmailInput]').type(userdata.username);
                cy.get('[data-testid=SignIn-SignInInputForm-PasswordInput]').type(userdata.password);
                cy.get('[data-testid=Button-Text-Title]').should('have.text',userdata.login).click();
                
                if(userdata.username=='prashanth123@gmail.com' && userdata.password=='Prashanth@123')
                {
                    cy.get('[data-testid=BottomExpandableDrawer-Button-1]').click();
                    cy.get('[data-testid=EligibilityStatusModal-Button-Close]').should('have.text',userdata.next).click();
                    cy.get('[data-testid=SidePannel-Text-SignOut]').should('have.text',userdata.logout).click();
                    cy.get('[data-testid=SidePannel-Button-SignOut]').click();
                      
                }
                else{
                    
                    cy.get('[data-testid=SignIn-Text-Error]').should('have.text',userdata.expected);
                    
                }
            })
        })
    })
})