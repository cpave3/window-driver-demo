/// <reference types="cypress" />
// cypress/support/window-driver/nav-drivers.ts
import { BaseDriver } from "./base-driver";

// Driver for the side navigation
export class SideNavDriver extends BaseDriver implements INavDriver {
  goToHome() {
    cy.findByTestId("side-navbar").findByTestId("nav-home").click();
    this.assertOnPage("home-page");
    return this;
  }

  goToTodos() {
    cy.findByTestId("side-navbar").findByTestId("nav-todos").click();
    this.assertOnPage("todo-page");
    return this;
  }

  goToSettings() {
    cy.findByTestId("side-navbar").findByTestId("nav-settings").click();
    this.assertOnPage("settings-page");
    return this;
  }

  goToAbout() {
    cy.findByTestId("side-navbar").findByTestId("nav-about").click();
    this.assertOnPage("about-page");
    return this;
  }
}
