const Footer = () => {
    const currentYear = new Date().getFullYear();
    const Socials = [
        {
            title: "Facebook",
            url: 'http://www.facebook.com/acolosus',
            name: 'acolosus',
            white_icon: '/Images/Footer/facebook-icon-white.png',
            normal_icon: '/Images/Footer/facebook-icon-colored.png'
        },
        {
            title: "X",
            url: 'http://x.com/Tunyeng1',
            name: 'Tunyeng1',
            white_icon: '/Images/Footer/x-icon-white.png',
            normal_icon: '/Images/Footer/x-icon-colored.png'
            
        },
        {
            title: "Instagram",
            url: 'http://www.instagram.com/_markanthonyyyyyyy',
            name: '_markanthonyyyyyyy',
            white_icon: '/Images/Footer/instagram-icon-white.png',
            normal_icon: '/Images/Footer/instagram-icon-colored.png'
        },
        {
            title: "Linked In",
            url: 'http://www.linkedin.com/in/mark-anthony-aguilar-879612260',
            name: 'Mark Anthony Aguilar',
            white_icon: '/Images/Footer/linkedin-icon-white.png',
            normal_icon: '/Images/Footer/linkedin-icon-colored.png'
        },
        {
            title: "Github",
            url: 'https://github.com/markanthonyyyyy',
            name: 'markanthonyyyyy',
            white_icon: '/Images/Footer/github-icon-white.png',
            normal_icon: '/Images/Footer/github-icon-colored.png'
        },
    ]

  return (
    <>
        <div className="bg-radial-gradient-gray w-full h-auto  border-zinc-500 flex flex-col">
            <div className="flex flex-col md:flex-row">
                <div className="h-full p-8 w-full md:p-12 md:w-2/5">
                    <div className="text-white font-nunito-sans font-bold text-2xl md:text-4xl">Mark <span className="font-nunito-sans text-blue-500 font-bold">Anthony</span></div>
                    <div className="mt-4 font-nunito-sans text-white text-sm md:text-base">Thank you for visiting my website! I appreciate you taking the time to explore my work. If you have any questions or would like to collaborate on a project, feel free to reach out. Let's stay connected!</div>
                    <div className="flex items-center mt-5"> 
                        <img src="/Images/Footer/email-icon.png" className={`w-6 md:w-8 h-auto object-contain mr-2`}/>
                        <span className="text-white font-nunito-sans text-sm md:text-base">aguilar.markanthony.b.5340@gmail.com</span>
                    </div>
                </div>
                <div className="h-auto w-full md:w-3/5 md:border-l border-zinc-500  p-5 flex justify-between flex-col md:my-4 flex-wrap md:flex-row">
                    <div className="px-3 md:mt-4">
                        <p className="font-nunito-sans text-white font-bold text-lg md:text-xl mb-2">Socials</p>
                        <div className="flex flex-col flex-wrap h-auto md:h-52 w-auto gap-y-5 md:gap-y-0 md:gap-x-14">
                            {Socials && Socials.map((item, index) => (
                                <div className="flex items-center mt-2" key={index}> 
                                    <a href={item.url} target="_blank">
                                        <img src={item.white_icon} className={`w-8 md:w-10 h-auto object-contain mr-3`}/>
                                    </a>
                                    <span className="text-white font-nunito-sans text-sm md:text-base">{item.name}</span>
                                </div> 
                            ))}
                        </div>                    
                    </div>
                    <div className="flex justify-center items-center pt-10 md:pt-0">
                        <img src='/Images/Navigation/sample-logo.png' className='w-40 h-auto object-contain opacity-20 md:w-56 md:mr-10'/>
                    </div>
                </div>
            </div>
            <footer className="bg-transparent items-center flex justify-center text-white flex-col">
                <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="font-nunito-sans text-xs md:text-sm font-medium p-3 ">
                    © {currentYear} All Rights Reserved - Mark Anthony
                </div>
            </footer>
        </div>
        
    </>

  )
}

export default Footer