import React from "react";

export default function Navbar() {
  return (
    <section className="bg-green-600 text-white">
      <div className="max-w-screen-xl mx-auto py-6">
        {/* Full width wrapper */}
        <div className="w-full flex justify-between items-center text-sm bg-green-700 text-gray-200 px-4 py-2">
          <nav>
            <a href="#" className="hover:underline">
              What We Do
            </a>
            {" / "}
            <a href="#" className="hover:underline">
              Projects & Operations
            </a>
          </nav>
          <div className="hidden sm:block">
            <p className="text-right">
              This page in:{" "}
              <a href="#" className="hover:underline">
                English
              </a>
              {" | "}
              <a href="#" className="hover:underline">
                Kiswahili
              </a>{" "}
              <span className="inline-block relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </span>
            </p>
          </div>
        </div>

        {/* Project Title and Tabs */}
        <div className="mt-4">
          <h1 className="text-3xl font-semibold">Projects</h1>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-yellow-400 text-slate-600 font-semibold rounded">
              SUMMARY
            </button>
            <button className="px-4 py-2 text-white hover:bg-yellow-700 rounded">
              PROJECT LIST
            </button>
            <button className="px-4 py-2 text-white hover:bg-blue-700 rounded">
              DOCUMENT LIST
            </button>
            <button className="px-4 py-2 text-white hover:bg-blue-700 rounded">
              ARCHIVAL RECORDS
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              className="pl-4 pr-10 py-2 rounded focus:outline-none"
              placeholder="Search.."
            />
            <button className="absolute right-0 top-0 h-full px-3 text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-4a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
