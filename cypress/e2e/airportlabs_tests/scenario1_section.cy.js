import HomePage from '../pages/homepage'

describe('Scenario 1 | Section title visual checks', () => {
  beforeEach(() => {
    HomePage.open()
  })

  it('verifies a chosen section title text, font-size/weight and visibility on desktop and mobile', () => {
    const titleText = 'Company';

    HomePage.getSectionTitleElement().should('be.visible')
      .and('contain.text', titleText);

    HomePage.getSectionTitleElement().should(($el) => {
      const fontSize = $el.css('font-size');
      const fontWeight = $el.css('font-weight');
      expect(fontSize).to.match(/\d+px/);
      expect(fontWeight).to.not.be.empty;
    });

    cy.viewport(1280, 800);
    HomePage.getSectionTitleElement().should('be.visible');

    cy.viewport(375, 667);
    HomePage.getSectionTitleElement().should('be.visible');
  });
})
