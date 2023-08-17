describe('My First Test', () => {
  it('Visits the Cypress website', () => {
    // Visit the Cypress website
    cy.visit('https://www.google.com/');

    // Verify the page contains the expected text
      cy.contains('Gmail').should('be.visible');
  });
});
