it('learning assertions',function(){
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

    cy.get('#query-btn',{timeout:8000})
    .should('contain','Button')
    .should('have.class','query-btn btn btn-primary')
    .should('be.visible')
    .should('be.enabled')

})