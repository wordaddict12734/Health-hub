import React from "react";

const Reports = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Search and Sort Section */}
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search reports..."
          className="bg-gray-800 p-2 rounded text-white w-1/3"
        />
        <div className="flex items-center space-x-4">
          <select className="bg-gray-800 p-2 rounded text-white">
            <option>Date</option>
            <option>Name</option>
          </select>
          <input
            type="range"
            className="bg-gray-800 w-1/3 rounded-lg"
            min="0"
            max="100"
          />
        </div>
      </div>

      {/* Reports Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Blood Test Report</h2>
          <p className="text-gray-400">Comprehensive blood analysis results.</p>
          <p className="text-sm mt-2">Date: 2023-10-12</p>
          <div className="mt-4 space-x-4">
            <button className="bg-gray-700 py-2 px-4 rounded-lg">Print</button>
            <button className="bg-blue-500 py-2 px-4 rounded-lg">
              Download
            </button>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">MRI Scan Results</h2>
          <p className="text-gray-400">
            Detailed MRI scan images and findings.
          </p>
          <p className="text-sm mt-2">Date: 2023-09-25</p>
          <div className="mt-4 space-x-4">
            <button className="bg-gray-700 py-2 px-4 rounded-lg">Print</button>
            <button className="bg-blue-500 py-2 px-4 rounded-lg">
              Download
            </button>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Annual Health Checkup</h2>
          <p className="text-gray-400">Summary of annual health examination.</p>
          <p className="text-sm mt-2">Date: 2023-03-30</p>
          <div className="mt-4 space-x-4">
            <button className="bg-gray-700 py-2 px-4 rounded-lg">Print</button>
            <button className="bg-blue-500 py-2 px-4 rounded-lg">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;