"use client";
import Head from "next/head";

export default function CodeStandards() {
  return (
    <div id="codestandards" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-white font-sans">
      <Head>
        <title>BioPima | Code Standards</title>
        <meta name="description" content="BioPima coding and naming standards for frontend, backend and general practices" />
      </Head>
      
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-5xl font-extrabold mb-12 w-max mx-auto select-none"
          style={{ color: "#9EAF1B" }}
        >
          BioPima Code Standards
        </h1>

        
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            General Coding Standards
          </h2>
          <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
            <li>Write clear, concise, and well-documented code.</li>
            <li>Follow consistent indentation (2 spaces) and line length limits (max 80-100 characters).</li>
            <li>Use meaningful, descriptive names for variables, functions, and files.</li>
            <li>Keep functions small and single-purpose.</li>
            <li>Write unit tests alongside code changes to ensure reliability.</li>
            <li>Use version control with clear commit messages describing changes.</li>
            <li>Review code with peers before merging to maintain quality.</li>
          </ul>
        </section>

        
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Frontend Coding & Naming Standards
          </h2>
          <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
            <li><strong>Component Naming:</strong> Use PascalCase for React component files and function names (e.g., <code>MyButton.jsx</code>, <code>function UserCard()</code>).</li>
            <li><strong>CSS/Tailwind:</strong> Style components using Tailwind utility classes, avoid inline styles and prefer semantic class names in global styles.</li>
            <li><strong>Function Components:</strong> Use React functional components and hooks exclusively.</li>
            <li><strong>File Naming:</strong> Use lowercase and hyphens for utility function files (e.g., <code>format-date.js</code>).</li>
            <li><strong>State & Props Naming:</strong> Use descriptive, camelCase names (e.g., <code>userList</code>, <code>isLoading</code>).</li>
            <li><strong>Testing:</strong> Write unit tests with React Testing Library; name test files with <code>.test.js</code> suffix (e.g., <code>UserCard.test.js</code>).</li>
          </ul>
        </section>

        
        <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Backend Coding & Naming Standards
          </h2>
          <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
            <li><strong>Model Naming:</strong> Use singular PascalCase for Django models (e.g., <code>UserProfile</code>).</li>
            <li><strong>Viewsets & Serializers:</strong> Name classes in PascalCase with suffixes (e.g., <code>UserProfileSerializer</code>, <code>UserProfileViewSet</code>).</li>
            <li><strong>Function & Method Naming:</strong> Use snake_case for function and method names (e.g., <code>get_user_profile()</code>).</li>
            <li><strong>Database Tables:</strong> Follow Django default naming or specify with <code>db_table</code> in models if required.</li>
            <li><strong>Configuration:</strong> Store secrets and environment-specific values in <code>.env</code> files, never in code.</li>
            <li><strong>Testing:</strong> Use Django test framework for unit and integration tests; name test files starting with <code>test_</code>.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}