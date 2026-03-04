type Project = {
  title: string;
  description: string;
  points: string[];
  tech: string[];
  link: string;
  isPending?: boolean;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="relative
                 bg-gradient-to-r from-neutral-900 to-neutral-800
                 border border-neutral-800
                 rounded-2xl sm:rounded-3xl
                 p-5 sm:p-8
                 transition duration-300
                 sm:hover:scale-[1.02]"
    >
      {/* Status Badge */}
      {project.isPending && (
        <span
          className="absolute top-4 right-4
                     bg-yellow-400 text-black
                     text-[10px] sm:text-xs
                     px-3 py-1
                     rounded-full font-medium"
        >
          Work in Progress
        </span>
      )}

      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-400 mb-5 leading-relaxed">
        {project.description}
      </p>

      {/* Points */}
      <ul
        className="text-xs sm:text-sm
                   list-disc list-outside
                   pl-5
                   space-y-2
                   text-gray-400
                   marker:text-gray-600
                   leading-relaxed mb-6"
      >
        {project.points.map((point, index) => (
          <li className="tracking-wider" key={index}>{point}</li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="text-[10px] sm:text-xs
                       border border-neutral-700
                       tracking-wider
                       px-3 py-1
                       rounded-full
                       text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={project.link}
        className="inline-block text-sm sm:text-base font-medium
                   text-white
                   hover:underline underline-offset-4"
      >
        View Project →
      </a>
    </div>
  );
}
