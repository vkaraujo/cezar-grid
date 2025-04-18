const education = [
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
  {
    title: 'B.Sc. in Computer Science (In Progress)',
    institution: 'Centro Universitário IBMR',
    period: 'Jan 2024 – Dec 2028',
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

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Education</h3>
          <ul className="space-y-4">
            {education.map((item, index) => (
              <li key={index} className="border-l-4 border-blue-600 pl-4">
                <p className="text-gray-900 font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">{item.institution}</p>
                <p className="text-sm text-gray-500 italic">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Certifications</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
