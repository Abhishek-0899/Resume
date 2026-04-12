import { HiDocumentDownload } from "react-icons/hi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import twitter_ from "../assets/twitter-.gif";
import youtube from "../assets/youtube.png";
import linkdein from "../assets/linkedin.png";
import github from "../assets/github.png";
import akp from "../assets/akp.jpg";
import Skill from "./skill";
import resume from "../assets/Abhishek _pandit.pdf";
import Experience from "./experience";

import Project from "./project";
import Footer from "./footer";
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

  return (
    <>
      <div className="flex text-white p-20 gap-10">
        {/* LEFT SECTION */}
        <section className="w-1/2 h-screen p-16 flex flex-col space-y-3 sticky top-0">
          <div>
            <div className="space-y-4">
              <h1 className="text-6xl font-bold leading-tight">
                I'm Abhishek Kumar Pandit
                <h1 className="font-bold text-5xl leading-tight">
                  Software Engineer → Frontend Specialist
                </h1>
                <h1 className="font-bold leading-tight">
                  Turning complex problems into fast, intuitive user interfaces
                </h1>
              </h1>
            </div>

            <h3 className="text-4xl mt-5 font-medium text-gray-400">
              Software Engineer with 3 years of experience transitioning into{" "}
              <br />
              frontend development, with hands-on experience in React.js <br />{" "}
              and Next.js. Strong foundation in backend development using <br />{" "}
              C#, along with experience in APIs and authentication. Focused on
              building scalable and user-friendly web applications.
            </h3>
          </div>
          <div className="flex items-center gap-5 p-4">
            <img className="rounded-full size-20" src={akp} alt="logo.png" />
            <button className="text-2xl flex bg-red-400 rounded-md items-center p-2 gap-2 hover:scale-105 transition">
              <HiDocumentDownload size={50} />
              <a href={resume} download="resume">
                Resume
              </a>
            </button>
          </div>

          {/* <div>
          <h1 className="text-5xl">1.Project
            a
          </h1>
        </div> */}
          <div className="grid grid-cols-2 rounded-md border-2">
            {Link.map((item) => (
              <div className="flex items-center -mr-4 ">
                <div className="flex items-center gap-5">
                  <img className="size-12" src={item.icon} alt="vite.png" />
                  <h1 className="text-2xl">{item.name}</h1>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <BsBoxArrowUpRight size={25} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RIGHT SECTION */}
        <section className="w-1/2 flex flex-col">
          {/* <Skill /> */}
          <Experience />
          <Project />
        </section>
      </div>

      <Footer />
    </>
  );
}
