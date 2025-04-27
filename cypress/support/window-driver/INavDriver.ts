// Interface for navigation drivers
export interface INavDriver {
  goToHome(): INavDriver;
  goToTodos(): INavDriver;
  goToSettings(): INavDriver;
  goToAbout(): INavDriver;
}
