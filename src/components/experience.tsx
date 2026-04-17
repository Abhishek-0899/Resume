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
        "    Refactored React components and optimized rendering using memoization and lazy loading, improving application efficiency by 80% while ensuring compliance with TDD best practices.",
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
      <div className="text-white" id="experience">
        <h1 className="text-6xl text-red-300 font-semibold mb-10">
          Experience
        </h1>

        {Exp.map((item, index) => (
          <div
            key={index}
            className="border-2 border-b-gray-900 p-10 rounded-2xl mb-5"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-medium mb-6">{item.role}</h1>
              <a
                className="mr-9 "
                href={item.company_Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsBoxArrowUpRight size={32} />
              </a>
            </div>
            <div className="flex gap-4 items-center -mt-6 mb-15">
              <img
                src={item.company_Img}
                alt=""
                className="h-32 w-32 object-contain"
              />
              <div className="gap-5">
                <h1 className="text-4xl font-bold">{item.designation} at</h1>
                <h1 className="text-4xl text-green-300">{item.company_name}</h1>
              </div>
            </div>
            <h2 className="text-4xl mb-4">{item.duration} </h2>
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
