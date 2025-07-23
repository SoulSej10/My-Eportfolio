'use client'

import Image from "next/image"

const skills = [
  { name: "ASP.NET", src: "/images/aspnet-svgrepo-com.svg" },
  { name: ".NET 7 & 8", src: "/images/dotnet-svgrepo-com.svg" },
  { name: "RESTful API", src: "/images/rest-api-svgrepo-com.svg" },
  { name: "Django", src: "/images/django-icon-svgrepo-com.svg" },
  { name: "Visual Studio", src: "/images/visual-studio-svgrepo-com.svg" },
  { name: "VS Code", src: "/images/visual-studio-code-svgrepo-com.svg" },
  { name: "Postman", src: "/images/postman-icon-svgrepo-com.svg" },
  { name: "Swagger", src: "/images/swagger-svgrepo-com.svg" },
  { name: "Git", src: "/images/git-svgrepo-com.svg" },
  { name: "GitHub", src: "/images/github-142-svgrepo-com.svg" },
  { name: "GitLab", src: "/images/gitlab-svgrepo-com.svg" },
  { name: "CI/CD", src: "/images/ci-cd-svgrepo-com.svg" },
  { name: "SQL", src: "/images/sql-database-generic-svgrepo-com.svg" },
  { name: "MongoDB", src: "/images/mongodb-svgrepo-com.svg" },
  { name: "Firebase", src: "/images/firebase-svgrepo-com.svg" },
  { name: "AWS", src: "/images/aws-svgrepo-com.svg" },
  { name: "HTML", src: "/images/html-5-svgrepo-com.svg" },
  { name: "CSS", src: "/images/css-3-svgrepo-com.svg" },
  { name: "JavaScript", src: "/images/javascript-svgrepo-com.svg" },
  { name: "C#", src: "/images/c-sharp-800x800.png" },
  { name: "Python", src: "/images/python-svgrepo-com.svg" },
  { name: "Bootstrap", src: "/images/bootstrap-svgrepo-com.svg" },
  { name: "Tailwind", src: "/images/tailwind-svgrepo-com.svg" },
  { name: "Shadcn UI", src: "/images/shadcn-logo_svgstack_com_31341753251234.svg" },
  { name: "Flutter", src: "/images/flutter-svgrepo-com.svg" },
  { name: "Xamarin", src: "/images/xamarin-svgrepo-com.svg" },
  { name: "Figma", src: "/images/figma-svgrepo-com.svg" },
  { name: "Canva", src: "/images/canva-svgrepo-com.svg" },
  { name: "Azure", src: "/images/azure-svgrepo-com.svg" },
  { name: "Agile", src: "/images/agile-svgrepo-com.svg" },
  { name: "Scrum", src: "/images/scrum-svgrepo-com.svg" },
]

export default function SkillsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">💻 Skills & Technologies</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          I&apos;m well-versed in a diverse set of tools, programming languages, frameworks, and development practices that enable me to build full-stack applications, collaborate efficiently with teams, and deliver high-quality solutions.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center justify-center mt-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center h-24 p-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 rounded-xl shadow-sm hover:shadow-md"
            >
              <Image
                src={skill.src}
                alt={skill.name}
                width={48}
                height={48}
                className="object-contain"
              />
                <span className="text-sm text-gray-600 mt-2 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                  {skill.name}
                </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
