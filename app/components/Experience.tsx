import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-10 md:px-6 py-12 md:grid-cols-4 md:gap-16 md:py-20">
      {/* Section title */}
      <div className="col-span-1">
        <h2 className="text-left text-md font-bold tracking-widest text-blue-500 md:text-right">
          EXPERIENCE
        </h2>
      </div>

      {/* Experience content */}
      <div className="col-span-1 flex flex-col gap-8 md:col-span-3 ">
        {experiences.map((experience) => (
          <div key={`${experience.company}-${experience.period}`}>
            <div className="flex flex-col gap-1 md:flex-row md:justify-between md:gap-4">
              <h3 className="text-sm font-bold">{experience.company}</h3>

              <p className="shrink-0 text-xs font-mono text-gray-600">
                {experience.period}
              </p>
            </div>

            <p className="text-sm text-gray-600">{experience.position}</p>
          </div>
        ))}
        <a
          href="mailto:rezzahanafiah@gmail.com"
          className="mr-auto mt-4 inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-white px-6 py-3 text-sm font-mono font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          CV/Resume
          <span aria-hidden="true">🗒️</span>
        </a>
      </div>
    </section>
  );
}
