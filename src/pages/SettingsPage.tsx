// SettingsPage.tsx
function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto" data-testid="settings-page">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-500 mb-4">
          This is a dummy settings page for demonstration purposes.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <div className="w-12 h-6 bg-gray-300 rounded-full p-1 cursor-not-allowed">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Notifications</span>
            <div className="w-12 h-6 bg-gray-300 rounded-full p-1 cursor-not-allowed">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Sound Effects</span>
            <div className="w-12 h-6 bg-gray-300 rounded-full p-1 cursor-not-allowed">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
