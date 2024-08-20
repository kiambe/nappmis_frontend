import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  BriefcaseIcon,
  MapIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <section className="bg-gray-200 pb-2">
      <div className="bg-green-700 pt-12 pb-24 px-4 sm:px-6 lg:px-8 ">
        {/* Title and Description */}
        <div className="text-center mb-12 max-w-screen-xl mx-auto py-8">
          <h1 className="text-5xl font-bold text-yellow-200 mb-2">NAPPMIS</h1>
          <h2 className="text-xl  text-white">
            NATIONAL AGRICULTURAL PROJECTS & PROGRAMMES MANAGEMENT INFORMATION
            SYSTEM
          </h2>
          <p className="mt-4 text-white">
            The NAPPMIS is a comprehensive platform designed to provide insights
            and manage information related to agricultural projects and
            programs. It aims to streamline data access, enhance
            decision-making, and improve the efficiency of agricultural
            management.
          </p>
        </div>

        {/* Large Search Bar */}
        <div className="max-w-xl mx-auto mb-12 relative pb-14">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for projects, programmes, and more..."
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <div className="h-6 w-px bg-gray-300"></div> {/* Separator */}
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="bg-white px-8 mb-8 rounded-2xl max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mt-36 relative z-10 shadow-xl">
        <div className="p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-100">
          <BriefcaseIcon className="h-12 w-12 mx-auto text-green-700" />
          <div className="mt-4 text-3xl font-bold text-gray-500">200</div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            Projects & Programmes
          </h3>
          <p className="mt-2 text-gray-600">
            Manage and track agricultural projects and programmes efficiently.
          </p>
        </div>
        <div className="relative p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-100">
          <div className="absolute inset-y-1/2 transform -translate-y-1/2 left-0 -translate-x-1/2 h-1/2 border-l border-gray-200"></div>
          <MapIcon className="h-12 w-12 mx-auto text-green-700" />
          <div className="mt-4 text-3xl font-bold text-gray-500">47</div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Counties</h3>
          <p className="mt-2 text-gray-600">
            Detailed information and management for each county.
          </p>
        </div>
        <div className="relative p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-100">
          <div className="absolute inset-y-1/2 transform -translate-y-1/2 left-0 -translate-x-1/2 h-1/2 border-l border-gray-200"></div>
          <UserGroupIcon className="h-12 w-12 mx-auto text-green-700" />
          <div className="mt-4 text-3xl font-bold text-gray-500">24</div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            Development Partners
          </h3>
          <p className="mt-2 text-gray-600">
            Insights into development partners involved in agricultural
            projects.
          </p>
        </div>
        <div className="relative p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-100">
          <div className="absolute inset-y-1/2 transform -translate-y-1/2 left-0 -translate-x-1/2 h-1/2 border-l border-gray-200"></div>
          <CurrencyDollarIcon className="h-12 w-12 mx-auto text-green-700" />
          <div className="mt-4 text-3xl font-bold text-gray-500">20M</div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            Total Expenditure by June 2024
          </h3>
          <p className="mt-2 text-gray-600">
            Overview of total expenditure projections up to June 2024.
          </p>
        </div>
      </div>
    </section>
  );
}
