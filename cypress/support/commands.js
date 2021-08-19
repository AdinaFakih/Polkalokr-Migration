/// <reference types="cypress"/>

Cypress.Commands.add('visit_Polkalokr', () => {
    //Website Address
    cy.visit("http://35.178.147.68/")
    //Verify URL of website
    cy.url().should('include', '35.178.147.68')
    //Verify Title of website 
    cy.title().should('be.equal', 'Polkalokr Migration')
})

Cypress.Commands.add('Connect_Wallet_MetaMask', () => {
    //Click on Connect Wallet button
    cy.get('.jss33').contains('Connect Wallet').click()
    //Select MetaMask in modal
    cy.get('.jss39').contains('Metamask').click()
    //Enter user MetaMask password manually
    cy.wait(1000)
})

// Cypress.Commands.add('verify_address', () => { 
//     //Verify that when users changes account "From" textbox automatically updates to that account.
//     var address = cy.get("jss32")
//     cy.wait(2000)
//     cy.log(address)
// })

Cypress.Commands.add('Manage_Bridge', (Bridge_Name) => {
    cy.get('.MuiTab-wrapper').contains('Manage Bridges').should('be.visible').trigger('mouseover')
    cy.get('[href="/manageBridge/' + Bridge_Name + '"]').click()
    cy.url().should('include', 'manageBridge/'+ Bridge_Name)
    // cy.get('[href="/manageBridge/'+Bridge_Name+'"]').its('length').then((len) => {
    //     if (len !== 1) {
    //     //you can throw your own errors
    //     throw new Error('Did not find any element')
    //     }
    // })
})

Cypress.Commands.add('Cross_Chain_Bridge', (acc_address, amount) => {
    cy.wait(2000)
    // Click on logo to navigate to cross chain bridge
    cy.get('.jss10 > a').should('be.visible').click()
    cy.url().should('include', 'bridge')
    cy.contains('Cross-Chain Bridge').should('be.visible')
    cy.wait(1000)
    if (acc_address.length > 1)
    {
        //type
        cy.log(acc_address)
    }
    else{
        // click on "Use Source Address"
        cy.get('.jss149').click()
    }
    if(amount > 0){
        // Emter Amount you want to transfer
        cy.wait(1000)
        cy.get('.jss151 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(amount)
        cy.wait(1000)
    }
    else{
        // Click on "MAX" button
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(1000)
    }
    //Click on "confirm send" button
    cy.get('.MuiButton-label > span').click()
    //Checkbox "I agree"
    cy.wait(2000)
    cy.get('.jss253').should('not.be.checked')
    cy.get('.jss253').check().should('be.checked')
    // Continue
    cy.contains('Continue').click()
    //confirm send again
    cy.get('.MuiButton-label > span').click()
    //Click on "Send"
    cy.get('.MuiContainer-root > .MuiButton-root > .MuiButton-label').click()
    //CONFIRM FROM METAMASK MANUALLY
})


    // let bridge_links = '//*[@id="simple-menu"]/div[3]/ul/a'
    // cy.xpath(bridge_links).its('length').then((len)=> {
    //     cy.log('lENGTH IS ', len)
    //     while (len !== 0){
    //         cy.xpath(bridge_links).eq(len - 1).invoke('text').then((textt)=> {
    //         cy.log(textt)
    //         })
    //     len--
    //     }
    // })

//     let bridge_links = '//*[@id="simple-menu"]/div[3]/ul/a'
//     cy.xpath(bridge_links).its('length').then((len)=> {
//         cy.log('lENGTH IS ', len)
//         while (len !== 0){
//             cy.xpath(bridge_links).eq(len - 1).invoke('text').then((textt)=> {
//             cy.log(textt)
//             if(textt === Bridge_Name){ 
//                 cy.xpath(bridge_links +len ).click() 
//                 break;
//             }
//             })
//         len--
//         }