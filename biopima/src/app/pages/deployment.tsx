"use client";
import Head from "next/head";

export default function DeploymentProcess() {
  return (
    <div id="deployment" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-white font-sans">
      <Head>
        <title>BioPima | Deployment Process</title>
        <meta name="description" content="BioPima Deployment Process Documentation" />
      </Head>
      
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-5xl font-extrabold mb-12 w-max mx-auto select-none"
          style={{ color: "#9EAF1B" }}
        >
          BioPima Deployment Process
        </h1>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Frontend Deployment
          </h2>
          <div className="text-black text-lg leading-relaxed space-y-3">
            <p><strong>Tool:</strong> Vercel</p>
            <p>
              <strong>Pre-deployment:</strong> Build Next.js apps using{" "}
              <code>npm run build</code>. Configure environment variables in Vercel dashboard.
            </p>
            <p>
              <strong>Deployment:</strong> Auto-deploy on GitHub main branch merges. Enable HTTPS and custom domains.
            </p>
            <p>
              <strong>Post-deployment:</strong> Verify responsiveness and live data connections.
            </p>
          </div>
        </section>

        
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Backend Deployment
          </h2>
          <div className="text-black text-lg leading-relaxed space-y-3">
            <p><strong>Tool:</strong> Heroku</p>
            <p>
              <strong>Pre-deployment:</strong> Provision PostgreSQL, install dependencies, set environment variables (DB URL, secrets), configure Django settings.
            </p>
            <p>
              <strong>Deployment:</strong> Run <code>python manage.py migrate</code>. Use Gunicorn server managed by Heroku with SSL enabled.
            </p>
            <p>
              <strong>Post-deployment:</strong> Monitor logs, performance, and apply security updates.
            </p>
          </div>
        </section>

        
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            IoT Firmware Deployment
          </h2>
          <div className="text-black text-lg leading-relaxed space-y-3">
            <p><strong>Tool:</strong> Arduino IDE</p>
            <p>Upload firmware to ESP32, configure WiFi & MQTT settings per site.</p>
            <p>Test data flow to HiveMQ. Ensure power and sensor calibration.</p>
          </div>
        </section>

       
        <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <h2
            className="text-3xl font-bold mb-4 border-l-4 pl-4"
            style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}
          >
            Monitoring & Maintenance
          </h2>
          <div className="text-black text-lg leading-relaxed">
            <p>
              Continuously monitor system health and data accuracy. Use alerts and logging to catch and fix issues early.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}