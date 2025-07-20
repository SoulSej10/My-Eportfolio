
'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-white to-gray-100"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Hi, I&apos;m <span className="text-blue-600">Jess Tahil</span>
      </h1>
      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-6">
        Aspiring Full Stack Developer & IT Graduate passionate about creating user-friendly digital experiences.
      </p>

      <a
        href="/resume.pdf" // Replace this with your actual CV link later
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition"
      >
        Download CV
      </a>
    </section>
  )
}
