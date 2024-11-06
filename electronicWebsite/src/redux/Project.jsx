// src/components/Projects.js
import React from "react";

const projects = [
  {
    title: "Project One",
    description: "Nike-ecommerce project",
    image: "https://via.placeholder.com/300",
    demoLink: "https://neke-store-luk.vercel.app/", 
    repoLink: "https://github.com/Lukas28-cell/nike-project", 
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "https://via.placeholder.com/300", 
    demoLink: "https://example.com", 
    repoLink: "https://github.com/yourusername/project-two", 
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "./public/image/HeroImg.jpg", 
    demoLink: "https://example.com",
    repoLink: "https://github.com/yourusername/project-three", 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 ">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-500 hover:underline">
                    Live Demo
                  </a>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-600 hover:underline">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;