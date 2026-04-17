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

  const scrollToSection = (id: string) => {
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
      <div className="flex text-white p-20 gap-10">
        {/* LEFT SECTION */}
        <div className="w-1/2 h-screen p-16 flex flex-col space-y-3 sticky top-0">
          <section className=" p-5">
            <div>
              <div className="space-y-4">
                <h1 className="text-8xl font-bold leading-tight">
                  I'm Abhishek Kumar Pandit
                </h1>
              </div>

              <div className="mt-6 w-full space-y-4 text-gray-400">
                <p className="text-4xl w-full">
                  Frontend Engineer specializing in high-performance React &
                  Next.js applications with 3 years of experience.
                </p>

                <p className="text-4xl">
                  Improved application performance by up to 80% and reduced user
                  churn through scalable, production-grade solutions.
                </p>
                <p className="text-4xl">
                  Focused on performance optimization, fast load times, and
                  efficient API-driven systems.
                </p>

                <p className="text-4xl">
                  Strong backend foundation in C#, APIs, and authentication —
                  enabling end-to-end ownership.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 ml-5 mt-10 mb-10">
              {navItem.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group text-left"
                >
                  <div
                    className="
          flex items-center gap-2 
          text-3xl text-gray-200
          transition duration-300
          group-hover:text-gray-400
          group-hover:scale-150
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

            <div className="text-3xl">🌍 Available for remote frontend roles</div>
            <div className="text-3xl">Let’s build fast, scalable applications together.</div>
          </section>

          <div className="flex gap-4 p-4 rounded-full">
            {Link.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
        flex items-center gap-4
    p-5
        rounded-full
        bg-white/30
        hover:bg-white/10 hover:scale-125
        transition duration-300
      "
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={item.icon}
                  alt=""
                />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-10 p-4">
            <button className="text-2xl flex bg-white/30 rounded-xl items-center p-2 gap-2 hover:scale-125 transition hover:bg-blue-600">
              <HiDocumentDownload size={50} />
              <a
                href={resume}
                download="Abhishek_Kumar_Pandit_Resume"
                className="text-2xl flex  rounded-md items-center p-2 gap-2 hover:scale-125 transition"
              >
                Resume
              </a>
            </button>
            <button className="text-2xl flex bg-green-300 hover:bg-green-600 text-black font-bold rounded-xl items-center p-2 gap-2 hover:scale-125 transition">
              <a
                href="mailto:abhishekkumarpandit3@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Abhishek,%20I’d%20like%20to%20discuss%20a%20project."
                className="text-2xl flex  rounded-md items-center p-2 gap-2 hover:scale-125 transition"
              >
                Hire Me
              </a>
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <section className="w-1/2 flex flex-col p-16">
          <Skill />
          <Experience />
          <Project />       
        </section>
      </div>

      <Footer />
    </>
  );
}
