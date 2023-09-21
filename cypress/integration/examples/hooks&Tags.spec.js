describe('hooks&tags', () => {

    before(()=>{
        cy.log("*** launch app  ***");
    })

    after(()=>{
        cy.log("*** close app *** ");
    })

    beforeEach(()=>{
        cy.log("*** login ***");
    })

    afterEach(()=>{
        cy.log("*** logout ***");
    })


    it('search', () => {
        cy.log('***  search  ***');
    })

    it('advanced search',  () => {
        cy.log('***  advanced search  ***');
    })

    it('listing products', ()  => {
        cy.log('***   listing products ***');
    })
})