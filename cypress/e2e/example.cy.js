describe('Various examples', ()=>{
    beforeEach(()=>{

        //path of the site page
        cy.visit('/examples')
    })
    it('multi-page testing', () =>{
        // Test navigation to why cypress tab
        cy.getDataTest('nav-why-cypress').click();
        cy.location("pathname").should("equal", "/")

        //test navigation to overview tab
        cy.getDataTest('nav-overview').click();
        cy.location("pathname").should("equal", "/overview")

        //test navigation to fundaments tab
        cy.getDataTest('nav-fundaments').click();
        cy.location("pathname").should("equal", "/fundamentals")

        //test navigation to forms tab
        cy.getDataTest('nav-forms').click();
        cy.location("pathname").should("equal", "/forms")

         //test navigation to examples tab
        cy.getDataTest('nav-examples').click();
        cy.location("pathname").should("equal", "/examples")

         //test navigation to componet tab
        cy.getDataTest('nav-Component').click();
        cy.location("pathname").should("equal", "/component")

        //test navigation to best practices tab
        cy.getDataTest('nav-best-practices').click();
        cy.location("pathname").should("equal", "/best-practices")
    })

    // intercepts requests
  it.only('intercepts', () =>{
    cy.intercept("POST", 'http://localhost:3000/examples', {
      
      //posting the response on the console
        // body: {
        //    message: 'Successfully intercepted request'
       // }

    // using fixtures to post on console from fixture file
       fixture: 'example.json'
    })
    cy.getDataTest('post-button').click()
  })
  
  it.only('Grudge', () =>{
    //check the header
    cy.contains(/add some grudges/i).should('exist')
    // check the list is empty
    cy.getDataTest('grudges-list').within(() => {
      cy.get('li').should('have.length', 0)
    })
    //check the clear button is not visible
    cy.getDataTest('clear-button').should('not.exist')

  //check the title of the grudge list
    cy.getDataTest('grudge-list-title').should('contain.text', 'Add Some Grudges')
    // add a grudge
    cy.getDataTest('grudge-input').within(() => {
        cy.get('input').type('some grudge')
    })
    // click the add grudge button
    cy.getDataTest('add-grudge-button').click()
    // check the grudge is added to the list
     cy.getDataTest('grudges-list').within(() => {
      cy.get('li').should('have.length', 1)
    })

    //check the title of the grudge list after adding a grudge
    cy.getDataTest('grudge-list-title').should('contain.text', 'Grudges')
        // add a grudge
    cy.getDataTest('grudge-input').within(() => {
        cy.get('input').type('Bullies')
    })
    // click the add grudge button
    cy.getDataTest('add-grudge-button').click()
    // check the grudge is added to the list
    cy.getDataTest('grudges-list').within(() => {
      cy.get('li').should('have.length', 2)
      cy.get('li').first().should('contain.text', 'some grudge')
    })

    // delete a grudge
    cy.getDataTest('grudges-list').within(() => {
      cy.get('li').first().within(() => {
        cy.get('button').click()
      })
      cy.get('li').should('have.length', 1)
      cy.get('li').first().should('contain.text', 'Bullies')
    })
    // clear all grudges
    cy.getDataTest('clear-button').click()
    // check the list is empty again
    cy.getDataTest('grudges-list').within(() => {
      cy.get('li').should('have.length', 0)
     })
  })
})