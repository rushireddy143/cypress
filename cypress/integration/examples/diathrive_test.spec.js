describe('dithrive health test',() => {
    it ('visit the diathrive health website', () => {
         // open website HRMS
         cy.visit('https://web-staging.diathrive.com/');
         cy.get('[data-testid=SignIn-SignInInputForm-EmailInput]').type("neha.kedia@technoidentity.com")
         cy.wait(3000)
         cy.get('[data-testid=Input-Image-Right]').click()
         cy.get('[data-testid=SignIn-SignInInputForm-PasswordInput]').type('Test@12345')
         cy.get('[data-testid=Input-Image-Right]').click()
         cy.get('[data-testid=Button-Text-Title]').click()
         cy.wait(5000)
         /*cy.get('.r-1ydw1k6 > .r-1mgje8r').click()
         cy.wait(5000)
         cy.get('[data-testid=AddGlucoseLevel-Input-1]').type('198')
         cy.get('[data-testid=AddGlucoseLevel-Button-Save]').click()
         cy.wait(5000)
         cy.get(':nth-child(2) > .r-150rngu > .r-18u37iz > :nth-child(2)').click()
         cy.wait(5000)
         cy.get('.r-1kihuf0 > :nth-child(1)').click()
         cy.get('.r-1kihuf0 > :nth-child(3)').click()
         cy.get('[data-testid=Button-Text-Title]').click()
         cy.get('.r-1kihuf0.r-18u37iz > :nth-child(1)').click()
         cy.wait(5000)
         cy.get('.r-1kihuf0.r-18u37iz > :nth-child(3)').click()
         cy.get('[data-testid=Notes-TouchableOpacity-AddNewNote]').click()
         cy.get('[data-testid=AddNewNoteDrawer-TextInput-Title]')
         // https://on.cypress.io/clear
          .should('have.value', 'New Note')
          .clear()
          .should('have.value', '');
          cy.get('[data-testid=AddNewNoteDrawer-TextInput-Title]').type('my glucous levels are normal in last two weeks')
          cy.get('[data-testid=AddNewNoteDrawer-ButtonWithIcon-Date]').click()
          cy.get('[data-testid=CalendarView-Image-LeftArrow]').click()
          cy.get('[data-testid="CalendarView-Calendar-Main.day_2023-08-18"]').click()
          cy.get('[data-testid=NotesCalendar-Button-Confirm]').click()
          cy.get('.r-mlyl9t').click()
          
          //cy.wait(5000)
          //cy.get('.r-z2wwpe > :nth-child(1)').scrollTo(2, 2)

          cy.get('[data-testid=TimePicker-Text-Confirm]').click()

          //cy.wait(5000)
          //cy.contains('Type').click().type('suger values normal')
          //found bug
          //cy.get('[data-testid=TimePicker-Text-Confirm]').click()

          cy.get('[data-testid=AddNewNoteDrawer-Button-Cancel]').click()
          cy.get('.r-1wtj0ep > .r-18u37iz > :nth-child(1) > svg').click()
          //cy.get('.r-18u37iz > :nth-child(2) > svg > path').click()
          // (x axis, y axis) in pixels
          //cy.wait(5000)
          //cy.get('[data-testid=AddNewNoteDrawer-View-Container]').scrollTo('bottom')
          cy.contains('30 Days').click()
          cy.get('.r-1kihuf0.r-18u37iz > :nth-child(1) > svg').click()
          cy.contains('60 Days').click()
          cy.get(':nth-child(3) > svg').click()
          
          //resorces
          cy.get('[data-testid=SidePannel-Text-Title3]').click()
          cy.get('[data-testid=IconButton-Image-Icon]').click()
          cy.get('[data-testid=SearchFilterView-Image-Filter]').click()
          //cy.wait(5000)
          //cy.contains('Apply').should('be.disabled')
          //cy.get('.r-qn3fzs > :nth-child(2)')*/

          cy.get('[data-testid=SidePannel-Text-Title4]').click()
          cy.wait(1000)
          //cy.get(':nth-child(1) > [style="flex-direction: row; padding-left: 24px; padding-bottom: 24px;"] > [style="flex-direction: column; justify-content: center; width: 723px; margin-right: 24px;"] > :nth-child(1) > [data-testid=CatalogProductCard-View-MainContainer] > .r-13awgt0.r-1ow6zhx > .r-11c0sde > [data-testid=CatalogProductCard-View-CountContainer] > [data-testid=CatalogProductCard-Pressable-CountIncrease]').click()
          //cy.get(':nth-child(2) > [style="flex-direction: row; padding-left: 24px; padding-bottom: 24px;"] > [style="flex-direction: column; justify-content: center; width: 723px; margin-right: 24px;"] > :nth-child(1) > [data-testid=CatalogProductCard-View-MainContainer] > .r-13awgt0.r-1ow6zhx > .r-11c0sde > [data-testid=CatalogProductCard-View-CountContainer] > [data-testid=CatalogProductCard-Pressable-CountIncrease]')

          //cy.get('div>[data-testid="ProductCatalog-FlatGrid-Products"]',div,nth-child(1)>div,nth-child(1)>div,nth-child(1)>div,nth-child(1)>div>div,nth-child(1)>div>div,nth-child(3)>div>div,nth-child(3)).click()
          //cy.get('div>[data-testid="ProductCatalog-FlatGrid-Products"]'>div,nth-child(1)>div,nth-child(1)>div,nth-child(1)>div,nth-child(1)>div,nth-child(1)>divnth-child(1)>div,nth-child(2)>div,nth-child(3)>div,nth-child(1)>div,nth-child(3)).click()
          //cy.get('[data-testid="ProductCatalog-FlatGrid-Products"]')
            //.find(':nth-child(1) > div > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) >div > div:nth-child(1) > div:nth-child(3)').click(  );
          //cy.get(('div>[id="root"]')>div>[class{'css-175oi2r,css-175oi2r,css-175oi2r'}])
            //.find('div>div,nth-child(1)> div>div,nth-child(1)> div>div,nth-child(1)> div>div,nth-child(1)> div>div,nth-child(1)> div>div,nth-child(2)> div>div,nth-child(3)> div>div,nth-child(1)> div>div,nth-child(3)').click()
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').click()
        cy.wait(2000)
        //cy.get('[style="flex: 1 1 0%; margin-left: 0px;"] > .r-1od9aju > .r-1loqt21').click()
        //cy.get('[style="flex: 1 1 0%; margin-left: 0px;"] > .r-1od9aju > .r-1loqt21 > svg').click()
        //cy.get('[data-testid="RightPannel-div-Modal"]'>'.r-1sv84sj'>'.r-obd0qt' > '.r-1od9aju' > '.r-1loqt21'>'svg').click()
        //cy.get('.css-175oi2r.r-1loqt21.r-1otgn73.r-1awozwy.r-1777fci.r-mvpalk.r-r0h9e2.r-1guathk.r-1h4fu65').click()
        cy.get('div[class="css-175oi2r r-1loqt21 r-1otgn73 r-1awozwy r-1777fci r-mvpalk r-r0h9e2 r-1guathk r-1h4fu65"]').click({force:true})
        cy.get('[style="flex: 1 1 0%; margin-left: 16px;"] > .css-175oi2r').click({force:true})
        cy.get(':nth-child(2) > .r-18u37iz > [data-testid=IconButton-TouchableOpacity-Icon]').click()
        cy.get('[data-testid=CartPriceOverview-Text-GrandTotal]').should('have.value','')
    })

})