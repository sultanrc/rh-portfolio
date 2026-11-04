import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-10 md:px-6 py-12 md:grid-cols-4 md:gap-16 md:py-20">
      {/* Section title */}
      <div className="col-span-1">
        <h2 className="text-left text-md font-bold tracking-widest text-blue-500 md:text-right">
          PROJECTS
        </h2>
      </div>

      {/* Projects content */}
      <div className="col-span-1 flex flex-col gap-12 md:col-span-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col gap-4 sm:flex-row sm:gap-6 md:gap-8"
          >
            {/* Project image */}
            <div className="aspect-video w-full shrink-0 overflow-hidden bg-sky-200 sm:aspect-square sm:w-40 md:aspect-auto md:h-80 md:w-100">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Project details */}
            <div className="flex min-w-0 flex-col justify-between gap-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-bold leading-relaxed">
                  {project.title}
                </h3>

                <p className="text-xs leading-relaxed text-gray-600">
                  {project.description}
                </p>
              </div>

              <a
                href="#"
                className="inline-flex w-fit items-center gap-2 rounded-md border border-blue-600 bg-white px-3 py-1 text-[10px] font-mono font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                Details <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
