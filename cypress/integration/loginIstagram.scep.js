/// <reference types= "cypress" />
describe("Instagram Login Test suite", function () {
    it(`Instagram login`, function () {
        //visit instagram login page
      cy.visit("https://www.Instagram.com/");
      //spy into the username input field
      cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ")
      //type your instagram username 
      .type("drippingnaya");
      //spy into the password input field
      cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ")
      //type your password
     .type("Naya@001");
      //spy into the login field
      cy.get(".kEKum > :nth-child(3)").click();
    

      
    
    });
});
  