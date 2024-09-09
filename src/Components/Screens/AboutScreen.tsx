
const AboutScreen = () => {

  const Skills = ['JavaScript', 'Java', 'PHP', 'HTML', 'CSS', 'React', 'React Native', 'Android Studio', 'Laravel', 'Inertia', 'Tailwind CSS', 'Git'];


  return (
    <section id='About' className="text-white w-full bg-zinc-800 p-5 md:py-14 md:px-28  flex flex-col h-screen">
      <p className="font-nunito-sans text-white text-2xl md:text-4xl font-bold  mb-2 md:mb-14 text-center">About <span className="text-blue-500">Me</span></p>
      <div className=" flex">
        {/* IMAGE */}
        <div className="h-full w-2/5 flex items-center justify-center ">
          <div className="relative bg-zinc-700 w-[30rem] h-[30rem] rounded-lg">
            <img src="/Images/About/person-icon.png" className="w-96 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
          </div>
        </div>
        {/* CONTENT */}
        <div className="h-full w-3/5 px-5">
          <p className="text-white text-lg font-nunito-sans mb-5">Hi, I'm <span className="text-blue-500 font-bold">Mark Anthony</span>, a 23-year-old <span className="text-blue-500 font-bold">Software Developer</span> passionate about crafting innovative solutions through code. With a strong background in software development, I thrive on designing, developing, and optimizing applications that solve real-world problems. My skill set includes various programming languages, frameworks, and technologies that I use to bring ideas to life efficiently and creatively.
            Whether it's building applications from scratch, improving performance, or exploring new tech trends, I'm always eager to learn, grow, and contribute to meaningful projects.
          </p>
          <div className="flex py-4 font-nunito-sans ">
            <div className="flex-1 flex items-center">
              <img src="/Images/About/digits-icon.png" className="w-12 h-12 mr-5" alt="Digits" />
              <div>
                <p className="text-xl font-bold mb-2">Digits Trading Corporation</p>
                <p>Associate Software Developer</p>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <p className="text-xl font-bold">2023 - Present</p>
            </div>
          </div>
          <div className="flex py-4 font-nunito-sans border-t">
            <div className="flex-1 flex items-center">
              <div className="w-12 h-12 mr-5">
                <img src="/Images/About/accenture-icon.png" className="w-14 h-14" alt="Accenture" />
              </div>
              <div>
                <p className="text-xl font-bold mb-2">Accenture</p>
                <p>Student | Intern</p>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <p className="text-xl font-bold">2023</p>
            </div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="mt-10 flex flex-wrap gap-2">
            {Skills.map((item, index) => (
              <div key={index} className="text-blue-300 font-semibold border-2 border-blue-300 w-fit py-2 px-3 rounded-lg">
                  {item}
              </div>
            ) )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutScreen