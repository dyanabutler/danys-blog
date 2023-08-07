import React from "react"
import Image from "next/image"

const skills = [
  { skill: "FIGMA" },
  { skill: "Procreate" },
  { skill: "HTML" },
  { skill: "TypeScript" },
  { skill: "Next.Js" },
  { skill: "Tailwind CSS" },
  { skill: "Javascript" },
  { skill: "SQL" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-indigo-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Dyana and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> web engineer
              based in Boston, MA.
            </p>
           
            
            <br />
            <p>
            From writing to content creation and web design, I embrace new experiences and actively pursue continuous learning. So, why not embark on the journey of creating a website while I expand my skills?
            </p>
            <br />
            <p>
              I have a passion for technology and desire to{" "}
              <span className="font-bold text-violet-500">
                always push the limits of what is possible.
              </span>{" "}
              I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={300}
              height={300}
              className="hidden md:block md:relative md:top-2 md:left-20 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
