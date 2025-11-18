import HomePage from '../pages/homepage'

describe('Scenario 3 | Social media links', () => {
    beforeEach(() => {
        HomePage.open()
    })

    it('verifies visibility, href correctness and opened URL domain for social links', () => {
        HomePage.getSocialLinks().should('have.length.at.least', 1).each(($a) => {
            cy.wrap($a).should('be.visible')
            cy.wrap($a).invoke('attr', 'href').then(href => {
                expect(href).to.match(/^https?:\/\//)
                cy.request({ url: href, followRedirect: false, failOnStatusCode: false }).then(resp => {
                    expect(resp.status).to.be.gte(200)
                })
            })
        })
    })
})
