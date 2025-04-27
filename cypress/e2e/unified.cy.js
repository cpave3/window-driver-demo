// cypress/e2e/todo-list-unified.cy.ts

describe("Todo List Application", () => {
  beforeEach(() => {
    // Visit the application and create the appropriate driver
    cy.visit("/");
  });

  it("allows adding, completing, and removing todos", () => {
    // Create the appropriate driver based on current UI
    cy.createAppDriver().then((driver) => {
      // Navigate to the todos page using the abstract interface
      driver.navigation.goToTodos();

      // Assert initial state
      driver.todos.assertTodoCount(3);

      // Add new todos
      const todoText1 = "Buy groceries";
      const todoText2 = "Walk the dog";

      driver.todos
        .addTodo(todoText1)
        .assertTodoExists(todoText1)
        .addTodo(todoText2)
        .assertTodoExists(todoText2)
        .assertTodoCount(5);

      // Mark a todo as completed
      driver.todos.toggleTodo(todoText1).assertTodoCompleted(todoText1);

      // Delete a todo
      driver.todos
        .deleteTodo(todoText2)
        .assertTodoDoesNotExist(todoText2)
        .assertTodoCount(4);

      // Navigate to another page and back to verify state persistence
      driver.navigation.goToSettings().goToTodos();

      // Verify the todos state persisted
      driver.todos
        .assertTodoCount(4)
        .assertTodoExists(todoText1)
        .assertTodoCompleted(todoText1);
    });
  });
});
