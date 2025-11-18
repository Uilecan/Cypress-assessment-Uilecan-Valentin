import HomePage from '../pages/homepage';

describe("Scenario 2 | Our activity in numbers: 17+ Years", () => {
    beforeEach(() => {
        HomePage.open();
    });

    it("validates the '17+ Years' statistic using fixture data", () => {
        cy.fixture("products_years.json").then((data) => {
            const e = data.entry;

            HomePage.getStatisticNumberElement(e.numberSelector)
                .should("exist")
                .and("contain.text", e.expectedNumber)
                .and(($el) => {
                    expect($el).to.have.css('font-size', e.expectedFontSize);
                    expect($el).to.have.css('font-weight', e.expectedFontWeight);
                });

            HomePage.getStatisticLabelElement(e.labelSelector)
                .should("exist")
                .and("contain.text", e.expectedLabel)
                .and(($el) => {
                    expect($el).to.have.css('font-size', e.expectedLabelFontSize);
                    expect($el).to.have.css('font-weight', e.expectedLabelFontWeight);
                });
        });
    });
});