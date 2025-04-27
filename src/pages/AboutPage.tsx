// AboutPage.tsx
function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto" data-testid="about-page">
      <h1 className="text-3xl font-bold mb-6">About</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Todo App Demo</h2>
        <p className="mb-4">
          This simple Todo application was created to demonstrate the Window
          Driver pattern for Cypress E2E testing.
        </p>
        <p className="mb-4">
          The Window Driver pattern helps abstract the implementation details of
          your UI from your tests, making them more resilient to UI changes.
        </p>
        <p className="mb-4">
          Try switching between the Side Navbar and Top Navbar to see how the UI
          changes, but the functionality remains the same. This is exactly the
          kind of scenario where the Window Driver pattern shines.
        </p>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Created for a meetup presentation on E2E testing best practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
