import { INavDriver } from "./INavDriver";
import { SideNavDriver } from "./side-nav-driver";
import { ITodoDriver, TodoDriver } from "./todo-driver";
import { TopNavDriver } from "./top-nav-driver";

// App-specific driver that composes other drivers
export class AppDriver {
  private navDriver: INavDriver;
  private todoDriver: ITodoDriver;

  constructor(navDriver: INavDriver, todoDriver: ITodoDriver) {
    this.navDriver = navDriver;
    this.todoDriver = todoDriver;
  }

  // Expose navigation methods
  get navigation() {
    return this.navDriver;
  }

  // Expose todo methods
  get todos() {
    return this.todoDriver;
  }

  // App-level methods
  visit() {
    cy.visit("/");
    return this;
  }

  // Factory method to create the appropriate driver based on the current navbar
  static create() {
    cy.findByTestId("navtype").then(($btn) => {
      const isSideNav = $btn.text().includes("Side");

      const navDriver = isSideNav ? new SideNavDriver() : new TopNavDriver();

      const todoDriver = new TodoDriver();

      return new AppDriver(navDriver, todoDriver);
    });
  }
}
