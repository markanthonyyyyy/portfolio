
const ProjectsScreen = () => {
  return (
    <section id="Projects" className="text-white w-full h-full bg-zinc-800 flex flex-col items-center justify-center">
      <p className="font-nunito-sans text-white text-2xl font-bold mb-6 text-center md:text-4xl md:mb-5" data-aos="fade-right" >My <span className="text-blue-500">Projects</span></p>
      <p className="text-center px-56 mb-10">Here are some of the projects I've worked on, showcasing my skills in web development, coding, and problem-solving. Each project highlights my ability to create effective, functional, and user-friendly solutions.</p>
      <div className="flex justify-evenly font-nunito-sans font-bold w-fit relative bg-zinc-900 border-2 border-zinc-700 p-5 rounded-full space-x-32 px-10">
        <div className="z-20">Web Development</div>
        <div className="z-20">All Projects</div>
      <div className="z-20">Mobile Development</div>
        <span className="bg-blue-500 absolute h-full rounded-full w-56 z-10 top-0 right-[15.5rem] transition-all ease-linear duration-300"></span>
      </div>
    </section>
  )
}

export default ProjectsScreen