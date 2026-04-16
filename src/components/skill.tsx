import { Canvas } from "@react-three/fiber";
import { OrbitControls, Billboard, Html } from "@react-three/drei";

import firebase from "../assets/firebase.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import node from "../assets/nodejs.png";
import python from "../assets/python.png";
import supabase from "../assets/supabase.png";
import csharp from "../assets/csharp.png";
import bootstrap from "../assets/bootstrap.png";
import nextjs from "../assets/nextjs.png";
import devtools from "../assets/devtools.png";
import ts from "../assets/typescript.png";

// 🎯 4 skills only
const skills = [
  { name: "Firebase", icon: firebase },
  { name: "React", icon: react },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "GitHub", icon: github },
  { name: "CSS", icon: css },
  { name: "Git", icon: git },
  { name: "HTML", icon: html },
  { name: "JavaScript", icon: js },
  { name: "Node.js", icon: node },
  { name: "Python", icon: python },
  { name: "Supabase", icon: supabase },
  { name: "C#", icon: csharp },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Next.js", icon: nextjs },
  { name: "DevTools", icon: devtools },
  { name: "TypeScript", icon: ts },
];

// 🌍 Balanced sphere
function getSpherePositions(count: number, radius: number = 18) {
  const positions: Array<[number, number, number]> = [];

  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;

    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    positions.push([x, y, z]);
  }

  return positions;
}

const positions = getSpherePositions(skills.length);

// 🎯 Skill item (SIZE 90)
interface SkillItemProps {
  position: [number, number, number];
  skill: {
    name: string;
    icon: string;
  };
}

function SkillItem({ position, skill }: SkillItemProps) {
  return (
    <Billboard position={position}>
      <Html center distanceFactor={60}>
        <div className="flex flex-col items-center text-white text-xs">
          <img
            src={skill.icon}
            className="w-60 h-60 mb-2 object-contain"
            style={{
              filter: "drop-shadow(0 0 14px rgba(255,255,255,0.35))",
            }}
          />

          <span className="text-xs font-medium opacity-80">{skill.name}</span>
        </div>
      </Html>
    </Billboard>
  );
}

// 🌌 Sphere
function Sphere() {
  return (
    <>
      {skills.map((skill, i) => (
        <SkillItem key={i} skill={skill} position={positions[i]} />
      ))}
    </>
  );
}

// 🚀 Main Component
export default function Skill() {
  return (
    <section id="skills" className="w-full flex flex-col items-center py-20">
      <h1 className="text-6xl font-bold mb-20 text-white">Skills</h1>

      <div className="w-full h-[650px]">
        <Canvas camera={{ position: [0, 0, 30] }}>
          <ambientLight intensity={1} />

          <Sphere />

          <OrbitControls autoRotate autoRotateSpeed={0.6} enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
