import ShoppingPage from '../pages/shoppingpage';

describe('Shopping scenario on eMag', () => {
    it('should add products and verify cart', () => {
        ShoppingPage.searchProduct('televizor');
        ShoppingPage.filterByBrand('Samsung');
        ShoppingPage.filterByRating('3-5');
        ShoppingPage.sortBy('Pret descrescator');
        cy.wait(2000);
        ShoppingPage.getFirstAvailableCard().then(card => {
            ShoppingPage.extractPriceFromCard(card).then(price => {
                const tvPrice = Number(price);
                console.log('tvPrice:', tvPrice, typeof tvPrice);
                ShoppingPage.addToCart(card);
                ShoppingPage.closePopup();
                ShoppingPage.goToAccessories();
                ShoppingPage.filterByBrand('Samsung');
                cy.wait(2000);
                ShoppingPage.filterByRating('3-5');
                ShoppingPage.sortBy('Pret crescator');
                cy.wait(2000);
                ShoppingPage.getFirstAvailableCard().then(card2 => {
                    ShoppingPage.extractPriceFromCard(card2).then(price2 => {
                        const accessoryPrice = Number(price2);
                        console.log('accessoryPrice:', accessoryPrice, typeof accessoryPrice);
                        ShoppingPage.addToCart(card2);
                        ShoppingPage.closePopup();
                        ShoppingPage.openCart();
                        cy.wait(2000);

                        ShoppingPage.extractPriceFromSummary('.order-summary-shipping-cost').then(shippingCostRaw => {
                            const shippingCost = Number(shippingCostRaw);
                            console.log('shippingCost:', shippingCost, typeof shippingCost);
                            ShoppingPage.extractPriceFromSummary('div[data-test="summaryTotal"]').then(totalPriceRaw => {
                                const totalPrice = Number(totalPriceRaw);
                                console.log('totalPrice:', totalPrice, typeof totalPrice);
                                const expectedTotal = tvPrice + accessoryPrice + shippingCost;
                                console.log('expectedTotal:', expectedTotal, typeof expectedTotal);
                                expect(Math.round(totalPrice * 100) / 100).to.equal(Math.round(expectedTotal * 100) / 100);
                            });
                        });
                    });
                });
            });
        });
    });
});
