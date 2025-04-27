/// <reference types="cypress" />
// cypress/support/window-driver/base-driver.ts

// Base window driver class that other drivers will extend
export class BaseDriver {
  // Common methods that might be shared across drivers
  visit() {
    cy.visit("/");
    return this;
  }

  // Method to ensure we're on the correct page
  assertOnPage(pageTestId: string) {
    cy.findByTestId(pageTestId).should("be.visible");
    return this;
  }
}
