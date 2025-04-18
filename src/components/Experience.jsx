const experiences = [
  {
    company: 'Multi Reformas',
    period: 'Jul 2024 – Present',
    summary: 'Reduced material costs by 20% during bidding process while maintaining quality and technical standards.',
  },
  {
    company: 'Zaghetto Construções',
    period: 'Feb 2023 – Present',
    summary: 'Improved cash flow through supplier negotiations and introduced flexible payment models.',
  },
  {
    company: 'Ativa Tec Solutions',
    roles: [
      {
        title: 'Electrical Engineer',
        period: 'Oct 2019 – Jan 2023',
        summary: 'Led electrical projects and optimized payment processes, resolving 98% of discrepancies before deadlines.',
      },
      {
        title: 'Engineering Intern',
        period: 'Aug 2017 – Oct 2019',
        summary: 'Assisted with CAD drawings, staff payment reports, and on-site project execution.',
      },
    ],
  },
  {
    company: 'Inovsat Telecom',
    period: 'Jun 2014 – Dec 2014',
    summary: 'Supported ANATEL and CREA documentation, and participated in project development and implementation.',
  },
];

export default function Experience() {
  return (
    <section className="bg-gray-100 py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          Experience
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        <div className="relative border-l-4 border-blue-600 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>

              {/* Company */}
              <h3 className="text-xl font-semibold text-blue-800">{exp.company}</h3>

              {/* Roles (if multiple) */}
              {exp.roles ? (
                <div className="space-y-4 mt-2">
                  {exp.roles.map((role, i) => (
                    <div key={i}>
                      <span className="block text-sm text-gray-500 font-medium">
                        {role.title} &middot; {role.period}
                      </span>
                      <p className="text-gray-700 mt-1">{role.summary}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                  <p className="text-gray-700 mt-2">{exp.summary}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


