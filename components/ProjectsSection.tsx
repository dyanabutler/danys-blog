import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Writing",
    description:
      "Technology, design, finance, and really whatever. I write about the things I'm learning and reading about, as well as musings that might occur after a glass of wine.",
    image: "/deardiary.png",
    github: "https://github.com/dyanabutler/writing-samples",
    link: "/blog",
  },
  {
    name: "Gallery",
    description: "A museum of my work as a digital artist. From original designs using Procreate to SVG Logos using Adobe Illustrator.",
    image: "/gallery_thumbnail.png",
    github: "https://github.com/dyanabutler/gallery",
    link: "/gallery",
  },
  {
    name: "UX/UI Design",
    description:
      "Check out my creations, all crafted using tools like Figma, Next.JS, Tailwind CSS, and Sveltekit! [Publication still a work in progress] But hey, take a look around this site for now made by moi! ",
    image: "/webdev.png",
    github: "https://github.com/dyanabutler",
    link: "https://dribbble.com/dyanadesign",
  },
  
 
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
