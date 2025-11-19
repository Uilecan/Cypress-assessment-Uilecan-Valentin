import HomePage from '../pages/homepage'

describe('Scenario 4 | Logo checks (positive + negative)', () => {
    beforeEach(() => {
        HomePage.open()
    })

    it('verifies logo visible and dimensions > 0 and negative assertion', () => {
        HomePage.getLogo().should('be.visible').and(($img) => {
            const width = $img.width()
            const height = $img.height()
            expect(width).to.be.greaterThan(0)
            expect(height).to.be.greaterThan(0)
        })
        
        HomePage.getLogo().should(($img) => {
            expect($img.width()).to.not.equal(0)
            expect($img.height()).to.not.equal(0)
        })
    })
})
