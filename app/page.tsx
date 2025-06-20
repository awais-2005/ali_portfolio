"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, ExternalLink, Code, Database, Globe, Blocks } from "lucide-react"
import Image from "next/image"
import TypingAnimation from "@/components/ui/TypingAnimation"

export default function Portfolio() {
  const skills = {
    "Programming Languages": ["C++", "C#", "Java", "JavaScript", "C", "HTML/CSS"],
    "Web Development": ["Frontend Development", "HTML5", "CSS3", "JavaScript ES6+"],
    Database: ["MySQL", "File-based Systems"],
    "Tools & IDEs": ["Visual Studio", "VS Code", "Eclipse", "Git"],
    "AI & Automation": ["Prompt Engineering", "ChatGPT", "Copilot", "Professional AI Usage"],
    "Areas of Interest": ["Blockchain Development", "Smart Contracts", "DApps", "UI/UX Design"],
  }

  const projects = [
    {
      title: "Restaurant Management System",
      description:
        "A comprehensive console/GUI-based system for managing restaurant operations including orders, inventory, and billing.",
      tech: ["C++", "C#", "OOP", "File Handling"],
      features: ["Order Management", "Inventory Tracking", "Billing System", "User-friendly Interface"],
    },
    {
      title: "Library Management System",
      description: "Digital solution for managing book records, student issues, returns, and library operations.",
      tech: ["C++", "Java", "MySQL", "Data Structures"],
      features: ["Book Management", "Student Records", "Issue/Return System", "Search Functionality"],
    },
    {
      title: "Bank Management System",
      description: "Simulated banking application with core banking operations and account management features.",
      tech: ["C++", "Java", "Data Structures", "File I/O"],
      features: ["Account Management", "Deposits & Withdrawals", "Transaction History", "Security Features"],
    },
    {
      title: "Game Development Projects",
      description: "Classic games including Tic Tac Toe with AI and Snake game with keyboard controls.",
      tech: ["C++", "JavaScript", "HTML5 Canvas", "Game Logic"],
      features: ["AI Implementation", "Keyboard Controls", "Score System", "Responsive Design"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  <TypingAnimation text="Ali Haider" speed={120} />
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 font-medium">
                  Software Engineering Student & Aspiring Developer
                </p>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  Passionate about blockchain technology and frontend development, with strong programming skills and a
                  drive for innovation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 bg-slate-800 text-white hover:bg-slate-700 hover:text-white"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-2xl opacity-20 scale-110"></div>
                <Image
                  src="/images/ali-profile.png"
                  alt="Ali Haider"
                  width={300}
                  height={300}
                  className="relative rounded-full border-4 border-slate-700 shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-800">About Me</h2>
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur">
            <CardContent className="p-8">
              <p className="text-lg text-slate-600 leading-relaxed text-center">
                A motivated Software Engineering student with strong programming skills in C++, C#, Java, and JavaScript,
                seeking an internship in Blockchain or Frontend Web Development. I have hands-on experience building
                management systems, games, and web projects with a passion for problem-solving and learning new
                technologies. My goal is to contribute to innovative projects while expanding my expertise in
                cutting-edge technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-slate-700/50 border-slate-600 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    {category === "Programming Languages" && <Code className="h-5 w-5 text-emerald-400" />}
                    {category === "Web Development" && <Globe className="h-5 w-5 text-cyan-400" />}
                    {category === "Database" && <Database className="h-5 w-5 text-purple-400" />}
                    {category === "Tools & IDEs" && <ExternalLink className="h-5 w-5 text-orange-400" />}
                    {category === "AI & Automation" && <Blocks className="h-5 w-5 text-pink-400" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-600 text-slate-100 hover:bg-slate-500">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-800">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur"
            >
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education & Goals Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Education */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-800">Bachelor's in Software Engineering</h3>
                    <p className="text-slate-600">
                      Currently pursuing degree with focus on software development and emerging technologies at CASE University Islamabad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career Goals */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  Internship Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg border border-emerald-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Blockchain Development</h3>
                    <p className="text-slate-600 text-sm">Smart Contracts, DApps, Solidity, Web3 Technologies</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-cyan-50 to-purple-50 rounded-lg border border-cyan-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Frontend Web Development</h3>
                    <p className="text-slate-600 text-sm">React, JavaScript, UI/UX Design, Modern Web Technologies</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-yellow-50 to-green-50 rounded-lg border border-yellow-100">
                    <h3 className="font-semibold text-slate-800 mb-2">AI & Automation</h3>
                    <p className="text-slate-600 text-sm">Applying AI tools professionally, prompt engineering, and automation in real-world projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-slate-300 mb-12 max-w-2xl mx-auto text-lg">
            I'm actively seeking internship opportunities in blockchain and frontend development. Let's discuss how I
            can contribute to your team!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => window.open("mailto:alihaiderrana846@gmail.com")}
            >
              <Mail className="mr-2 h-4 w-4" />
              alihaiderrana846@gmail.com
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 bg-slate-800 text-white hover:bg-slate-700 hover:text-white"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=%2B923170727716&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Replace <Phone /> with WhatsApp icon */}
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045C2.101 6.495 6.592 2 12.149 2c2.652 0 5.149 1.037 7.022 2.916A9.825 9.825 0 0122.298 12c-.003 5.552-4.494 10-9.947 10zm8.413-17.413A11.815 11.815 0 0012.149 0C5.453 0 0 5.373 0 12.045c0 2.124.557 4.199 1.615 6.032L.057 23.954a1 1 0 001.225 1.225l5.957-1.561A11.822 11.822 0 0012.149 24c6.697 0 12.149-5.373 12.149-11.999 0-3.193-1.246-6.197-3.535-8.413z"/></svg>
                0317-0727716
              </a>
            </Button>
          </div>

          <div className="text-slate-400">
            <p>© 2024 Ali Haider. Ready to innovate and learn.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
