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

        <section
          className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Real-Time Monitoring
          </h2>
          <p className="text-black text-lg leading-relaxed">
            BioPima continuously tracks vital parameters including gas pressure,
            temperature, and methane leakage inside institutional biogas digesters
            via IoT sensors. This near-instantaneous data streaming enables
            operators to promptly detect and respond to abnormal system behaviors
            – preventing potential safety hazards such as overpressure or digester
            microbial imbalance. Real-time monitoring assures efficient digester
            operation and optimal biogas production, supporting sustainable energy
            use and safety compliance.
          </p>
        </section>

        <section
          className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Gas Consumption Analytics
          </h2>
          <p className="text-black text-lg leading-relaxed">
            The platform provides granular analytics on biogas consumption broken
            down by specific uses such as cooking, heating, baking, and powering
            generators. This detailed usage data supports responsible resource
            management by allowing users to identify consumption patterns,
            optimize gas allocation, and forecast demand accurately. It also
            facilitates transparent cost-sharing or billing in institutional
            setups by providing verifiable consumption reports that help avoid
            disputes and encourage efficient use of biogas.
          </p>
        </section>

        <section
          className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Safety Alerts and Notifications
          </h2>
          <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
            <li>
              Instant notifications are triggered whenever gas pressure or
              temperature deviates beyond predefined safe thresholds, enabling
              operators to take corrective action quickly to prevent equipment
              damage or microbial death within digesters.
            </li>
            <li>
              Early warning alerts on methane leakage reduce environmental risks
              and energy loss by ensuring rapid identification and sealing of
              leaks, enhancing both safety and sustainability.
            </li>
            <li>
              Automated operational reminders for maintenance tasks such as sensor
              calibration, valve inspection, and routine system checks help
              maximize device longevity, reduce downtime, and maintain consistent
              biogas quality.
            </li>
          </ul>
        </section>

        <section
          className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            User-Friendly Web Dashboard
          </h2>
          <p className="text-black text-lg leading-relaxed">
            BioPima&apos;s centralized web dashboard offers secure access from desktops
            and tablets, delivering intuitive real-time and historical
            visualizations of sensor data. The dashboard features customizable
            graphs, gauges, and tables that allow users to easily track digester
            status, review past performance trends, and configure alert
            thresholds. Its responsive UI design ensures easy navigation for both
            novice and expert users, empowering informed decision-making and
            proactive management of biogas digesters.
          </p>
        </section>

        <section
          className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Device Configuration and Management
          </h2>
          <p className="text-black text-lg leading-relaxed">
            The BioPima system is delivered fully assembled and pre-configured,
            with sensors and threshold parameters calibrated by the development
            team to ensure optimal accuracy and reliability out of the box. Biogas
            operators and consultants are provided with a secure interface to
            manage device assignments and monitor installation status without
            needing to configure sensors or set alert thresholds themselves. This
            design minimizes setup complexity and technical barriers, allowing
            users to focus on operational monitoring and response. The platform
            supports management of multiple digester installations across sites,
            providing a streamlined view of system health and enabling efficient
            oversight without requiring deep technical intervention.
          </p>
        </section>

        <section
          className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Data Security and Role-Based Access
          </h2>
          <p className="text-black text-lg leading-relaxed">
            BioPima employs robust user authentication protocols combined with
            granular role-based access controls to safeguard both data and
            system operations. This ensures that sensitive information such as
            consumption metrics and device configurations are accessible only to
            authorized personnel. Administrators can assign and manage roles such
            as operators, consultants, or auditors each with distinct permissions,
            promoting data integrity, accountability, and privacy within
            institutional environments.
          </p>
        </section>

        <section
          className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Scalability and Reliability
          </h2>
          <p className="text-black text-lg leading-relaxed">
            Engineered for scalability, BioPima supports deployments across
            multiple sites within large institutions or networks. Built with
            fault-tolerant infrastructure and optimized data processing, the
            system provides high uptime and ensures accuracy even under heavy data
            loads. This reliability empowers stakeholders to confidently expand
            monitoring operations without compromising performance or data
            quality, contributing to broad-scale sustainability and operational
            excellence.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BioPimaFeatures;
