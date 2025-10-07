"use client";
import Head from "next/head";
import Image from 'next/image'


export default function Backend() {
    return (
        <div
            id="backend"
            className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-white font-sans"
        >
            <Head>
                <title>BioPima | Backend Overview</title>
                <meta
                    name="description"
                    content="BioPima backend structure, naming standards, tech stack, testing and deployment"
                />
            </Head>

            <div className="max-w-7xl mx-auto">
                <h1
                    className="text-5xl font-extrabold mb-12 w-max mx-auto select-none"
                    style={{ color: "#9EAF1B" }}
                >
                    BioPima Backend
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
                        The backend of BioPima is built on Django and the Django REST Framework to provide scalable and secure APIs that handle data processing, database management, and integrations. It plays a critical role in aggregating sensor data, managing users and clients, and supporting the frontend with reliable service endpoints.
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
                        - Use Python 3.10+, install requirements with <code>pip install -r requirements.txt</code>.<br />
                        - Run migrations: <code>python3 manage.py makemigrations</code>.<br />
                        - Migrate: <code>python3 manage.py migrate</code>.<br />
                        - Start dev server: <code>python3 manage.py runserver</code>.
                    </p>
                </section>

                <section
                    className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
                    <h2
                        className="text-3xl font-bold mb-4 border-l-4 pl-4"
                        style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
                    >
                        Code Structure
                    </h2>
                    <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2 mb-6">
                        <li><code>/api</code>: Django REST Framework viewsets and serializers for API endpoints.</li>
                        <li><code>/models</code>: Database models interfacing with PostgreSQL.</li>
                        <li><code>/tests</code>: Unit and integration tests.</li>
                        <li><code>/migrations</code>: Database schema migrations.</li>
                        <li><code>/settings</code>: Configuration and environment variables.</li>
                    </ul>
                </section>


                <section
                    className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
                    <h2
                        className="text-3xl font-bold mb-4 border-l-4 pl-4"
                        style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
                    >
                        Backend Naming Standards
                    </h2>
                    <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
                        <li>
                            <strong>Model Naming:</strong> Use singular CamelCase for Django models (e.g., <code>UserProfile</code>).
                        </li>
                        <li>
                            <strong>Viewsets & Serializers:</strong> Name classes in CamelCase with suffixes (e.g., <code>UserProfileSerializer</code>, <code>UserProfileViewSet</code>).
                        </li>
                        <li>
                            <strong>Function & Method Naming:</strong> Use snake_case for function and method names (e.g., <code>get_user_profile()</code>).
                        </li>
                        <li>
                            <strong>Database Tables:</strong> Follow Django default naming conventions or specify table names explicitly with <code>db_table</code> in models.
                        </li>
                        <li>
                            <strong>Configuration:</strong> Store secrets and environment-specific settings securely in <code>.env</code> files, not in code.
                        </li>
                        <li>
                            <strong>Testing:</strong> Name test files starting with <code>test_</code> and organize unit and integration tests logically.
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
                        Technology Stack
                    </h2>
                    <ul className="list-disc list-inside text-black text-lg leading-relaxed space-y-2">
                        <li>Language: Python 3.10+</li>
                        <li>Framework: Django REST Framework</li>
                        <li>Database: PostgreSQL</li>
                    
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
                        Backend tests include unit and integration tests using Django’s built-in testing framework. Tests cover models, API endpoints, serializers, and business logic to ensure reliability and maintain system integrity.
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
                    <p><strong>Tool:</strong> Heroku</p>
                    <p className="text-black text-lg leading-relaxed mb-2">
                        <strong>Pre-deployment:</strong> Provision PostgreSQL add-on, install dependencies, and configure environment variables including database URLs and secret keys.
                    </p>
                    <p className="text-black text-lg leading-relaxed mb-2">
                        <strong>Deployment:</strong> Deploy backend with migrations using <code>python manage.py migrate</code> and run via Gunicorn under Heroku with SSL enabled.
                    </p>
                    <p className="text-black text-lg leading-relaxed">
                        <strong>Post-deployment:</strong> Monitor application logs, performance metrics, and apply security patches and dependency updates regularly.
                    </p>
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

                <section className="max-w-7xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl shadow-lg p-6 mt-[-5]">
                        <div className="relative w-full h-[700px] md:h-[900px] overflow-auto">
                            <Image
                                src="/images/ERD.png"
                                alt="BioPima Entity Relationship Diagram (ERD)"
                                fill
                                style={{ objectFit: 'contain' }}
                                className="rounded-lg"
                                unoptimized
                                priority={false}
                            />
                        </div>
                        <p className="mt-4 text-lg text-black text-center">
                            BioPima Entity Relationship Diagram (ERD): Illustrates the database schema showing the relationships between entities such as users, clients, sensor readings, and system alerts. This diagram helps in understanding data flow and storage structure within the backend.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
