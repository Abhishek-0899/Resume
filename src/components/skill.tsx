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
    <>
      <div id="skills" className="w-full py-20 ">
        <h1 className="text-5xl font-bold mb-12 text-green-200  ">Skills</h1>

        <div className="max-w-5xl mx-auto space-y-6">
          {skills.map((section) => (
            <div key={section.title}>
              <h2 className="text-4xl font-semibold mb-5 text-blue-400">
                {section.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {section.items.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 rounded-full text-2xl hover:bg-white/20 hover:text-white transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
