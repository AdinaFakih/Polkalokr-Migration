describe('CROSS CHAIN BRIDGE',function()
{
    // it('already approved',function(){
    //     var URL = "http://35.178.147.68/bridge/erc1"
    //     cy.visit(URL)
    //     //wait till "from" field is fill automatically
    //     cy.wait(2000)
    //     // or click on "Use Source Address"
    //     cy.get('.jss58').click()
    //     //Amount
    //     var Amount = "10"
    //     cy.get('.jss60 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(Amount)
    //     //confrim send
    //     //cy.get('.MuiButtonBase-root MuiButton-root MuiButton-text jss139 Mui-disabled Mui-disabled').click()
    //     //confirm send
    //     cy.get('.MuiButton-label > span').click()
    //     //i aggree
    //     //cy.get('[style="margin-top: 19px; display: flex; align-items: center; padding: 0px;"] > div').click()
    //     cy.get('.jss139').click()
    //     //Continue
    //     //cy.get('.MuiButton-label').click()
    //     cy.contains('Continue').click()
    //     //confirm send
    //     cy.get('.MuiButton-label > span').click()
    //     cy.wait(2000)
    //     //send
    //     cy.get('.MuiContainer-root > .MuiButton-root > .MuiButton-label').click()
    //CONFIRM FROM METAMASK MANUALLY
    // })
    it('NOT already approved',function(){
        var URL= "http://35.178.147.68/bridge/erc2"
        cy.visit(URL)
        //wait till from field is fill automatically
        cy.wait(2000)
        // or click on "Use Source Address"
        cy.get('.jss58').click()
        //Amount
        var Amount = "10"
        cy.get('.jss60 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(Amount)
        //Approve Send
        cy.get('.MuiButton-label > div').click()
        //CONFIRM FROM METAMASK MANUALLY
        //confrim send
        //cy.get('.MuiButtonBase-root MuiButton-root MuiButton-text jss139 Mui-disabled Mui-disabled').click()
        cy.wait(2000)
        //confirm send
        cy.get('.MuiButton-label > span').click()
        //i aggree
        //cy.get('[style="margin-top: 19px; display: flex; align-items: center; padding: 0px;"] > div').click()
        cy.get('.jss139').click()
        //Continue
        //cy.get('.MuiButton-label').click()
        cy.contains('Continue').click()
        //confirm send
        cy.get('.MuiButton-label > span').click()
        cy.wait(2000)
        //send
        cy.get('.MuiContainer-root > .MuiButton-root > .MuiButton-label').click()
    })
})