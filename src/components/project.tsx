import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Project() {
  const Exp = [
    {
      project_name: "Speedester",
      project_Link: "https://speedtester-theta.vercel.app/",
      github_Link: "https://github.com/Abhishek-0899/Speedtester",
      "Tech Stack": ["React.js", "Tailwind CSS ", "Firebase", "Firebase-auth"],
      description: [
        " 🚀 A real-time typing application designed for low-latency feedback and high responsiveness",
        "Engineered a real-time typing engine calculating WPM, accuracy, and error tracking with near-instant feedback",
        "Designed efficient character-tracking logic to minimize lag and ensure smooth user interaction",
        "Optimized rendering for performance, enabling seamless experience even during continuous input",
      ],
    },
    {
      project_name: "RolebasedBlogs",
      project_Link: "https://rolebased-blogs.vercel.app/login",
      github_Link: "https://github.com/Abhishek-0899/RolebasedBlogs",
      "Tech Stack": ["React.js", "Tailwind CSS ", "Supabase", "Supabase-auth"],
      description: [
        "A scalable content platform with secure role-based access control and optimized data handling",
        " Implemented a 3-tier RBAC system (Admin, Editor, User) with protected routes and secure access control",
        "Built authentication and authorization workflows using Supabase",
        "Optimized database queries and API interactions → achieved sub-150ms response times",
        "Designed a fully responsive UI validated across multiple breakpoints",
      ],
    },
  ];
  return (
    <>
      <div id="project" className="text-white">
        <h1 className="text-6xl font-semibold mb-10 text-yellow-100">
          Projects
        </h1>

        {Exp.map((item, index) => (
          <div
            key={index}
            className="border-2 border-b-gray-900 p-10 rounded-2xl mb-5"
          >
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-5xl font-medium">{item.project_name}</h1>

              <div className="flex items-center gap-4">
                <a
                  href={item.project_Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <BsBoxArrowUpRight size={32} />
                </a>

                <a
                  href={item.github_Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <span className="text-4xl">🔗</span>
                </a>
              </div>
            </div>

            <div className="gap-5 flex items-center mb-5">
              <h1 className="text-3xl font-bold">Tech-Stack - </h1>
              <div className="flex flex-wrap gap-3">
                {item["Tech Stack"].map((item, index) => (
                  <span
                    className="px-4 py-2 bg-white/10 rounded-full text-2xl hover:bg-white/20 hover:text-white transition"
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <ul className="md:text-3xl list-disc pl-6 space-y-3 text-gray-400 leading-normal ">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
