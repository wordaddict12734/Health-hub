import React from "react";
import JohnDoe from "./images/JohnDoe.jpg";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
        {/* Patient Info */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2">
            <div className="p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center">
                <img
                  src={JohnDoe}
                  alt="Patient"
                  className="w-24 h-24 rounded-full mr-4"
                />
                <div className="text-white">
                  <p className="text-lg font-semibold">John Doe</p>
                  <p>Sex: Male</p>
                  <p>Age: 45</p>
                  <p>Blood Type: O+</p>
                  <p>Last Visit: 6 months ago</p>
                  <p>Patient ID: J7D5Q3E</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Records & Physical Examination */}
        <div className="grid grid-cols-2 gap-4">
          {/* Appointment Records */}
          <div className="bg-gray-700 p-4 rounded-lg text-white">
            <h2 className="text-lg font-semibold mb-4">Appointment Records</h2>
            <ul>
              <li>Blood Test - Dr. Emily Johnson</li>
              <li>MRI Scan - Dr. Michael Lee</li>
            </ul>
          </div>

          {/* Physical Examination */}
          <div className="bg-gray-700 p-4 rounded-lg text-white">
            <h2 className="text-lg font-semibold mb-4">Physical Examination</h2>
            <p>X-ray Findings: Normal</p>
            <p>Blood Pressure: 120/80</p>
            <p>Blood Sugar: 90 mg/dL</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-4 mt-6 text-white">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm">Sleep</p>
            <p className="text-lg font-bold">8h</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm">Daily Steps</p>
            <p className="text-lg font-bold">12,201</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm">Body Weight</p>
            <p className="text-lg font-bold">70 kg</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm">Calories Burned</p>
            <p className="text-lg font-bold">2,050</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;