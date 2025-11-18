import HomePage from '../pages/homepage'

describe('Scenario 5 | Contact email check', () => {
    beforeEach(() => {
        HomePage.open()
    })

    it('clicks contact and checks for email', () => {
        HomePage.getContactLink().click()
        cy.contains('contact@airportlabs.com').should('exist')
    })
})
