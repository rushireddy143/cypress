describe('My First Test', () => {
    it('Visits the Cypress website', () => {
        cy.visit('https://www.orangehrm.com/');

        // Verify the page contains the expected text
        cy.get('.btn btn - ohrm btn - contact - sales').click();
        cy.get('#Form_getForm_FullName').type('lrushikeswarreddy@gmail.com');
    });
});