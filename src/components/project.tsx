import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Project() {
  const Exp = [
    {
      project_name: "Speedester",
      project_Link: "https://speedtester-theta.vercel.app/",
      github_Link: "https://github.com/Abhishek-0899/Speedtester",
      "Tech Stack": ["React.js", "Tailwind CSS", "Firebase", "Firebase-auth"],
      description: [
        "🚀 A real-time typing application designed for low-latency feedback and high responsiveness",
        "Engineered a real-time typing engine calculating WPM, accuracy, and error tracking with near-instant feedback",
        "Designed efficient character-tracking logic to minimize lag and ensure smooth user interaction",
        "Optimized rendering for performance, enabling seamless experience even during continuous input",
      ],
    },
    {
      project_name: "RolebasedBlogs",
      project_Link: "https://rolebased-blogs.vercel.app/login",
      github_Link: "https://github.com/Abhishek-0899/RolebasedBlogs",
      "Tech Stack": ["React.js", "Tailwind CSS", "Supabase", "Supabase-auth"],
      description: [
        "A scalable content platform with secure role-based access control and optimized data handling",
        "Implemented a 3-tier RBAC system (Admin, Editor, User)",
        "Built authentication and authorization workflows using Supabase",
        "Optimized database queries → sub-150ms response times",
        "Fully responsive UI across breakpoints",
      ],
    },
  ];

  return (
    <div id="project" className="text-white w-full py-20 px-4">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-6xl text-yellow-300 -mt-48 sm:-mt-36 font-semibold mb-10">
        Projects
      </h1>

      {Exp.map((item, index) => (
        <div
          key={index}
          className="border border-white/10 p-4 sm:p-8 md:p-10 rounded-2xl mb-5 md:mb-6 bg-white/5 backdrop-blur-md hover:border-white/30 transition-all duration-300"
        >
          
          {/* Top Row */}
          <div className="flex items-center justify-between mb-6 gap-3 sm:gap-4">
            <h1 className="text-lg sm:text-4xl md:text-5xl font-medium">
              {item.project_name}
            </h1>

            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href={item.project_Link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition"
              >
                <BsBoxArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </a>

              <a
                href={item.github_Link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition"
              >
                <span className="text-xl sm:text-2xl md:text-4xl">🔗</span>
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-4 sm:mb-5">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              Tech-Stack -
            </h1>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {item["Tech Stack"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base md:text-lg lg:text-2xl bg-white/10 rounded-full border border-white/10 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <ul className="text-sm sm:text-base md:text-lg lg:text-3xl list-disc pl-5 md:pl-6 space-y-2 md:space-y-3 text-gray-400 leading-relaxed">
            {item.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}