const skills = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "C#",
      ".NET",
      "REST APIs",
      "Authentication & Authorization",
      "Node.js",
      "Firebase",
      "Supabase",
    ],
  },
  {
    title: "Build & Tools",
    items: ["Git", "Vite", "Webpack", "ESLint", "Prettier"],
  },
  {
    title: "Core Strengths",
    items: [
      "Performance Optimization",
      "Responsive Design",
      "Scalable UI Architecture",
    ],
  },
];

export default function Skill() {
  return (
    <div id="skills" className="w-full  py-20 px-4 sm:px-6">
      {/* Heading */}
      <h1 className="text-3xl -mt-32 sm:mt-0 sm:text-4xl md:text-5xl font-bold mb-12 text-green-200">
        {" "}
        Skills
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {skills.map((section) => (
          <div
            key={section.title}
            className="
              p-5 sm:p-6
              rounded-2xl
              bg-white/5
              backdrop-blur-md
              border border-white/10
              hover:border-white/30
              hover:bg-white/10
              transition-all duration-300
            "
          >
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 text-blue-400">
              {section.title}
            </h2>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {section.items.map((item, index) => (
                <span
                  key={index}
                  className="
                    px-3 sm:px-4 py-1.5 sm:py-2
                    text-sm sm:text-base md:text-lg
                    bg-white/10 text-gray-300
                    rounded-full
                    border border-white/10
                    hover:bg-white/20 hover:text-white hover:border-white/30
                    transition-all duration-300
                    cursor-default
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
