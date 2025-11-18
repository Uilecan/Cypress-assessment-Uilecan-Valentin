class ShoppingPage {
    searchProduct(product) {
        cy.visitEmag();
        cy.get('input[placeholder="Începe o nouă căutare"]').type(`${product}{enter}`);
    }

    filterByBrand(brand) {
        cy.contains('a.js-filter-item', brand).click();
    }

    filterByRating(ratingOptionId) {
        cy.get(`a[data-option-id="${ratingOptionId}"]`).click();
    }

    sortBy(option) {
        cy.get('button.sort-control-btn').first().click({ force: true });
        cy.contains('a.js-sort-option', option).click({ force: true });
    }

    getFirstAvailableCard() {
        return cy.get('.card-item').then($cards => {
            const found = Cypress.$($cards).filter((i, el) => Cypress.$(el).find('button').text().includes('Adauga in Cos'));
            return cy.wrap(found.first());
        });
    }

    extractPriceFromCard(cardSelector) {
        return cy.wrap(cardSelector).find('p.product-new-price').then($p => {
            const intPart = $p.contents().filter(function () { return this.nodeType === 3; }).text().replace(/[^0-9]/g, '').trim();
            return cy.wrap(cardSelector).find('p.product-new-price sup').then($sup => {
                const supText = $sup.text().replace(/[^0-9]/g, '').trim().padStart(2, '0');
                const price = parseFloat(`${intPart}.${supText}`);
                cy.log('Extracted price:', price);
                return cy.wrap(price);
            });
        });
    }

    addToCart(cardSelector) {
        cy.wrap(cardSelector).within(() => {
            cy.get('button.btn.btn-sm.btn-emag.btn-block.yeahIWantThisProduct')
                .should('exist')
                .should('be.visible')
                .click({ force: true });
        });
    }

    closePopup() {
        cy.get('button.close.gtm_6046yfqs').click();
    }

    goToAccessories() {
        cy.contains('a.btn.btn-light.rounded-pill.btn-sm.mb-2.gtm_rp2400418', 'Accesorii TV').click();
    }

    openCart() {
        cy.get('#my_cart').click();
    }

    extractPriceFromSummary(selector) {
        return cy.get(selector).should('be.visible').then($el => {
            const intPart = $el.contents().filter(function () { return this.nodeType === 3; }).text().replace(/[^0-9]/g, '').trim();
            let supText = $el.find('sup').text().replace(/[^0-9]/g, '').trim().padStart(2, '0');
            if (!supText) supText = '00';
            const price = parseFloat(`${intPart}.${supText}`);
            cy.log('Extracted summary price:', price);
            return cy.wrap(price);
        });
    }
}

export default new ShoppingPage();