import React from "react";

const ProjectsList = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-screen-xl mx-auto py-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">
            Recently Approved Projects
          </h2>
          <table className="min-w-full bg-white border-b border-gray-300">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 text-left">Project Title</th>
                <th className="py-2 text-left">Country</th>
                <th className="py-2 text-left">Approval Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 border-b">
                  Bhutan Green Transport Project
                </td>
                <td className="py-2 border-b">Bhutan</td>
                <td className="py-2 border-b">December 31, 2026</td>
              </tr>
              <tr>
                <td className="py-2 border-b">
                  Horn of Africa Regional Integration for Sustainable Energy
                  Supply
                </td>
                <td className="py-2 border-b">Eastern and Southern Africa</td>
                <td className="py-2 border-b">July 30, 2026</td>
              </tr>
              <tr>
                <td className="py-2 border-b">
                  Viet Nam Renewable Energy Accelerating Change
                </td>
                <td className="py-2 border-b">Viet Nam</td>
                <td className="py-2 border-b">June 19, 2026</td>
              </tr>
              <tr>
                <td className="py-2 border-b">
                  Mali Digital Transformation Project
                </td>
                <td className="py-2 border-b">Mali</td>
                <td className="py-2 border-b">May 26, 2026</td>
              </tr>
              <tr>
                <td className="py-2 border-b">
                  Transmission Grid Enhancement & Modernization Project
                </td>
                <td className="py-2 border-b">Bangladesh</td>
                <td className="py-2 border-b">May 11, 2026</td>
              </tr>
              <tr>
                <td className="py-2 border-b">
                  Bangladesh Local Governance for Resilience Program
                </td>
                <td className="py-2 border-b">Bangladesh</td>
                <td className="py-2 border-b">May 7, 2026</td>
              </tr>
            </tbody>
          </table>
          {/* Button for full project list */}
          <div className="mt-6 flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
              Full Project List
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsList;
