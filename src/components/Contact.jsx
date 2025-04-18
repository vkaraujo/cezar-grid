import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-gray-100 py-20 px-4 text-center" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-10">
          Whether you’re looking for an experienced engineer or just want to connect,
          feel free to reach out.
        </p>

        <div className="space-y-4 text-lg text-gray-700 mb-10">
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:cezar.awa@hotmail.com" className="text-blue-600 underline">
              cezar.awa@hotmail.com
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhone className="text-blue-600" />
            <a href="tel:+5521992585915" className="text-blue-600 underline">
              (21) 99258-5915
            </a>
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/in/cezar-awa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/CezarAWA/Public-View-Repo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <a
          href="/Cezar-Araujo-Resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-7 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-md"
        >
          Download Résumé
        </a>
      </div>
    </section>
  );
}
