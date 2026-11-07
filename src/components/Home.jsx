import React from "react";
import { Link } from "react-router-dom";

const user = {
  entity: "doctor", // Possible values: "patient", "doctor", "hospitalManagement"
};

function Home() {
  return (
    <div className="min-h-screen flex text-gray-300 bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 p-4 bg-gray-800">
        <h2 className="text-2xl font-bold mb-8">HealthHub</h2>
        <nav className="space-y-4">
          <a href="#" className="block py-2 hover:text-white">
            Dashboard
          </a>

          {user.entity === "patient" && (
            <>
              <a
                href="/appointment"
                className="block py-2 hover:text-white cursor-pointer"
              >
                My Appointments
              </a>
              <a href="#" className="block py-2 hover:text-white">
                My Doctors
              </a>
              <a href="#" className="block py-2 hover:text-white">
                Prescriptions
              </a>
            </>
          )}

          {user.entity === "doctor" && (
            <>
              <a
                href="/appointment"
                className="block py-2 hover:text-white cursor-pointer"
              >
                Appointments
              </a>
              <a href="#" className="block py-2 hover:text-white">
                Patients
              </a>
              <a href="#" className="block py-2 hover:text-white">
                Schedule
              </a>
              <a href="/reports" className="block py-2 hover:text-white">
                Reports
              </a>
            </>
          )}

          {user.entity === "hospitalManagement" && (
            <>
              <a href="#" className="block py-2 hover:text-white">
                Manage Doctors
              </a>
              <a href="#" className="block py-2 hover:text-white">
                Departments
              </a>
              <a href="#" className="block py-2 hover:text-white">
                Inventory
              </a>
              <a href="#" className="block py-2 hover:text-white">
                Staff
              </a>
            </>
          )}
        </nav>
        <div className="mt-auto space-y-4">
          <a href="#" className="block py-2 hover:text-white">
            Settings
          </a>
          <a href="#" className="block py-2 hover:text-white">
            Help Center
          </a>
          <a href="#" className="block py-2 hover:text-white">
            Log out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Daily Overview</h1>
          <div className="text-lg">
            {user.entity === "doctor" ? "Dr. Smith" : "Welcome"}
          </div>
        </header>

        {/* Overview Section */}
        <section className="grid grid-cols-4 gap-4 mb-8">
          {user.entity === "patient" && (
            <>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h3 className="text-xl">5</h3>
                <p className="text-sm">Upcoming Appointments</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h3 className="text-xl">3</h3>
                <p className="text-sm">Doctors</p>
              </div>
            </>
          )}

          {user.entity === "doctor" && (
            <>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h3 className="text-xl">10</h3>
                <p className="text-sm">Patients</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h3 className="text-xl">2</h3>
                <p className="text-sm">Surgeries</p>
              </div>
            </>
          )}

          {user.entity === "hospitalManagement" && (
            <>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h3 className="text-xl">15</h3>
                <p className="text-sm">Doctors on Duty</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h3 className="text-xl">8</h3>
                <p className="text-sm">Departments</p>
              </div>
            </>
          )}
        </section>

        {/* Entity-Specific Content */}
        {user.entity === "doctor" && (
          <section className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Schedule</h2>
            <div className="grid grid-cols-8 gap-2">
              <div>08:00</div>
              <div className="col-span-7 bg-gray-700 rounded px-2 py-1">
                Patient Examination
              </div>
            </div>
          </section>
        )}

        {user.entity === "patient" && (
          <section className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Upcoming Appointments
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div>John Doe</div>
              <div>Eczema</div>
              <div>Oct 15, 2024 at 10:00 AM</div>
              <div>-</div>
            </div>
          </section>
        )}
      </main>

      {/* Right Sidebar */}
      <aside className="w-72 p-4 bg-gray-800">
        {/* Calendar */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">October 2024</h2>
          <div className="grid grid-cols-7 gap-1 text-center">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>Th</div>
            <div>F</div>
            <div>S</div>
            <div>Su</div>
            <div className="col-span-7 mt-2"></div>
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Notifications</h2>
          {user.entity === "patient" && (
            <p>You have 2 upcoming appointments.</p>
          )}
          {user.entity === "doctor" && <p>3 new patient requests.</p>}
          {user.entity === "hospitalManagement" && (
            <p>New inventory request pending approval.</p>
          )}
        </div>
      </aside>
    </div>
  );
}

export default Home;