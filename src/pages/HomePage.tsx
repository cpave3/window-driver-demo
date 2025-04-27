// HomePage.tsx
function HomePage() {
  return (
    <div className="max-w-4xl mx-auto" data-testid="home-page">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Todo App</h1>
      <p className="mb-4">
        This is a simple todo application built to demonstrate the Window Driver
        pattern in Cypress E2E testing.
      </p>
      <p className="mb-4">
        The application features two different navigation layouts that can be
        toggled, which makes it a perfect example to show how the Window Driver
        pattern can help manage UI changes in your tests.
      </p>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6">
        <p className="text-yellow-700">
          Click on the "Todo List" option in the navigation to manage your
          tasks.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
