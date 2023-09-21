describe('table handling', () => {
     
    beforeEach('performance before each it block', () => {
        cy.visit("https://datatables.net/examples")
        cy.get('.active>ul>:nth-child(1)>a').click()
        cy.get('.toc>:nth-child(5)>a').click()
        
    })

    it('check number of rows and colomns', () => {

        cy.get("#DataTables_Table_0>tbody>tr").should('have.length','9');
        cy.get("#DataTables_Table_0>thead>tr>th").should('have.length','5');
    })
    
    it('check data in a specific row and colomn', () => {
        
        cy.get("#DataTables_Table_0>tbody>tr:nth-child(8)>td:nth-child(5)")
        .contains('$103,600');
    })

    it('get entire data from a table', () => {
        
        cy.get("#DataTables_Table_0>tbody>tr")
        .each( ($row, index, $rows) => {
            cy.wrap($row).within( ()=>{
                cy.get("td").each( ($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })
})