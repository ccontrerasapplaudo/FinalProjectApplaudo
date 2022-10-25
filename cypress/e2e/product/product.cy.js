"use strict";
import ProductFeature from "../../pages/Product";

describe("Verify if the user is able to add a product to the shopping cart", () => {

    before(() => {
        cy.visit("http://automationpractice.com/index.php");
    });

    //PRODUCT_01
    it("Verifying if the product can be added to the shopping cart on the webpage: ", () => {
        cy.viewport(1280, 720);
        ProductFeature.mouseOverRandomProduct();
        ProductFeature.extractTitleAndProductPrice();
        ProductFeature.clickAddToCartButton();
        ProductFeature.verifyProductAddedToCartPopUpWindow();

    });

    //PRODUCT_02
    it("Verifying if the product has a quickview popup window on the webpage: ", () => {
        cy.viewport(1280, 720);
        ProductFeature.mouseOverPreviousRandomProduct();
        ProductFeature.clickQuickViewButton();
        ProductFeature.verifyQuickViewInfoPopUpIsVisible();

    });

    //PRODUCT_03
    it("Verifying if the product can be added to the shopping cart on the webpage: ", () => {
        cy.viewport(1280, 720);
        cy.reload();
        ProductFeature.mouseOverPreviousRandomProduct();
        ProductFeature.clickMoreButton();
        ProductFeature.verifyMoreInfoWebpage();

    });

});