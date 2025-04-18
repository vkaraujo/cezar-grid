import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const education = [
  {
    title: 'B.Sc. in Computer Science',
    institution: 'Centro Universitário IBMR',
    period: 'Jan 2024 – Dec 2028',
    inProgress: true,
  },
  {
    title: 'Postgraduate in Business Intelligence Master',
    institution: 'PUC-Rio · ICA – Lab. de Inteligência Computacional',
    period: '2021 – Jul 2023',
  },
  {
    title: 'B.Sc. in Electrical Engineering',
    institution: 'Universidade Veiga de Almeida',
    period: '2013 – 2018',
  },
];

const certifications = [
  'Microsoft Power BI para Data Science – Versão 2.0',
  'Gestão do Tempo e Produtividade',
];

export default function Education() {
  return (
    <section className="bg-white py-20 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          Education & Certifications
        </h2>

        {/* Education Timeline */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-blue-600" /> Education
          </h3>
          <ul className="relative border-l-4 border-blue-600 pl-6 space-y-8">
            {education.map((item, index) => (
              <li key={index} className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                <p className="text-gray-900 font-semibold text-lg">
                  {item.title}
                  {item.inProgress && (
                    <span className="ml-2 px-2 py-0.5 text-xs text-blue-600 bg-blue-100 rounded-full">
                      In Progress
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-700">{item.institution}</p>
                <p className="text-sm text-gray-500 italic">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
            <FaCertificate className="text-blue-600" /> Certifications
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {certifications.map((cert, index) => (
              <li key={index} className="text-sm sm:text-base">{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

