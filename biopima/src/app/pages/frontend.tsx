"use client";
import Head from "next/head";

export default function Frontend() {
    return (
        <div
            id="frontend"
            className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-white font-sans"
        >
            <Head>
                <title>BioPima | Frontend Overview</title>
                <meta
                    name="description"
                    content="BioPima frontend structure, naming standards, tech stack, testing and deployment"
                />
            </Head>

            <div className="max-w-7xl mx-auto">
                <h1
                    className="text-5xl font-extrabold mb-12 w-max mx-auto select-none"
                    style={{ color: "#9EAF1B" }}
                >
                    BioPima Frontend
                </h1>

                <section
                    className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
                    <h2
                        className="text-3xl font-bold mb-4 border-l-4 pl-4"
                        style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
                    >
                        Overview
                    </h2>
                    <p className="text-black text-lg leading-relaxed">
                        The BioPima frontend delivers an interactive and dynamic interface enabling users to monitor biogas data in real-time. It combines responsive design with live data visualization on dashboards, empowering users to easily interpret operational metrics and alerts through a clean and intuitive user experience.
                    </p>
                </section>

                <section
                    className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
                    <h2
                        className="text-3xl font-bold mb-4 border-l-4 pl-4"
                        style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
                    >
                        Getting Started
                    </h2>
                    <p className="text-black text-lg leading-relaxed">
                        - Run <code>npm install</code> to install dependencies.<br />
                        - Start dev server: <code>npm run dev</code> at <code>http://localhost:3000</code>.<br />
                        - Code uses JavaScript and React functional components.<br />
                        - Styling uses Tailwind CSS with dark and light green themes.
                    </p>
                </section>

                <section
                    className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
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
                </section>

                <section
                    className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
                    <h2
                        className="text-3xl font-bold mb-4 border-l-4 pl-4"
                        style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
                    >
                        Frontend Naming Standards
                    </h2>
                    <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
                        <li><strong>Component Naming:</strong> Use CamelCase for React component files and function names (e.g., <code>MyButton.jsx</code>, <code>function UserCard()</code>).</li>
                        <li><strong>CSS/Tailwind:</strong> Style components using Tailwind utility classes, avoid inline styles and prefer semantic class names in global styles.</li>
                        <li><strong>Function Components:</strong> Use React functional components and hooks exclusively.</li>
                        <li><strong>File Naming:</strong> Use lowercase and hyphens for utility function files (e.g., <code>format-date.js</code>).</li>
                        <li><strong>State & Props Naming:</strong> Use descriptive, camelCase names (e.g., <code>userList</code>, <code>isLoading</code>).</li>
                        <li><strong>Testing:</strong> Write unit tests with React Testing Library; name test files with <code>.test.js</code> suffix (e.g., <code>UserCard.test.js</code>).</li>
                    </ul>
                </section>

                <section
                    className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
                    <h2
                        className="text-3xl font-bold mb-4 border-l-4 pl-4"
                        style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
                    >
                        Technology Stack
                    </h2>
                    <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
                        <li>Language: TypeScript</li>
                        <li>Styling: Tailwind CSS</li>
                        <li>Frameworks: Next.js, React</li>
                        <li>Testing: Jest, React Testing Library</li>
                    </ul>
                </section>

                <section
                    className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
                    <h2
                        className="text-3xl font-bold mb-4 border-l-4 pl-4"
                        style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
                    >
                        Testing Process
                    </h2>
                    <p className="text-black text-lg leading-relaxed">
                        Automated unit and integration tests are written using Jest and React Testing Library. Tests are organized alongside code and cover interactive components, hooks, and utility functions to ensure reliability and prevent regressions.
                    </p>
                </section>

                <section
                    className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
                    <h2
                        className="text-3xl font-bold mb-4 border-l-4 pl-4"
                        style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
                    >
                        Deployment Process
                    </h2>
                    <p><strong>Tool:</strong> Vercel</p>
                    <p className="text-black text-lg leading-relaxed mb-2">
                        <strong>Pre-deployment:</strong> Build Next.js apps using <code>npm run build</code>. Configure environment variables in Vercel dashboard.
                    </p>
                    <p className="text-black text-lg leading-relaxed mb-2">
                        <strong>Deployment:</strong> Auto-deploy on GitHub main branch merges. Enable HTTPS and custom domains.
                    </p>
                    <p className="text-black text-lg leading-relaxed">
                        <strong>Post-deployment:</strong> Verify responsiveness and live data connections.
                    </p>
                </section>
            </div>
        </div>
    );
}
