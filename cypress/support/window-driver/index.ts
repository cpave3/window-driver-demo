// cypress/support/window-driver/index.ts
import { SideNavDriver } from "./side-nav-driver";
import { TopNavDriver } from "./top-nav-driver";
import { TodoDriver } from "./todo-driver";
import { AppDriver } from "./app-driver";

// Export all drivers
export { AppDriver, SideNavDriver, TopNavDriver, TodoDriver };

// Export a factory function to easily create the appropriate driver
export function createAppDriver() {
  return AppDriver.create();
}
