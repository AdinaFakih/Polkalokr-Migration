
describe('TEST CROSS CHAIN BRIDGE',function()
{
    before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('Cross Chain Bridge',function(){
        cy.visit_Polkalokr()
        cy.Connect_Wallet_MetaMask()
        cy.visit_Manage_Bridge('erc2')

    })
})