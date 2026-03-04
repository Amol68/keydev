/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const experience = [
  {
    company: "Sankey Solutions",
    logo:"https://sankeysolutions.com/wp-content/uploads/2024/05/logo.png",
    role: "React Native Intern",
    duration: "2024 | 4 Months",
    experince: [
      "Built a responsive  interface in React Native by translating complex Figma designs into pixel-accurate mobile screens.",
      "Developed a module to dynamically manage parameter and sub-parameter weight distribution with real-time state synchronization.",
      "Implemented a dynamic percentage status bar that calculates cumulative totals and triggers validation warnings when exceeding 100%, improving user input accuracy.",
      "Managed component state efficiently using React hooks to ensure isolated updates across multiple presets.",
    ],
  },

  {
    company: "FynTune Solutions",
    logo:"https://www.fyntune.com/images/logo/logo.png",
    role: "React JS Developer",
    duration: "Feb 2025 - Present",
    experince: [
      "Created policy quote comparison and purchase flow, a product used by India Post Payment Bank.",
      "Built dynamic multi-step forms using React Hook Form, handling complex validations, conditional logic, and API-driven flows.",
      "Developed shortlisting and comparison, improving user decision experience.",
      "Implemented server state management using TanStack Query, improving performance and reducing redundant API calls.",
      "Owned complete UI revamp, bootstrapping project architecture (routing, Axios setup, reusable components).",
      "Managed production deployments via Jenkins across UAT, Preprod, and Prod.",
    ],
  },
];

export default function ExperiencePage() {
  return (
   <main className="px-6 sm:px-10 lg:px-24 py-12 sm:py-16 max-w-6xl mx-auto">
  
  {/* Section Label */}
  <p className="text-xs tracking-[0.35em] text-gray-500 mb-4">
    WORK
  </p>

  {/* Heading */}
  <h1
    className={`${playfair.className} text-2xl md:text-4xl  font-bold mb-12 sm:mb-16`}
  >
    Experience
  </h1>

  <div className="space-y-8">
    {experience.map((exp) => {
      return (
        <div
          key={exp.company}
          className="bg-gradient-to-r from-neutral-900 to-neutral-800
                     rounded-2xl sm:rounded-3xl
                     p-5 sm:p-8
                     transition duration-300
                     hover:sm:scale-[1.02]"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-5">
            
            <div>
              <h3 className="text-md sm:text-lg font-semibold">
                {exp.company}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {exp.role}
              </p>
            </div>

            <span className="text-xs sm:text-sm text-gray-500">
              {exp.duration}
            </span>
          </div>

          {/* Bullet Points */}
          <ul className="list-disc list-outside pl-5
                         space-y-2
                         text-xs sm:text-sm
                         text-gray-400
                         leading-relaxed">
            {exp.experince.map((curr) => {
              return (
                <li className="tracking-wider text-xs" key={curr}>
                  {curr}
                </li>
              );
            })}
          </ul>
        </div>
      );
    })}
  </div>
</main>
  );
}
