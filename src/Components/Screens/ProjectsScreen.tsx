import { useState } from "react";
import Lottie from 'lottie-react';
import animationData2 from './../../../public/Animations/project-animation.json'

const ProjectsScreen = () => {

  const [activeTab, setActiveTab] = useState('All');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

  };

  const SelectedClass = {
    All: "left-1/2 transform -translate-x-1/2 w-48",
    Mobile: "left-full transform -translate-x-full w-56",
    Web: "left-0 w-56",
    
  }[activeTab as "All" | "Mobile" | "Web"];


  return (
    <section id="Projects" className="text-white w-full h-screen bg-zinc-800 flex flex-col overflow-hidden px-14 py-14">
      <p className="font-nunito-sans text-white text-2xl font-bold mb-6 text-center md:text-4xl md:mb-5" data-aos="fade-right" >My <span className="text-blue-500">Projects</span></p>
      <p className="text-center px-40 mb-10">Here are some of the projects I've worked on, showcasing my skills in web development, coding, and problem-solving. Each project highlights my ability to create effective, functional, and user-friendly solutions.</p>
      {/* Tab Button */}
      <div className="flex items-center justify-center">
        <div className="flex font-nunito-sans font-bold w-fit  relative bg-zinc-900 border-2 border-zinc-700 rounded-full mb-10">
          <div className="z-20 px-10 py-4 select-none cursor-pointer text-center text-sm" onClick={() => {handleTabChange('Web')}}>Web Development</div>
          <div className="z-20 px-10 py-4 mx-10 select-none cursor-pointer text-center ml-14 text-sm" onClick={() => {handleTabChange('All')}}>All Projects</div>
          <div className="z-20 px-10 py-4 select-none cursor-pointer text-center text-sm" onClick={() => {handleTabChange('Mobile')}}>Mobile Development</div>
          <div className={`bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-bl  absolute h-full top-0 rounded-full transition-all ease-linear duration-300 ${SelectedClass} text-blue-500`}></div>
        </div>
      </div>
      {/* Content */}
      <div className="w-full h-fit flex">
        <div className="w-1/3 h-96 ">
          <div className="flex items-center">
              <Lottie animationData={animationData2} loop={true} style={{height: 50, width: 50}}/>
              <p className="font-nunito-sans font-bold text-xl ml-3 select-none">Projects</p>
          </div>
          <div>

          </div>
        </div>
        <div className="w-2/3 h-full bg-slate-300">

        </div>
      </div>
      </section>
  )
}

export default ProjectsScreen