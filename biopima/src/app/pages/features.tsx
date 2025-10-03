"use client";
import React from "react";

const BioPimaFeatures: React.FC = () => {
  return (
    <div id="features" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-5xl font-extrabold mb-12 w-max mx-auto select-none"
          style={{ color: "#9EAF1B" }}
        >
          BioPima Features
        </h1>

        {[
          {
            title: "Real-Time Monitoring",
            description:
              "Continuous real-time tracking of gas pressure, temperature, and methane leakage inside biogas digesters allows prompt response to any abnormal conditions.",
          },
          {
            title: "Gas Consumption Analytics",
            description:
              "Detailed breakdown of gas usage by activities such as cooking, heating, and powering generators. Enables optimization of consumption and accurate billing or cost sharing.",
          },
          {
            title: "Safety Alerts and Notifications",
            descriptionList: [
              "Instant alerts on unsafe pressure or temperature levels to prevent digester malfunction or microbial death.",
              "Early methane leakage notifications for environmental safety and energy conservation.",
              "Automated maintenance and operational reminders via dashboard notifications.",
            ],
          },
          {
            title: "User-Friendly Web Dashboard",
            description:
              "Secure desktop access providing real-time and historical visualizations of sensor data, system configuration, and customizable alerts.",
          },
          {
            title: "Device Configuration and Management",
            description:
              "Secure personalized device setup for biogas consultants and operators with support for multiple digester types and sizes.",
          },
          {
            title: "Data Security and Role-Based Access",
            description:
              "Robust user authentication with configurable role-based permissions ensuring privacy and data integrity.",
          },
          {
            title: "Scalability and Reliability",
            description:
              "Built to support multi-site deployments with large institutions, providing high data accuracy and system uptime.",
          },
        ].map(({ title, description, descriptionList }, idx) => (
          <section
            key={idx}
            className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <h2
              className="text-3xl font-bold mb-4 border-l-4 pl-4"
              style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
            >
              {title}
            </h2>
            {description && (
              <p className="text-black text-lg leading-relaxed">{description}</p>
            )}
            {descriptionList && (
              <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
                {descriptionList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default BioPimaFeatures;