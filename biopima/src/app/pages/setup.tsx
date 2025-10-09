"use client";
import Image from 'next/image';

const components = [
  {
    name: 'ESP32',
    description: `The ESP32 is a low-power, Wi-Fi and Bluetooth-enabled microcontroller that serves as the central brain of the BioPima system. It continuously reads data from all connected sensors, processes the signals, evaluates them against safety thresholds (pressure: 8–15 kPa, temperature: 35–37°C, methane: ≤2 ppm), and transmits real-time updates to the cloud via MQTT. Its integrated wireless capabilities enable seamless communication with HiveMQ and the user dashboard.`,
    imageAlt: 'ESP32 Microcontroller Unit',
    imageSrc: 'https://i.pinimg.com/736x/d1/66/1b/d1661bdecf277684181694a4fedbf9bf.jpg',
  },
  {
    name: 'NXP Differential Pressure Sensor',
    description: `This high-precision pressure sensor monitors the internal gas pressure of the biodigester in real time. It measures pressure within a range used to determine system status: below 8 kPa, between 8 kPa and 15 kPa, or above 15 kPa. Additionally, by measuring pressure differentials across the gas line, it enables accurate calculation of biogas flow rate and consumption patterns.`,
    imageAlt: 'NXP MPX5700AP Differential Pressure Sensor',
    imageSrc: 'https://i.pinimg.com/736x/b5/1a/18/b51a189aa9240e22405bb98181592d24.jpg',
  },
  {
    name: 'K-Type Thermocouple',
    description: `The K-Type thermocouple provides accurate and robust temperature measurements inside the biodigester reactor. It ensures the system operates within the defined range of 35°C to 37°C. Real-time temperature data is used to classify conditions as below 35°C, within 35–37°C, or above 37°C for system monitoring.`,
    imageAlt: 'K-Type Thermocouple Temperature Sensor',
    imageSrc: 'https://i.pinimg.com/1200x/7f/9b/4f/7f9b4fcdd53bf1107230a7bf87a55d0e.jpg',
  },
  {
    name: 'MQ4 Methane Sensor',
    description: `The MQ4 gas sensor is specifically calibrated to detect methane (CH₄) — the primary component of biogas. It continuously monitors ambient methane concentration and triggers an alert when levels exceed 2 ppm. Readings at or below 2 ppm indicate normal operation.`,
    imageAlt: 'MQ4 Methane Gas Leak Detector',
    imageSrc: 'https://i.pinimg.com/1200x/8c/a5/88/8ca5883dfad76ba0c6714ecc97876198.jpg',
  },
];

const setupSteps = [
  {
    title: "Set-Up and Installation",
    text: `BioPima is installed one meter away from the biodigester. The system integrates a pressure sensor (MPX5010AP) to monitor internal gas pressure, a K-Type thermocouple to track digester temperature, and an MQ4 methane sensor to detect potential gas leaks.`
  },
  {
    title: "Data Collection",
    text: `The sensors continuously monitor gas pressure, methane concentration, and temperature. This data is logged in real time and transmitted to the ESP32 microcontroller for processing.`
  },
  {
    title: "Data Processing",
    text: `The ESP32 converts analog sensor signals into digital data, evaluates them against predefined safety thresholds (pressure: 8–15 kPa, temperature: 35–37°C, methane: 2 ppm), and triggers real-time alerts that are immediately displayed on the user’s BioPima dashboard.`
  },
  {
    title: "Pressure Monitoring",
    text: `The normal operating pressure range for the biodigester is 8 kPa to 15 kPa.\n\n- If pressure drops below 8 kPa, an alert is triggered and displayed on the BioPima dashboard: "Low Pressure".\n- If pressure exceeds 15 kPa, the dashboard shows: "High Pressure".\n- Pressure within 8–15 kPa results in a "Normal Pressure" status on the dashboard.`
  },
  {
    title: "Gas Leakage Detection ",
    text: `When methane concentration exceeds 2 ppm, the system triggers an alert that appears on the BioPima dashboard: "Methane Leak Detected". When methane levels remain at or below 2 ppm, the dashboard displays "No Leak Detected".`
  },
  {
    title: "Temperature Monitoring",
    text: `The optimal temperature range for efficient biogas production is 35°C to 37°C.\n\n- If temperature falls below 35°C, the BioPima dashboard displays: "Temperature Too Low".\n- If temperature rises above 37°C, the dashboard shows: "Temperature Too High".\n- Temperatures within 35–37°C result in an "Optimal Temperature" status on the dashboard.`
  },
  {
    title: "HiveMQ and Real-Time Dashboard Integration",
    text: `The ESP32 connects to Wi-Fi and publishes all sensor data—including live readings and alert statuses—to HiveMQ using the MQTT protocol. HiveMQ acts as a message broker and instantly delivers updates to the frontend. As a result, the BioPima dashboard reflects real-time conditions and displays alerts the moment thresholds are breached, ensuring users are always informed of critical system states.`
  },
];

export default function Home() {
  return (
    <main id="iot-setup" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-white font-sans">
      <header className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-12 w-max mx-auto select-none" style={{ color: "#9EAF1B" }}>
          Components And Setup
        </h1>
        <p className="text-lg text-black max-w-3xl mx-auto mt-2">
          An overview of the device setup and components used in our IoT biogas monitoring system.
        </p>
      </header>

      <section className="max-w-7xl mx-auto mb-16 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <h2 className="text-4xl font-semibold mb-8 border-l-4 pl-4" style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}>
          System Architecture
        </h2>
        <div className="relative w-full h-[600px] md:h-[800px] overflow-auto rounded-lg">
          <a href="https://lucid.app/lucidchart/c523777b-444f-4f29-bb57-40349f2e7af6/edit?page=0_0#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/biopima.svg"
              alt="Biopima System Architecture Diagram"
              layout="fill"
              objectFit="contain"
              priority={false}
              unoptimized
            />
          </a>
        </div>
        <p className="mt-4 text-black leading-relaxed text-center">
          The BioPima system follows a real-time IoT data pipeline: The ESP32 microcontroller continuously reads raw data from the pressure, temperature, and methane sensors. This data is processed locally and then transmitted over Wi-Fi to HiveMQ—a scalable MQTT message broker—using the lightweight MQTT protocol. HiveMQ receives the messages and immediately publishes them to subscribed clients, including the frontend web dashboard. As soon as new sensor data(temperature, pressure and methane readings) arrive, the dashboard updates in real time, displaying live metrics and triggering visual alerts when thresholds are breached. Simultaneously, the frontend forwards the data to the backend server, where it is persisted in a database for historical analysis, reporting, and long-term monitoring. This end-to-end architecture ensures low-latency visibility, reliable alerting, and robust data storage.
        </p>
      </section>

      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-semibold mb-12 border-l-4 pl-4" style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}>
          Components
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {components.map(({ name, description, imageAlt, imageSrc }) => {
            const isNXP = name === 'NXP Differential Pressure Sensor';
            return (
              <article
                key={name}
                className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className="relative rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-8"
                  style={isNXP ? { width: '360px', height: '240px' } : { width: '320px', height: '320px' }}
                >
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      layout="fill"
                      objectFit="contain"
                      placeholder="blur"
                      blurDataURL="/images/placeholder.png"
                      priority={false}
                      unoptimized={true}
                      className="rounded-lg"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-extrabold text-[#9EAF1B] mb-3">{name}</h3>
                  <p className="text-black leading-relaxed whitespace-pre-line">{description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 border-l-4 pl-4" style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}>
          Setup and Installation
        </h2>
        <div className="space-y-8">
          {setupSteps.map(({ title, text }) => (
            <div key={title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-400">
              <h3 className="text-2xl font-semibold text-[#9EAF1B] mb-4">{title}</h3>
              <p className="text-black leading-relaxed whitespace-pre-wrap">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
