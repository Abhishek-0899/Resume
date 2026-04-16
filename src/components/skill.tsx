import React, { useState } from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";

export default function Skill() {
  return (
    <>
      <h1 className="text-6xl font-bold mb-32">Skills</h1>
      <div className="text-white flex flex-col items-center gap-10">
        <DynamicIconCloud />
      </div>
        </>
  );
}

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = useState<any>(null);

  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 60,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      }),
    );
  }

  return <span>Loading...</span>;
};

const slugs = [
  "github",
  "firebase",
  "supabase",
  "csharp",
  "python",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "nodejs",
  "html5",
  "css3",
  "tailwindcss",
  "bootstrap",
  "git",
  "googlechrome", // closest match for Chrome DevTools
];
const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  return (
    <div
      className="w-full h-[400px] flex justify-center items-center mb-64"
      id="skills"
    >
      <Cloud
        options={{
          reverse: true,
          depth: 1,
          wheelZoom: false,
          imageScale: 2,
          activeCursor: "default",
          tooltip: "native",
          initial: [0.1, -0.1],
          clickToFront: 500,
          tooltipDelay: 0,
          outlineColour: "#0000",
          maxSpeed: 0.04,
          minSpeed: 0.02,
        }}
      >
        {icons}
      </Cloud>
    </div>
  );
};
