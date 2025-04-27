// cypress/e2e/todo-list-topNav.cy.js
describe("Todo List with Top Navigation", () => {
  beforeEach(() => {
    // Visit the application
    cy.visit("/");
  });

  it("navigates to todo list, adds and removes items", () => {
    // Check that we're on the home page initially
    cy.findByTestId("home-page").should("be.visible");

    // Click on Pages dropdown in the top navbar
    cy.findByTestId("top-navbar")
      .should("be.visible")
      .findByTestId("dropdown-toggle")
      .click();

    // Click on Todo List in the dropdown
    cy.findByTestId("dropdown-menu").findByTestId("nav-todos").click();

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
    // Open the dropdown again
    cy.findByTestId("dropdown-toggle").click();

    // Click on Settings in the dropdown
    cy.findByTestId("dropdown-menu").findByTestId("nav-settings").click();

    // Verify we're on the settings page
    cy.findByTestId("settings-page").should("be.visible");

    // Go back to todo list - first open dropdown
    cy.findByTestId("dropdown-toggle").click();

    // Click on Todo List in the dropdown
    cy.findByTestId("dropdown-menu").findByTestId("nav-todos").click();

    // Verify our changes persisted
    cy.findAllByTestId(/^todo-item-/).should("have.length", 4);
    cy.findByText(todoText1)
      .should("be.visible")
      .should("have.css", "text-decoration")
      .and("include", "line-through");
  });
});
