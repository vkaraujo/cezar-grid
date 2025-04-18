export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Cezar Augusto Waissmann de Araujo
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-700 mb-6">
        Electrical Engineer • Project Designer • Consultant
      </h2>
      <p className="max-w-xl text-gray-600 mb-8">
        Bringing technical excellence and hands-on execution to every project.
        Focused on results, quality, and real impact in electrical systems and automation.
      </p>
      <a
        href="#contact"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
      >
        Contact Me
      </a>
    </section>
  );
}
