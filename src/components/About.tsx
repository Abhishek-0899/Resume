import { HiDocumentDownload } from "react-icons/hi";
import twitter_ from "../assets/twitter-.gif";
import youtube from "../assets/youtube.png";
import linkdein from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/Abhishek _pandit.pdf";
import Experience from "./experience";
import Project from "./project";
import Footer from "./footer";
import Skill from "./skill";
export default function About() {
  const Link = [
    {
      icon: youtube,
      url: "https://www.youtube.com/@spiderweb8177",
    },
    {
      icon: twitter_,
      url: "https://www.youtube.com/@spiderweb8177",
    },
    {
      icon: linkdein,
      url: "https://www.linkedin.com/in/abhishek-kumar-pandit-597383191/",
    },
    {
      icon: github,
      url: "https://github.com/Abhishek-0899",
    },
  ];

  const scrollToSection = (id:string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navItem = [
    { id: "skills", label: "Skills", number: "01" },
    { id: "experience", label: "Experience", number: "02" },
    { id: "project", label: "Project", number: "03" },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row text-white px-6 sm:px-10 lg:px-20 py-10 gap-10">
        
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 py-6 lg:p-16 flex flex-col space-y-6">
          
          <section className="p-2 sm:p-5">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                I'm Abhishek Kumar Pandit
              </h1>

              <div className="mt-6 space-y-4 text-gray-400">
                <p className="text-lg sm:text-xl lg:text-3xl">
                  Frontend Engineer specializing in high-performance React & Next.js applications with 3 years of experience.
                </p>

                <p className="text-lg sm:text-xl lg:text-3xl">
                  Improved application performance by up to 80% and reduced user churn through scalable, production-grade solutions.
                </p>

                <p className="text-lg sm:text-xl lg:text-3xl">
                  Focused on performance optimization, fast load times, and efficient API-driven systems.
                </p>

                <p className="text-lg sm:text-xl lg:text-3xl">
                  Strong backend foundation in C#, APIs, and authentication — enabling end-to-end ownership.
                </p>
              </div>
            </div>

            {/* NAV */}
            <div className="flex flex-col gap-3 ml-2 sm:ml-5 mt-8 mb-8">
              {navItem.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group text-left"
                >
                  <div
                    className="
                    flex items-center gap-4 
                    text-lg sm:text-2xl lg:text-4xl
                    transition duration-300
                    text-gray-200
                    group-hover:text-gray-400
                    group-hover:scale-125
                    origin-left
                  "
                  >
                    <span>{item.number}</span>
                    <span>-</span>
                    <span>{item.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="text-lg sm:text-xl lg:text-2xl">
              🌍 Available for remote frontend roles
            </div>
            <div className="text-lg sm:text-xl lg:text-2xl">
              Let’s build fast, scalable applications together.
            </div>
          </section>

          {/* SOCIAL LINKS */}
          <div className="flex gap-3 sm:gap-4 p-2 sm:p-4 flex-wrap">
            {Link.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-full bg-white/30 hover:bg-white/10 hover:scale-110 transition"
              >
                <img
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                  src={item.icon}
                  alt=""
                />
              </a>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-2 sm:p-4">
            
            <button className="text-base sm:text-3xl flex bg-white/30 rounded-xl items-center p-2 gap-2 hover:scale-125 transition hover:bg-blue-600">
              <HiDocumentDownload size={28} />
              <a
                href={resume}
                download="Abhishek_Kumar_Pandit_Resume"
                className="flex items-center gap-2"
              >
                Resume
              </a>
            </button>

            <button className="text-base sm:text-3xl sm:font-semibold flex bg-green-300 hover:bg-green-600 text-black font-bold rounded-xl items-center p-2 gap-2 hover:scale-125 transition">
              <a
                href="mailto:abhishekkumarpandit3@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Abhishek,%20I’d%20like%20to%20discuss%20a%20project."
                className="flex items-center gap-2"
              >
                Hire Me
              </a>
            </button>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <section className="w-full lg:w-1/2 flex flex-col gap-16 py-6 lg:p-16">
          <div id="skills">
            <Skill />
          </div>

          <div id="experience">
            <Experience />
          </div>

          <div id="project">
            <Project />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}