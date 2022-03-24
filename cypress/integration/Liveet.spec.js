/// <reference types= "cypress" />
describe("Liveet Login Test suite", function () {  
    it(`visit url`, function () {

    //visit Liveet webApplicaion
    cy.visit("https://admin-stg.liveet.co");

    //Login Liveet webApplication
   cy.get(":nth-child(3) > .form-control").type("quales01")
   cy.get(":nth-child(5) > .form-control").type("quales")
   cy.get(".btn").click()

//Spy into the dashboard field
cy.get(":nth-child(2) > .nav-link > .pcoded-mtext").click()
   


});
});
