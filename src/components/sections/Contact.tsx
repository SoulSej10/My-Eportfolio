'use client'

import { Mail, Github, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <p className="text-gray-700 text-lg mb-10">
          Whether you want to collaborate or just say hi, my inbox is always open!
        </p>

        <div className="flex justify-center space-x-4">
          <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="h-5 w-5" /> Email
            </Button>
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="h-5 w-5" /> GitHub
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
