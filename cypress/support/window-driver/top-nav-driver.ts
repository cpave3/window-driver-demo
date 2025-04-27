/// <reference types="cypress" />

import { BaseDriver, INavDriver } from "./base-driver";

// Driver for the top navigation
export class TopNavDriver extends BaseDriver implements INavDriver {
  goToHome() {
    // Home is directly in the top navbar
    cy.findByTestId("top-navbar").findByTestId("nav-home").click();
    this.assertOnPage("home-page");
    return this;
  }

  goToTodos() {
    // Need to click dropdown first
    cy.findByTestId("dropdown-toggle").click();
    cy.findByTestId("dropdown-menu").findByTestId("nav-todos").click();
    this.assertOnPage("todo-page");
    return this;
  }

  goToSettings() {
    // Need to click dropdown first
    cy.findByTestId("dropdown-toggle").click();
    cy.findByTestId("dropdown-menu").findByTestId("nav-settings").click();
    this.assertOnPage("settings-page");
    return this;
  }

  goToAbout() {
    // Need to click dropdown first
    cy.findByTestId("dropdown-toggle").click();
    cy.findByTestId("dropdown-menu").findByTestId("nav-about").click();
    this.assertOnPage("about-page");
    return this;
  }
}
