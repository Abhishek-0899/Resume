import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Project() {
  const Exp = [
    {
      project_name: "Speedester",
      project_Link: "https://speedtester-theta.vercel.app/",
      github_Link: "https://github.com/Abhishek-0899/Speedtester",
      Tech_Stack: ["React.js", "Tailwind CSS ", "Firebase", "Firebase-auth"],
      description: [
        "Built a real-time typing practice application that calculates WPM, accuracy, and error counts with instant feedback",
        " Engineered efficient character-tracking logic and a fully responsive UI for a smooth, low-latency typing experience",
      ],
    },
    {
      project_name: "RolebasedBlogs",
      project_Link: "https://rolebased-blogs.vercel.app/login",
      github_Link: "https://github.com/Abhishek-0899/RolebasedBlogs",
      Tech_Stack: ["React.js", "Tailwind CSS ", "Supabase", "Supabase-auth"],
      description: [
        " Implemented a 3-tier RBAC system (Admin, Editor, User) with fully protected routes for secure content  access.",
        "Developed a 100% responsive interface validated across four device breakpoints for consistent user experience.",
        " Optimized Supabase queries and API workflows to achieve sub-150ms response times.",
      ],
    },
  ];
  return (
    <>
      <div className="text-white">
        <h1 className="text-4xl font-semibold mb-10">Projects</h1>

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
              <h1 className="text-4xl font-bold">Tech-Stack - </h1>
              <h1 className="text-4xl font-bold">
                {item.Tech_Stack.join(" , ")}
              </h1>
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
