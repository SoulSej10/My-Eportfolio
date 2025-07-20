'use client'

type Project = {
  title: string
  description: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'E-Portfolio Website',
    description: 'A personal website to showcase my background, achievements, and projects using Next.js and Tailwind CSS.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: '#',
  },
  {
    title: 'Purchase Request Module (RAFI)',
    description: 'Backend implementation of a procurement feature during my OJT at RAFI Microfinance.',
    tech: ['.NET 8', 'Postman', 'D365', 'Swagger'],
    link: '#',
  },
  {
    title: 'Mobile Task Manager',
    description: 'A simple Flutter app for managing tasks and reminders on the go.',
    tech: ['Flutter', 'Dart', 'GetX'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
        <p className="text-gray-600 mb-12">
          Here are a few projects I've worked on, both personal and academic.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
