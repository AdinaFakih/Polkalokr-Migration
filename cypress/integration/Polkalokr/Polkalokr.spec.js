
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
        cy.Manage_Bridge('erc2')
        cy.Cross_Chain_Bridge()

    })
})