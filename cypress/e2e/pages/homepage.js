class HomePage {
    open() {
        cy.visit('https://airportlabs.com/')
    }

    getSectionTitleElement() {
        return cy.get('[data-w-id="2017091d-9f4f-6014-82bd-a3337f52bd75"]');
    }

    getStatisticNumberElement(selector) {
        return cy.get(selector);
    }

    getStatisticLabelElement(selector) {
        return cy.get(selector);
    }

    getSocialLinks() {
        return cy.get('.div-block-60 a')
    }

    getLogo() {
        return cy.get('nav .desktop-brand img');
    }

    getContactLink() {
        return cy.get('.links a[href="/other/get-in-touch"]');
    }
}

const homePage = new HomePage();
export default homePage;
