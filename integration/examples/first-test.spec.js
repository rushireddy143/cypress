describe('My First Test', () => {
  it('Visits the Cypress website', () => {
    // Visit the Cypress website
    cy.visit('https://www.cypress.io/');

    // Verify the page contains the expected text
    cy.contains('Better testing').should('be.visible');
  });
});
