/// <reference types= "cypress" />
describe("Kura Login Test suite", function () {  
    it(`visit url`, function () {

    //visit kura demo page
    cy.visit("https://katalon-demo-cura.herokuapp.com");

    //spy into make appointment field
    cy.get('#btn-make-appointment').click()
    //spy into the user name field
    cy.get("#txt-username").type("John Doe")
    //spy into the password field
    cy.get("#txt-password").type("ThisIsNotAPassword")
    //spy into the login botton 
    cy.get("#btn-login").click()
    //spy into the facility field
    cy.get("#combo_facility").select("Seoul CURA Healthcare Center")
    //spy into the checkbox
    cy.get(".checkbox-inline").click()
    //spy into healthcare program field
    cy.get(":nth-child(3) > .col-sm-offset-3")
    cy.get(":nth-child(3) > .col-sm-4 > :nth-child(1)").click()
    //spy into visit day field
    .get(":nth-child(3) > .col-sm-4 > :nth-child(1)")
    .get("#txt_visit_date").type("05/05/2022")
    //spy into the comment field
    .get(":nth-child(5) > .col-sm-offset-3")
    .get("#txt_comment")
    .get("#btn-book-appointment").click()
    



  });
});