describe('deravesoftware.com Test', () => {
    it('Wyświetl stronę w rozdzielczości 1920x1080', () => {
      cy.visit('https://deravesoftware.com/')
      cy.viewport(1920,1080)
    })

    it('Przetestuj menu górne dla rozdzielczości 1920x1080', () => {
      cy.viewport(1920,1080)
      cy.get('.top-logo').should('be.visible')
      cy.get('.top-menu > :nth-child(1)',{ timeout: 10000 }).should('be.visible').click()
      cy.get('.top-menu > :nth-child(2)', { timeout: 10000 }).should('be.visible').click()
      cy.get('.top-menu > :nth-child(3)', { timeout: 10000 }).should('be.visible').click()
      cy.get('.top-menu > :nth-child(4)', { timeout: 10000 }).should('be.visible').click()
      cy.get('.top-menu > :nth-child(5)', { timeout: 20000 }).should('be.visible').click()
      cy.get('.top-button', { timeout: 10000 }).should('be.visible').click()
    })

    it('[Negatywny przypadek testowy]:test wysyłki formularza z brakiem domeny w adresie e-mail', () => {
      cy.visit('https://deravesoftware.com/')
      cy.viewport(1920,1080)
      cy.get('.top-button').should('be.visible').click()
      cy.get('#form_name', { timeout: 10000 }).should('be.visible').type('Cruel Tester').should('have.value', 'Cruel Tester')
      cy.get('#form_message', { timeout: 10000 }).should('be.visible').type('Negatywny test formularza').should('have.value', 'Negatywny test formularza')
      cy.get('#form_email', { timeout: 10000 }).should('be.visible').type('test@email').should('have.value', 'test@email')
      cy.get('.contact-form__btn', { timeout: 10000 }).should('be.visible').children('.btn-primary').click()
      cy.get('.contact-form__alert', { timeout: 10000 }).should('be.visible').contains('error')
    })    

  })
