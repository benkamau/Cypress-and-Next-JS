describe('Fundamentals test', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    
   //cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
   //  cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
     cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')

     

  })
 it ('Accordion works correctly', () => {
     cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
     cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
     cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
     cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
     cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
     
    
    cy.get('[data-test="accordion-item-2"] div[role="button"]').click() 
    cy.contains(/Within your describe block, you will also have it blocks/i).should('be.visible')
    cy.get('[data-test="accordion-item-2"] div[role="button"]').click()
    cy.contains(/Within your describe block, you will also have it blocks/i).should('not.be.visible')
  })

}) 