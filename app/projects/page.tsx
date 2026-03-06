import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Investment Insurance Platform",
      description: "A financial product built for a major Indian bank",
      points: [
        "Built a production-grade insurance platform with onboarding, quote discovery, and comparison flows",

        "Architected scalable frontend using React, TypeScript, and reusable component patterns",

        "Implemented multi-step validated forms using React Hook Form + Yup",

        "Managed server state and API performance using TanStack Query + Axios abstraction",

        "Developed dynamic product comparison functionality",
      ],
      tech: [
        "React",
        "TypeScript",
        "TanStack Query",
        "React Hook Form",
        "Yup Axios",
      ],
      link: "https://investmentuat-ippb.fynity.in/",
    },
    {
      title: "Dumble — Bumble for devs",
      description:
        "Full-stack MERN app enabling devs to network.",
      points: [
        "JWT authentication with HTTP-only cookies & protected routes",
        "Deployed frontend on AWS EC2 with Nginx reverse proxy",
        "Managed backend using PM2 with CORS & env configs",
      ],
      tech: ["MongoDB", "Express", "React", "Node", "AWS EC2", "Nginx"],
      link: "#",
      isPending: true,
    },
    {
      title: "Positivus — A Marketing Agency ",
      description:
        "Responsive marketing website built with modern UI animations.",
      points: [
        "Built landing sections: services, case studies, team, contact",
        "Responsive layout using Tailwind CSS",
        "Integrated Framer Motion animations",
      ],
      tech: ["React", "Tailwind", "Framer Motion", "Vercel"],
      link: "https://positivus-a-marketing-agency-portal.vercel.app/",
    },
  ];

  return (
    <main className="px-10 md:px-32 py-3! max-w-6xl ">
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-10 ">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
