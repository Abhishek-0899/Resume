import { BsBoxArrowUpRight } from "react-icons/bs";
import siemens from "../assets/siemens.png";
import highradius from "../assets/Highradius.png";

export default function Experience() {
  const Exp = [
    {
      role: "Full Time",
      company_Link: "https://www.siemens.com/en-us/",
      company_Img: siemens,
      designation: "Software Engineer",
      company_name: "Siemens Technology and Services Private Limited",
      duration: "Jul 2023 – Present",
      description: [
        "Designed and implemented a licensing feature for the Pomeronic application, reducing user churn by 30% and improving customer  retention, satisfaction through seamless integration across platforms.",
        "Refactored React components and optimized rendering using memoization and lazy loading, improving application efficiency by 80% while ensuring compliance with TDD best practices.",
      ],
    },
    {
      role: "Intership",
      company_Link: "https://www.highradius.com/",
      company_Img: highradius,
      designation: "Full Stack Developer Intern",
      company_name: "HighRadius",
      duration: "Jan 2022 – Apr 2022",
      description: [
        "Contributed to the development of a web-based platform by building frontend components using Rect.js, improving usability and reducing page load time by 25%. ",
        "Developed front-end features in React.js, HTML, and CSS, resulting in 25% faster load times and improved UX. ",
      ],
    },
  ];

  return (
    <>
      <div className="text-white w-full py-20 px-4 " id="experience">
        {/* Heading */}
        <h1 className="text-3xl sm:text-6xl text-red-300 -mt-48 sm:-mt-36 font-semibold mb-10">
          Experience
        </h1>

        {Exp.map((item, index) => (
          <div
            key={index}
            className="
      border border-white/10 
      p-4 sm:p-8 md:p-10 
      rounded-2xl mb-5 md:mb-6 
      bg-white/5 backdrop-blur-md
      hover:border-white/30 transition-all duration-300
    "
          >
            {/* Top Row */}
            <div className="flex justify-between items-center sm:items-center gap-3 sm:gap-4">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                {item.role}
              </h1>

              <a
                className="shrink-0"
                href={item.company_Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsBoxArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </a>
            </div>

            {/* Company Info */}
            <div className="flex gap-3 sm:gap-4 items-center mt-3 sm:mt-6 mb-5 md:mb-6">
              <img
                src={item.company_Img}
                alt=""
                className="h-14 w-14 sm:h-16 sm:w-16 md:h-24 md:w-24 object-contain"
              />

              <div className="min-w-0">
                <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  {item.designation} at
                </h1>
                <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl text-green-300">
                  {item.company_name}
                </h1>
              </div>
            </div>

            {/* Duration */}
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 text-gray-300">
              {item.duration}
            </h2>

            {/* Description */}
            <ul className="text-sm sm:text-3xl md:text-3xl lg:text-3xl list-disc pl-5 md:pl-6 space-y-2 md:space-y-3 text-gray-400 leading-loose">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
