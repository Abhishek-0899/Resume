import { HiDocumentDownload } from "react-icons/hi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import twitter_ from "../assets/twitter-.gif";
import youtube from "../assets/youtube.png";
import linkdein from "../assets/linkedin.png";
import github from "../assets/github.png";
import akp from "../assets/akp.jpg";
import resume from "../assets/Abhishek _pandit.pdf";
import Experience from "./experience";

import Project from "./project";
import Footer from "./footer";
import Skill from "./skill";
export default function About() {
  const Link = [
    {
      name: "Youtube",
      icon: youtube,
      url: "https://www.youtube.com/@spiderweb8177",
    },
    {
      name: "Twitter",
      icon: twitter_,
      url: "https://www.youtube.com/@spiderweb8177",
    },
    {
      name: "Linkdein",
      icon: linkdein,
      url: "https://www.linkedin.com/in/abhishek-kumar-pandit-597383191/",
    },
    {
      name: "Github",
      icon: github,
      url: "https://github.com/Abhishek-0899",
    },
  ];

  const scrollToSection = (id) => {
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
                  Frontend Engineer with 3 years of experience building
                  high-performance, scalable web applications using React.js and
                  Next.js.
                </p>

                <p className="text-4xl">
                  I specialize in performance optimization, reducing load times,
                  and improving API efficiency to deliver fast, seamless user
                  experiences.
                </p>

                <p className="text-4xl">
                  Strong backend foundation in C#, APIs, and authentication,
                  enabling end-to-end ownership and scalable system design.
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
            <div className="flex items-center gap-10 p-4">
              <img className="rounded-full size-20" src={akp} alt="logo.png" />
              <button className="text-2xl flex bg-red-400 rounded-md items-center p-2 gap-2 hover:scale-105 transition">
                <HiDocumentDownload size={50} />
                <a
                  href={resume}
                  download="Abhishek_Kumar_Pandit_Resume"
                  className="text-2xl flex bg-red-400 rounded-md items-center p-2 gap-2 hover:scale-105 transition"
                >
                  Resume
                </a>
              </button>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-96">
            {Link.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
        flex items-center justify-between
        gap-3 px-4 py-3
        hover:bg-white/5 hover:scale-[1.02]
        transition duration-300
      "
              >
                <div className="flex items-center justify-center gap-4">
                  <img className="w-10 h-10" src={item.icon} alt={item.name} />
                  <span className="text-2xl font-medium">{item.name}</span>
                  <BsBoxArrowUpRight size={20} className="opacity-70" />
                </div>
              </a>
            ))}
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
