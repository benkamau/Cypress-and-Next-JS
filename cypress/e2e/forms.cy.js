describe('form test', () => {
    beforeEach(()=>{

        //path of the site page
        cy.visit('/forms')
    })
    it('Test subscribe form', () =>{
        //Confirm the page header
        cy.contains(/testing forms/i)

        // give an aliase for finding the input form
        cy.getDataTest('subscribe-form').find('input').as ('subscribe-input')
         
        // Happy path testing

        // input email using aliase
         cy.get('@subscribe-input').type('ben@gmail.com')

        // Typing into the input form
      //  cy.getDataTest('subscribe-form').find('input').type('ben@gmail.com')

        // Checking if the email exist
        cy.contains(/Successfully subbed: ben@gmail.com!/i).should('not.exist')

        // click the subscribe button to subscribe the email
        cy.getDataTest('subscribe-button').click()

        // check if the email is subscribed is valid
        cy.contains(/Successfully subbed: ben@gmail.com!/i).should('exist')

        //waiting timer
        cy.wait(3000)

        //Confirmation if the message diappears after 30 sec
         cy.contains(/Successfully subbed: ben@gmail.com!/i).should('not.exist')

         //unhappy path testing

         // input email using aliase
         cy.get('@subscribe-input').type('ben@gmail.io')

         // click the subscribe button to subscribe the email
        cy.getDataTest('subscribe-button').click()

         // check if the email is subscribed is invalid
        cy.contains(/Invalid email: ben@gmail.io!/i).should('exist')

        //waiting timer
        cy.wait(3000)
        cy.contains(/Invalid email: ben@gmail.io!/i).should('not.exist')


        // check the Fail is not showing
        cy.contains(/fail!/i).should('not.exist')

        // checking validation if email is not provided
        cy.getDataTest('subscribe-button').click()

        // check the Fail for not providing email
        cy.contains(/fail!/i).should('exist')
    })
})