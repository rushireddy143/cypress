import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given("I navigate to the Website", ()=> {
    cy.visit("http://automationpractice.com/");
});
When("I enter user name and password", () => {
    cy.contains("Sign in").click();
    cy.get("#email").clear();
    cy.get("#email").type("qatube@yopmail.com");
    cy.get("#passwd").clear();
    cy.get("#passwd").type("12345");
});
When("User click on sign in button", () => {
    cy.get("#SubmitLogin").click();
});
Then("Validate the title after login", () => {
    cy.title().should("eq", "My account - My Store");
});
