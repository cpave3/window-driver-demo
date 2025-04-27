// cypress/e2e/todo-list-sideNav.cy.js

describe("Todo List with Side Navigation", () => {
  beforeEach(() => {
    // Visit the application
    cy.visit("/");
  });

  it("navigates to todo list, adds and removes items", () => {
    // Check that we're on the home page initially
    cy.findByTestId("home-page").should("be.visible");

    // Click on the Todo List nav item in the side navbar
    cy.findByTestId("side-navbar")
      .should("be.visible")
      .findByTestId("nav-todos")
      .click();

    // Verify we're on the todo list page
    cy.findByTestId("todo-page").should("be.visible");

    // Initial todos should be visible
    cy.findByTestId("todo-list").should("be.visible");
    cy.findAllByTestId(/^todo-item-/).should("have.length", 3);

    // Add a new todo
    const todoText1 = "Buy groceries";
    cy.findByTestId("new-todo-input").type(todoText1);
    cy.findByTestId("add-todo-button").click();

    // Verify the new todo was added
    cy.findAllByTestId(/^todo-item-/).should("have.length", 4);
    cy.findByText(todoText1).should("be.visible");

    // Add another todo
    const todoText2 = "Walk the dog";
    cy.findByTestId("new-todo-input").type(todoText2);
    cy.findByTestId("add-todo-button").click();

    // Verify the second todo was added
    cy.findAllByTestId(/^todo-item-/).should("have.length", 5);
    cy.findByText(todoText2).should("be.visible");

    // Toggle completion status of a todo
    cy.findByText(todoText1)
      .parent()
      .findByTestId(/^toggle-todo-/)
      .click();

    // Verify the todo is marked as completed (has a line-through style)
    cy.findByText(todoText1)
      .should("have.css", "text-decoration")
      .and("include", "line-through");

    // Delete a todo
    cy.findAllByTestId(/^delete-todo-/)
      .last()
      .click();

    // Verify the todo was removed
    cy.findAllByTestId(/^todo-item-/).should("have.length", 4);
    cy.findByText(todoText2).should("not.exist");

    // Navigate to another page and back
    cy.findByTestId("side-navbar").findByTestId("nav-settings").click();

    // Verify we're on the settings page
    cy.findByTestId("settings-page").should("be.visible");

    // Go back to todo list
    cy.findByTestId("side-navbar").findByTestId("nav-todos").click();

    // Verify our changes persisted
    cy.findAllByTestId(/^todo-item-/).should("have.length", 4);
    cy.findByText(todoText1)
      .should("be.visible")
      .should("have.css", "text-decoration")
      .and("include", "line-through");
  });
});
