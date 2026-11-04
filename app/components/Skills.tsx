import { skills } from "../data/skills";
export default function Skills() {
  return (
    <section className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-10 md:px-6 py-12 md:grid-cols-4 md:gap-16 md:py-20">
      {/* Section title */}
      <div className="col-span-1">
        <h2 className="text-md text-left font-bold tracking-widest text-blue-500 md:text-right">
          SKILLS
        </h2>
      </div>
      {/* Skills content */}
      <div className="col-span-1 grid grid-cols-2 gap-x-6 gap-y-8 md:col-span-3 md:grid-cols-4 md:gap-18">
        {skills.map((skill) => (
          <div key={skill.category} className="flex flex-col gap-1 w-60">
            <h2 className="mb-1 text-md font-bold">{skill.category}</h2>
            {skill.items.map((item) => (
              <span className="text-sm font-regular text-gray-600" key={item}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
