it('google test',function(){
    cy.visit('https://demoqa.com/')
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
    //cy.wait(5000)
   // cy.contains('Images').click()
})
it.only('log in',function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
    cy.get('#divUsername > .form-hint').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.wait(3000)
    cy.get('#menu_admin_viewAdminModule > b').should('be.visible').trigger('mouseover').click()
    cy.wait(5000)
    cy.get('#menu_admin_UserManagement').click({force: true})
    // cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#searchSystemUser_userName').type("Anthony.Nolan")
    cy.get('#searchSystemUser_userType').select('ESS')
   // cy.get('#searchSystemUser_status').select('Enabled')
    cy.get('#searchBtn').click()
   cy.wait(8000)
    cy.get('.odd > :nth-child(2) > a').click()
    cy.get('#btnSave').click()
    cy.get('#systemUser_status').select('Disabled')
    cy.get('#btnSave').click()
    cy.get('#searchSystemUser_userName').type("Anthony.Nolan")
    cy.get('#searchBtn').click()

    
})