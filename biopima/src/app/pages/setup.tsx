"use client"
import Image from 'next/image'

const components = [
  {
    name: 'ESP32',
    description: `MCU – Acts as the central controller, collecting data from the pressure, leakage, and temperature sensors.`,
    imageAlt: 'ESP32 Component Image',
    imageSrc: 'https://i.pinimg.com/736x/d1/66/1b/d1661bdecf277684181694a4fedbf9bf.jpg',
  },
  {
    name: 'NXP Differential Pressure Sensor',
    description: `Pressure Sensor Monitors gas pressure in digesters. Helps detect unusual conditions like: Overpressure (dangerous, risk of burst). Underpressure (possible leak or low gas production). And also, we use it to find the pressure difference, then we get the flow rate.`,
    imageAlt: 'MPX5700AP Component Image',
    imageSrc: 'https://i.pinimg.com/736x/b5/1a/18/b51a189aa9240e22405bb98181592d24.jpg',
  },
  {
    name: 'K-Type Thermocouple',
    description: `Measures gas temperature and possibly the digester reactor temperature.`,
    imageAlt: 'K-Type Thermocouple Component Image',
    imageSrc: 'https://i.pinimg.com/1200x/7f/9b/4f/7f9b4fcdd53bf1107230a7bf87a55d0e.jpg',
  },
  {
    name: 'MQ4',
    description: `Function in the IoT device: Detects methane (CH₄) and natural gas leaks.`,
    imageAlt: 'MQ4 Component Image',
    imageSrc: 'https://i.pinimg.com/1200x/8c/a5/88/8ca5883dfad76ba0c6714ecc97876198.jpg',
  },
]


const setupSteps = [
  {
    title: "Set-Up and Installation",
    text: `BioPima will be installed 1 meter away from the Biodigester. Sensors installed on the system include Pressure sensor (MPX5010AP) to monitor gas pressure, Temperature Sensor (Thermocouple) which monitors the temperature for the microbial environment, and the MQ4 methane sensor which detects the methane gas leaks.`
  },
  {
    title: "Data Collection",
    text: `The sensors continuously monitor the gas temperature, methane leakage, gas pressure, and the gas consumption per activity. The data is then logged in real time and transmitted to the microcontroller (ESP32).`
  },
  {
    title: "Data Processing",
    text: `The microcontroller converts sensor signals from analog to digital data that it can understand. It compares the readings to the present ones.`
  },
  {
    title: "Pressure",
    text: `When the pressure is low it triggers a warning, which means there might be gas leakage or the gas production process is low. The user is advised to feed their digester when the pressure is low. It also sends an alert when the pressure is high to avoid gas venting. The user is advised to put the gas into use to reduce the pressure levels. Normal pressure means no mismatch between gas production and gas usage.`
  },
  {
    title: "Gas Leakage",
    text: `When the methane levels are above 2ppm it sends an alert since methane is a harmful greenhouse gas when released to the environment. It leads to destruction of the ozone layer causing climate change. Methane levels below 2ppm shows there is no gas leakage to the atmosphere.`
  },
  {
    title: "Temperature",
    text: `When the temperature is optimal (35-37 degrees), the biogas production is efficient and the digestion process is stable. When the temperatures are above 37 degrees, the micro-organisms that help in digestion die. Temperatures below 35 degrees lead to inactiveness of micro-organisms, resulting in low gas production.`
  },
  {
    title: "HiveMQ",
    text: `The ESP32 connects to Wi-Fi and then communicates with the HiveMQ, which is a messaging hub. The ESP32 device reads the information from the sensors like temperature, leakages, or pressure. This data is usually a series of numbers representing what the sensors detect. It connects to the internet, sends the sensor data as messages using MQTT protocol. Messages are routed to the right destinations ensuring backend and frontend stay connected and up-to-date.`
  },
]


export default function Setup() {
  return (
    <main id="components"className="min-h-screen from-green-50 to-white text-gray-900 p-8 font-sans">

      <header className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-extrabold w-max mx-auto select-none" style={{ color: "#9EAF1B" }}>
          Components And Setup
        </h1>
        <p className="text-lg text-black max-w-3xl mx-auto mt-2">
          An overview of the device setup and components used in our IoT biogas monitoring system.
        </p>
      </header>

      <section className="max-w-7xl mx-auto mb-16">

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-[-5]">
          <div className="relative w-full h-[700px] md:h-[900px] overflow-auto">
            <Image
              src="/images/biopima.svg"
              alt="Biopima System Architecture Diagram"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
              unoptimized
              priority={false}
            />
          </div>
          <p className="mt-4 text-lg text-black text-center">
            Biopima System Architecture: Shows sensor integration, MQTT communication via HiveMQ, and data flow to users and database.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-semibold mb-6 border-l-4 pl-4" style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}>
          Components
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {components.map(({ name, description, imageAlt, imageSrc }) => {
            const isNXP = name === 'NXP Differential Pressure Sensor';
            return (
              <article
                key={name}
                className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className={`relative w-full md:w-auto h-48 mb-6 md:mb-0 md:mr-8 rounded-lg overflow-hidden`}
                  style={isNXP ? { width: '300px', height: '200px' } : { width: '192px', height: '192px' }}
                >
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      style={{ objectFit: 'contain' }}
                      placeholder="blur"
                      blurDataURL="/images/placeholder.png"
                      priority={false}
                      unoptimized={imageSrc.startsWith('http')}
                      className="rounded-lg"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#9EAF1B] mb-3">{name}</h3>
                  <p className="text-black leading-relaxed whitespace-pre-line">{description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-l-4 pl-4" style={{ color: "#9EAF1B", borderColor: "#9EAF1B" }}>
          Setup and Installation
        </h2>

        <div className="space-y-8">
          {setupSteps.map(({ title, text }) => (
            <div key={title} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-400">
              <h3 className="text-2xl font-semibold text-[#9EAF1B] mb-4">{title}</h3>
              <p className="text-black leading-relaxed whitespace-pre-wrap">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
