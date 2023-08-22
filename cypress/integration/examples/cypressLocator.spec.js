describe('My First Test', () => {
    it('Visits the facebook website', () => {
      // open website HRMS
        cy.visit('https://www.facebook.com/');

        cy.get("#email").type("lrushikeswarreddy@gmail.com");

        cy.get('#pass').type('Rushi@@21');

        cy.wait(5000);

        cy.get('[type=submit]').click();
    });
});