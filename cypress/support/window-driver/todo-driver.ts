/// <reference types="cypress" />
// cypress/support/window-driver/todo-driver.ts
import { BaseDriver } from "./base-driver";

// Interface for todo functionality
export interface ITodoDriver {
  assertTodoCount(count: number): ITodoDriver;
  addTodo(text: string): ITodoDriver;
  toggleTodo(text: string): ITodoDriver;
  deleteTodo(text: string): ITodoDriver;
  assertTodoCompleted(text: string): ITodoDriver;
  assertTodoNotCompleted(text: string): ITodoDriver;
  assertTodoExists(text: string): ITodoDriver;
  assertTodoDoesNotExist(text: string): ITodoDriver;
}

export class TodoDriver extends BaseDriver implements ITodoDriver {
  assertTodoCount(count: number) {
    cy.findAllByTestId(/^todo-item-/).should("have.length", count);
    return this;
  }

  addTodo(text: string) {
    cy.findByTestId("new-todo-input").type(text);
    cy.findByTestId("add-todo-button").click();
    return this;
  }

  toggleTodo(text: string) {
    cy.findByText(text)
      .parent()
      .findByTestId(/^toggle-todo-/)
      .click();
    return this;
  }

  deleteTodo(text: string) {
    cy.findByText(text)
      .parent()
      .parent()
      .findByRole("button", { name: "Delete" })
      .click();
    return this;
  }

  assertTodoCompleted(text: string) {
    cy.findByText(text)
      .should("have.css", "text-decoration")
      .and("include", "line-through");
    return this;
  }

  assertTodoNotCompleted(text: string) {
    cy.findByText(text).should(
      "not.have.css",
      "text-decoration",
      "line-through",
    );
    return this;
  }

  assertTodoExists(text: string) {
    cy.findByText(text).should("be.visible");
    return this;
  }

  assertTodoDoesNotExist(text: string) {
    cy.findByText(text).should("not.exist");
    return this;
  }
}
