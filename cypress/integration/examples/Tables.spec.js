describe('table handling', () => {
     
    
    beforeEach('performance before each it block', () => {
        cy.visit("https://datatables.net/examples")
        cy.get('.active>ul>:nth-child(1)>a').click()
        //cy.get('.toc>:nth-child(5)>a').click()
        //cy.get('.toc > :nth-child(11) > a').click()
        
    })

    it('check number of rows and colomns', () => {
        cy.get('.toc>:nth-child(5)>a').click()
        cy.get("#DataTables_Table_0>tbody>tr").should('have.length','9');
        cy.get("#DataTables_Table_0>thead>tr>th").should('have.length','5');
        //cy.screenshot()
        
    })
    
    it('check data in a specific row and colomn', () => {
        cy.get('.toc>:nth-child(5)>a').click()
        cy.get("#DataTables_Table_0>tbody>tr:nth-child(8)>td:nth-child(5)")
        .contains('$103,600');
    })

    it('get entire data from a table', () => {
        cy.get('.toc>:nth-child(5)>a').click()
        cy.get("#DataTables_Table_0>tbody>tr")
        .each( ($row, index, $rows) => {
            cy.wrap($row).within( ()=>{
                cy.get("td").each( ($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })
    
    it('get a colomn data in table', () => {
        cy.get('.toc>:nth-child(5)>a').click()
        cy.get("#DataTables_Table_0>tbody>tr")
        .each( ($row,index,$rows)=>{
        cy.wrap($row).within( ()=>{
            cy.get("td:nth-child(2)").each(($col,index,$cols)=>{
            cy.log($col.text());
                })
            })
        }) 
    })

    it('get a row data in a table', ()=>{
        cy.get('.toc>:nth-child(5)>a').click()
        cy.get("#DataTables_Table_0>tbody>tr:nth-child(5)")
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })

    it('Pagination',()=>{
        cy.get('.toc > :nth-child(11) > a').click()
            let totalpages;
            //find total number of pages
            cy.get('.dataTables_info').then( (e)=>{
             let mytext=e.text();  //Showing 1 to 10 of 57 entries
             totalpages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("pages")-1);
             cy.log("Total number of pages in a table===>"+totalpages);  
            })


            
        })

})