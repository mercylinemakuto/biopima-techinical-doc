"use client";
import Head from "next/head";

export default function CodeStructure() {
  return (
    <div id="codestructure" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-white font-sans">
      <Head>
        <title>BioPima | Code Structure</title>
        <meta name="description" content="BioPima project code structure documentation" />
      </Head>
      
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-5xl font-extrabold mb-12 w-max mx-auto select-none"
          style={{ color: "#9EAF1B" }}
        >
          BioPima Code Structure
        </h1>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <p className="text-black text-lg leading-relaxed mb-6">
            Welcome to the BioPima project! This section provides an overview of the codebase structure and important guidelines for getting started with development.
          </p>

          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Project Organization
          </h2>
          <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
            <li><strong>Frontend:</strong> Built with Next.js and Tailwind CSS, responsible for user interface, dashboards, and real-time data visualization.</li>
            <li><strong>Backend:</strong> Developed using Django REST Framework, handles API endpoints, data processing, and database communications.</li>
            <li><strong>IoT Firmware:</strong> ESP32 firmware programmed in C++ using Arduino IDE, managing sensor data acquisition and MQTT communication.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Frontend Structure (Next.js)
          </h2>
          <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2 mb-6">
            <li><code>/pages</code>: Contains Next.js route pages. Each file maps to a URL route.</li>
            <li><code>/components</code>: Reusable UI components styled with Tailwind CSS.</li>
            <li><code>/hooks</code>: Custom React hooks for state and side effects.</li>
            <li><code>/utils</code>: Utility functions and helpers.</li>
            <li><code>/styles</code>: Global styles and theming.</li>
            <li><code>/public</code>: Static assets like images and icons.</li>
          </ul>

          <h3
            className="text-2xl font-semibold mb-3 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Getting Started
          </h3>
          <p className="text-black text-lg leading-relaxed">
            - Run <code>npm install</code> to install dependencies.<br />
            - Start dev server: <code>npm run dev</code> at <code>http://localhost:3000</code>.<br />
            - Code uses JavaScript and React functional components.<br />
            - Styling uses Tailwind CSS with dark and light green themes.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Backend Structure (Django)
          </h2>
          <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2 mb-6">
            <li><code>/api</code>: Django REST Framework viewsets and serializers.</li>
            <li><code>/models</code>: Database models interfacing with PostgreSQL.</li>
            <li><code>/tests</code>: Unit and integration tests.</li>
            <li><code>/migrations</code>: Database schema migrations.</li>
            <li><code>/settings</code>: Configuration and environment variables.</li>
          </ul>

          <h3
            className="text-2xl font-semibold mb-3 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Getting Started
          </h3>
          <p className="text-black text-lg leading-relaxed">
            - Use Python 3.10+, install requirements with <code>pip install -r requirements.txt</code>.<br />
            - Run migrations: <code>python3 manage.py makemigrations</code>.<br />
            - Migrate: <code>python3 manage.py migrate</code>.<br />
            - Start dev server: <code>python3 manage.py runserver</code>.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            IoT Firmware Structure (ESP32)
          </h2>
          <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
            <li><code>/src</code>: ESP32 source code in C++.</li>
            <li><code>/lib</code>: External libraries for MQTT, sensors.</li>
            <li><code>/config</code>: WiFi, MQTT, and sensor configs.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}