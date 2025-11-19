import ShoppingPage from '../pages/shoppingpage';

describe('Shopping scenario on eMag', () => {

    it('should add products and verify cart', () => {

        ShoppingPage.searchProduct('televizor');
        ShoppingPage.filterByBrand('Samsung');
        ShoppingPage.filterByRating('3-5');
        ShoppingPage.sortBy('Pret descrescator');
        cy.wait(2000);

        ShoppingPage.getFirstAvailableCard().as('tvCard');

        cy.get('@tvCard')
            .then(card => ShoppingPage.extractPriceFromCard(card))
            .as('tvPrice');

        cy.get('@tvCard')
            .then(card => ShoppingPage.addToCart(card));

        ShoppingPage.closePopup();

        ShoppingPage.goToAccessories();
        ShoppingPage.filterByBrand('Samsung');
        cy.wait(2000);
        ShoppingPage.filterByRating('3-5');
        ShoppingPage.sortBy('Pret crescator');
        cy.wait(2000);

        ShoppingPage.getFirstAvailableCard().as('accessoryCard');

        cy.get('@accessoryCard')
            .then(card => ShoppingPage.extractPriceFromCard(card))
            .as('accessoryPrice');

        cy.get('@accessoryCard')
            .then(card => ShoppingPage.addToCart(card));

        ShoppingPage.closePopup();
        ShoppingPage.openCart();
        cy.wait(2000);

        cy.get('.line-item-title.main-product-title').each(($el) => {
            const productTitle = $el.text().toLowerCase();
            expect(productTitle).to.include('samsung');
        });

        ShoppingPage.extractPriceFromSummary('.order-summary-shipping-cost')
            .as('shippingCost');

        ShoppingPage.extractPriceFromSummary('div[data-test="summaryTotal"]')
            .as('totalPrice');

        cy.then(function () {
            const tv = Number(this.tvPrice);
            const acc = Number(this.accessoryPrice);
            const ship = Number(this.shippingCost);
            const total = Number(this.totalPrice);

            const expectedTotal = tv + acc + ship;

            const totalRounded = Number(total.toFixed(2));
            const expectedRounded = Number(expectedTotal.toFixed(2));
            expect(totalRounded).to.equal(expectedRounded);
        });
    });
});