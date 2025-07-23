const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-2xl font-bold mb-8 text-indigo-600">Event Managment</h2>
        <nav className="flex flex-col space-y-4">
          <a href="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</a>
          <a href="/create-event" className="text-gray-700 hover:text-indigo-600">Create Event</a>
          <a href="/find-events" className="text-gray-700 hover:text-indigo-600">Find Events</a>
          <a href="/login" className="text-gray-700 hover:text-indigo-600">Logout</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Dashboard cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800">Total Events</h2>
            <p className="text-3xl mt-2 text-indigo-600 font-bold">12</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800">Upcoming</h2>
            <p className="text-3xl mt-2 text-green-500 font-bold">5</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800">Users Joined</h2>
            <p className="text-3xl mt-2 text-pink-500 font-bold">38</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

