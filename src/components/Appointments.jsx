import React from "react";

const Appointments = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex flex-grow p-8">
        {/* Upcoming Appointments */}
        <div className="w-2/3 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>

          <div className="space-y-4">
            {/* Appointment Cards */}
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold">John Smith - Dental Checkup</h3>
              <p className="text-sm text-gray-400">
                Date: 16th Nov 2023, Time: 10:00 AM
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold">Emily Johnson - Eye Examination</h3>
              <p className="text-sm text-gray-400">
                Date: 16th Nov 2023, Time: 1:00 PM
              </p>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold">Michael Brown - Physiotherapy</h3>
              <p className="text-sm text-gray-400">
                Date: 18th Nov 2023, Time: 3:00 PM
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-600">
            Schedule New Appointment
          </button>
        </div>

        {/* Chatbot Assistance */}
        <div className="w-1/3 bg-gray-800 p-6 ml-8 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Chatbot Assistance</h2>
          <p className="text-gray-400 mb-4">
            Chatbot is here to help! Ask me anything about your appointments or
            health advice.
          </p>

          {/* Chatbox */}
          <div className="bg-gray-700 p-4 h-72 rounded-lg mb-4"></div>

          {/* Message Input */}
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full bg-gray-700 p-3 rounded-lg focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Appointments;