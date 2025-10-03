"use client";
import Head from "next/head";

export default function QAProcess() {
  return (
    <div id="qaprocess" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-white font-sans">
      <Head>
        <title>BioPima | Q/A Process</title>
        <meta name="description" content="BioPima Quality Assurance and Testing Process" />
      </Head>
      
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-5xl font-extrabold mb-12 w-max mx-auto select-none"
          style={{ color: "#9EAF1B" }}
        >
          BioPima Q/A Process
        </h1>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Testing
          </h2>
          <p className="text-black text-lg leading-relaxed mb-4">
            Testing ensures all parts of BioPima work as expected before deployment. It includes unit, integration, and end-to-end tests.
          </p>
          <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
            <li><strong>Unit Testing:</strong> Tests isolated functions or classes in backend and frontend.</li>
            <li><strong>Integration Testing:</strong> Verifies component interactions, such as frontend-backend API communication.</li>
            <li><strong>End-to-End Testing:</strong> Simulates user workflows from sensor input to dashboard alerts.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Quality Assurance Practices
          </h2>
          <p className="text-black text-lg leading-relaxed mb-4">
            To maintain quality and reliability, BioPima follows:
          </p>
          <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
            <li>Code reviews to enforce standards and catch issues early.</li>
            <li>Automated tests integrated with CI pipelines on commits.</li>
            <li>Linters and formatting tools for clean code.</li>
            <li>Comprehensive coverage to prevent regressions.</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Bug Reporting and Tracking
          </h2>
          <p className="text-black text-lg leading-relaxed">
            Bugs found in testing or production are logged in GitHub Issues, including reproduction steps, severity, and assignees for timely resolution.
          </p>
        </section>
      </div>
    </div>
  );
}