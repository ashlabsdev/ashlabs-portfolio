import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        block
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--primary)]/40
      "
    >
      {/* Image */}

      <div className="aspect-video overflow-hidden bg-[var(--surface)]">
        <img
          src={project.image}
          alt={project.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div className="p-6">
        <p className="text-sm text-[var(--muted)]">
          {project.client}
        </p>

        <div className="mt-2 flex items-center justify-between gap-4">
          <h2 className="font-heading text-2xl font-semibold">
            {project.name}
          </h2>

          <span
            className="
              text-xl
              text-[var(--muted)]
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:text-[var(--primary)]
            "
          >
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}