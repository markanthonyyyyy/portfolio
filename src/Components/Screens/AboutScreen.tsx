
const AboutScreen = () => {

  const Skills = ['JavaScript', 'Java', 'PHP', 'HTML', 'CSS', 'React', 'React Native', 'Android Studio', 'Laravel', 'Inertia', 'Tailwind CSS', 'Git'];


  return (
    <section id='About' className="text-white w-full bg-zinc-800 p-5 pb-28 md:pb-32 md:py-16 md:px-28  flex flex-col h-full overflow-hidden">
      <p className="font-nunito-sans text-white text-2xl font-bold mb-6 text-center md:text-4xl md:mb-14" data-aos="fade-right" >About <span className="text-blue-500">Me</span></p>
      <div className=" flex flex-col md:flex-row justify-center items-center">
        {/* IMAGE */}
        <div className="md:h-full w-56 md:w-2/5 mb-7 flex items-center justify-center md:mb-0" data-aos="fade-right" data-aos-delay="500"> 
          <div className="relative bg-zinc-700 h-[16rem] w-[30rem] md:h-[30rem] rounded-lg">
            <img src="/Images/About/person-icon.png" className="w-52 md:w-96 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
          </div>
        </div>
        {/* CONTENT */}
        <div className="h-full  md:w-3/5 px-5">
          <p className="text-white text-sm font-nunito-sans mb-5 md:text-lg" data-aos="fade-left" data-aos-delay="700">Hi, I'm <span className="text-blue-500 font-bold">Mark Anthony</span>, a 23-year-old <span className="text-blue-500 font-bold">Software Developer</span> passionate about crafting innovative solutions through code. With a strong background in software development, I thrive on designing, developing, and optimizing applications that solve real-world problems. My skill set includes various programming languages, frameworks, and technologies that I use to bring ideas to life efficiently and creatively.
            Whether it's building applications from scratch, improving performance, or exploring new tech trends, I'm always eager to learn, grow, and contribute to meaningful projects.
          </p>
          <div data-aos="fade-left" data-aos-delay="900">
            <div className="flex py-4 font-nunito-sans ">
              <div className="flex-1 flex items-center">
                <img src="/Images/About/digits-icon.png" className="w-10 h-10 md:w-12 md:h-12 mr-5" alt="Digits" />
                <div>
                  <p className="text-sm md:text-xl font-bold mb-2">Digits Trading Corporation</p>
                  <p className="text-xs md:text-base">Associate Software Developer</p>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <p className="text-sm md:text-xl font-bold">2023 - Present</p>
              </div>
            </div>
            <div className="flex py-4 font-nunito-sans border-t">
              <div className="flex-1 flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 mr-5">
                  <img src="/Images/About/accenture-icon.png" className="w-12 h-12 md:w-14 md:h-14" alt="Accenture" />
                </div>
                <div>
                  <p className="text-sm md:text-xl font-bold mb-2">Accenture</p>
                  <p className="text-xs md:text-base">Student | Intern</p>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <p className="text-sm md:text-xl font-bold">2023</p>
              </div>
            </div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="mt-10 flex flex-wrap gap-2" data-aos="fade-left" data-aos-delay="1100">
            {Skills.map((item, index) => (
              <div key={index} className="text-blue-300 font-semibold border md:border-2 text-sm md:text-base border-blue-300 w-fit py-2 px-3 rounded-lg">
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