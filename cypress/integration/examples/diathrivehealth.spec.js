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
         cy.get('.r-1ydw1k6 > .r-1mgje8r').click()
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
          cy.get('[data-testid="CalendarView-Calendar-Main.day_2023-07-18"]').click()
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

          
          
    })
})