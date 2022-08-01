
it('google test',function(){
    cy.visit('https://www.google.com')
    cy.get('.gLFyf',{Timeout:500}).type("cypress{enter}")
    cy.wait(5000)
    cy.contains('Images').click()
})