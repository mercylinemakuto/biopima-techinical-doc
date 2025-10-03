"use client";
import React from "react";

const BioPimaDeveloperDocs: React.FC = () => {
  return (
    <div id="howitworks" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-5xl font-extrabold mb-12 w-max mx-auto select-none"
          style={{ color: "#9EAF1B" }}
        >
          BioPima Developer Docs
        </h1>

        <main className="space-y-12">
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2
              className="text-3xl font-bold mb-4 border-l-4 pl-4"
              style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
            >
              Overview
            </h2>
            <p className="text-black text-lg leading-relaxed max-w-prose">
              Comprehensive documentation for developers building, testing, and deploying the BioPima IoT biogas monitoring system. Explore architecture, workflows, and best practices specific to BioPima.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2
              className="text-3xl font-bold mb-4 border-l-4 pl-4"
              style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
            >
              System Architecture
            </h2>
            <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2 max-w-prose">
              <li>
                <strong>Embedded Systems:</strong> Microcontroller units programmed with Arduino IDE interfacing with pressure, temperature, and methane sensors.
              </li>
              <li>
                <strong>Data Communication:</strong> Real-time data transmission protocols ensuring timely monitoring.
              </li>
              <li>
                <strong>Backend API:</strong> Django REST framework for data management and analysis.
              </li>
              <li>
                <strong>Frontend UI:</strong> React/Next.js based dashboards for visualization.
              </li>
              <li>
                <strong>Deployment:</strong> Backend hosted on Heroku, frontend on Vercel.
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2
              className="text-3xl font-bold mb-4 border-l-4 pl-4"
              style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
            >
              Environment & Secrets
            </h2>
            <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2 max-w-prose">
              <li>
                Store all sensitive configuration values in <code>.env</code> files, excluded from source control.
              </li>
              <li>
                Use environment variables to manage different deployment environments (development, staging, production).
              </li>
              <li>Frontend environment access through <code>process.env.VAR_NAME</code>.</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2
              className="text-3xl font-bold mb-4 border-l-4 pl-4"
              style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
            >
              Automated Testing & API Documentation
            </h2>
            <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2 max-w-prose mb-6">
              <li>Backend unit tests for Django models, serializers, and views using pytest and unittest.</li>
              <li>Frontend tests with Jest and React Testing Library.</li>
              <li>Integration tests covering critical user flows such as authentication and data submission.</li>
              <li>Postman and Swagger available for API testing and reference.</li>
              <li>
                Backend endpoints{" "}
                <a
                  href="https://biopima-cfbfed4a262a.herokuapp.com/api"
                  className="text-[#9EAF1B] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  End points
                </a>.
              </li>
            </ul>
            <a
              href="https://biopima-cfbfed4a262a.herokuapp.com/api/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9EAF1B] text-white py-2 px-5 rounded-lg hover:bg-green-700 transition"
            >
              View API Docs
            </a>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2
              className="text-3xl font-bold mb-4 border-l-4 pl-4"
              style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
            >
              Branching, PR Workflow & Coding Standards
            </h2>
            <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2 max-w-prose">
              <li>Branch naming convention: <code>feature/xxx</code>, <code>bugfix/xxx</code>.</li>
              <li>Mandatory PR reviews before merging into <code>main</code>.</li>
              <li>Linting and formatting with eslint, prettier, black, and mypy.</li>
              <li>Follow BioPima code style guidelines for both frontend and backend.</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2
              className="text-3xl font-bold mb-4 border-l-4 pl-4"
              style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
            >
              Local Setup & Deployment
            </h2>
            <ol className="list-decimal list-inside text-black text-lg leading-relaxed space-y-4 max-w-prose">
              <li>Clone the BioPima repository and create a <code>.env</code> file with required secrets.</li>
              <li>Install dependencies and apply database migrations.</li>
              <li>Run backend and frontend development servers locally.</li>
              <li>Run tests and lint the code to maintain quality standards.</li>
              <li>Deploy frontend on Vercel and backend on Heroku.</li>
              <li>Regularly monitor logs using Heroku and Vercel dashboards.</li>
            </ol>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BioPimaDeveloperDocs;