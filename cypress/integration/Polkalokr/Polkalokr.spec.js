
describe('TEST BRIDGE',function()
{
    before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('Running Automation Scripts',function(){

        cy.visit_Polkalokr()
        cy.Connect_Wallet_MetaMask()
        // enter bridge name you want to navigate to 
        cy.Manage_Bridge('test1')
        /* if you want to send to another address, enter account address,
           else enter '0' to click on Source Address */
        /* Enter the amount you want to transfer
           else enter '0' to click on "Max" button */
        //                   (wallet address, amount, approve)
        cy.Cross_Chain_Bridge(0, 10, true)

    })
})