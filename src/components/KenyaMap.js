"use client";
import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

const KenyaMap = () => {
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [topoJsonData, setTopoJsonData] = useState(null);

  useEffect(() => {
    fetch("/County.topojson")
      .then((response) => response.json())
      .then((data) => setTopoJsonData(data))
      .catch((error) => console.error("Error loading TopoJSON data:", error));
  }, []);

  const handleCountyClick = (county) => {
    setSelectedCounty(county);
  };

  // Sample data for projects in the selected county
  const projects = [
    {
      title: "National Agricultural Value Chain Development Project (NAVCDP)",
      startDate: "01/01/2021",
      endDate: "12/31/2023",
      status: "Ongoing",
      valueChains: "Maize, Beans, Sorghum",
    },
    {
      title: "Emergency Locust Response Program (ELRP)",
      startDate: "03/01/2020",
      endDate: "02/28/2022",
      status: "Completed",
      valueChains: "Wheat, Barley",
    },
    {
      title:
        "The National Agricultural and Rural Inclusive Growth Project (NARIGP)",
      startDate: "06/01/2022",
      endDate: "05/31/2024",
      status: "Upcoming",
      valueChains: "Horticulture, Dairy",
    },
  ];

  return (
    <div className="flex flex-col items-center h-screen p-4">
      <div className="text-center mb-4 mt-8">
        <h1 className="text-3xl font-bold mb-2">
          Projects & Programmes Summary
        </h1>
        <p className="text-lg text-gray-600">Project distribution by county</p>
      </div>
      <div className="flex w-full max-w-screen-xl">
        <div className="w-2/3 h-full p-4 overflow-hidden">
          {topoJsonData ? (
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 4200,
                center: [37.913, 0.1765],
              }}
              width={800}
              height={800}
              style={{ cursor: "pointer" }}
            >
              <Geographies geography={topoJsonData}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => handleCountyClick(geo.properties.name)}
                      style={{
                        default: {
                          fill: "rgb(21 128 66)",
                          outline: "none",
                          cursor: "pointer",
                        },
                        hover: {
                          fill: "rgb(254 240 150)",
                          outline: "none",
                        },
                        pressed: {
                          fill: "rgb(254 240 98)",
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
            </ComposableMap>
          ) : (
            <p>Loading map...</p>
          )}
        </div>
        <div className="w-1/2 p-4 bg-white rounded-lg overflow-y-auto h-full">
          {!selectedCounty ? (
            <div>
              <h2 className="text-xl font-bold mb-4">
                Projects in {selectedCounty}
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg ${
                      project.status === "Completed"
                        ? "border-green-500 bg-green-50"
                        : project.status === "Ongoing"
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-gray-500 bg-gray-50"
                    }`}
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      {project.title}
                    </h3>
                    <div className="flex justify-between text-gray-700">
                      <p>Start Date: {project.startDate}</p>
                      <p>End Date: {project.endDate}</p>
                    </div>
                    <p className="text-gray-700 mt-2">
                      Value Chains: {project.valueChains}
                    </p>
                    <div className="flex items-center mt-2">
                      {project.status === "Completed" && (
                        <FaCheckCircle className="text-green-500 mr-2" />
                      )}
                      {project.status === "Ongoing" && (
                        <FaHourglassHalf className="text-yellow-500 mr-2" />
                      )}
                      {project.status === "Upcoming" && (
                        <FaTimesCircle className="text-gray-500 mr-2" />
                      )}
                      <p className="font-semibold">{project.status}</p>
                    </div>
                    <a
                      href="#"
                      className="text-blue-500 flex items-center mt-2"
                    >
                      Read More
                      <FaExternalLinkAlt className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>Select a county to see project info.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KenyaMap;
