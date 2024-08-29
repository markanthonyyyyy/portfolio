import { useEffect, useState } from "react"
import NavButton from "../Buttons/NavButton";

const NavigationBar = () => {
    const [showNavigation, setShowNavigation] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selected, setSelected] = useState('Home');
 
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            //Scroll Down
            setShowNavigation(false);
            setIsMenuOpen(false);

        }
        else {
            //Scroll Up
            setShowNavigation(true);

        }
        setLastScrollY(currentScrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };

    }, [lastScrollY])


    window.onscroll = () => {
        let sections = document.querySelectorAll('section');
        sections.forEach(section => {
            let top = window.scrollY;
            let ScrollOffset = section.offsetTop - 80;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= ScrollOffset && top < ScrollOffset + height && id) {
                setSelected(id);
                console.log(id);

            }

        })


    }

    const handleNavItemClicked = (selectedLink: string): void => {
        const element = document.getElementById(selectedLink);
        let offset;
        if (element) {
            if (window.innerWidth < 768){
                if (selected == selectedLink){
                    offset = 56;
                }
                else{
                    offset = 0;
                }
                const offsetPosition = element.offsetTop - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                }); 
            }
            else {
                if (selected == selectedLink){
                    offset = 80;
                }
                else{
                    offset = 0;
                }
                const offsetPosition = element.offsetTop - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                }); 
            }
               
        }
    };

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleSelected = (selected : string) => {
        setSelected(selected);
        setIsMenuOpen(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);    
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const NavItems = [
        {
            title: "Home"
        },
        {
            title: "Services"
        },
        {
            title: "Projects"
        },
        {
            title: "About"
        },
    ]

    return (
        <>
            <div className={`flex h-14 px-5 py-5 border-b w-full items-center border-zinc-700 bg-radial-gradient-gray fixed top-0 z-10 transition-transform duration-500 md:h-20 md:px-10 ${showNavigation ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className="w-1/2 flex items-center transition-all duration-500 ease-in-out">
                    <img src="/Images/Navigation/sample-logo.png" className="w-5 h-auto object-contain scale-100 transition-scale duration-500 cursor-pointer  hover:scale-125 md:w-10" onClick={() => {handleSelected('Home'); handleNavItemClicked('Home');}}/>
                    <span className="ml-2 text-white font-nunito-sans font-bold transition-all duration-500 ease-in-out md:ml-5 md:text-2xl">Ally</span>
                    <span className="ml-1 text-blue-500 font-nunito-sans font-bold transition-all duration-500 ease-in-out md:text-2xl">Dev</span>
                </div>
                <div className="w-1/2 flex justify-end items-center  transition-all duration-500 ease-in-out">
                    <nav className="opacity-0 md:opacity-100 transition-opacity duration-500 ease-in flex items-center">
                        <ul className="flex space-x-14 items-center">
                            {NavItems && NavItems.map((item, index) => (
                                <li  key={index} className={`cursor-pointer text-xs ${selected == item.title ? 'text-blue-500' : 'text-white'} font-nunito-sans font-bold transition-scale duration-500 scale-0 ease-in-out md:scale-100 md:text-base hover:text-blue-500 hover:scale-105`} onClick={() => {handleSelected(item.title); handleNavItemClicked(item.title);}}>
                                    {item.title}
                                </li>
                            ))}
                            <NavButton name="Connect" onClick={()=>{handleSelected('Contact'); handleNavItemClicked('Contact');}} />
                        </ul>
                    </nav>
                </div>
                {/* For Mini Navigation */}
                <div>
                    <img src="/Images/Navigation/menu-logo.png" className={`${isMenuOpen && 'rotate-[360deg]'} cursor-pointer duration-500 block w-5 h-auto object-contain md:hidden z-20 absolute top-[1.1rem] right-4`} onClick={handleMenuClick} />
                </div>
                <div className={`bg-zinc-700 w-60  h-60 z-10 absolute transition-transform duration-500 ${isMenuOpen ? 'translate-x-0 translate-y-0' : 'translate-x-full -translate-y-full'} right-0 top-0 rounded-bl-full`}>
                    <div className="h-full relative">
                        <div className={`cursor-pointer w-12 h-auto absolute top-[3%] left-[14%] flex items-center justify-center transition-scale duration-500 ${isMenuOpen ? 'scale-100 delay-300' : 'scale-0'}`}>
                            <div className="rounded-full w-11 h-11 flex items-center justify-center scale-100 transition-scale duration-500 hover:scale-110">
                                <div className={`bg-blue-500 p-3 w-10 h-auto rounded-full ${selected == 'Home' ? 'border-2' : ''}`} onClick={() => {handleSelected('Home'); handleNavItemClicked('Home');}}>
                                    <img src="/Images/Navigation/home-icon.png" className="w-5 h-auto object-contain"/>
                                </div>
                            </div>
                        </div>
                        <div className={`cursor-pointer w-12 h-auto absolute top-[26%] left-[22%] flex items-center justify-center transition-scale duration-500 ${isMenuOpen ? 'scale-100 delay-[400ms]' : 'scale-0'}`}>
                            <div className="rounded-full w-11 h-11 flex items-center justify-center scale-100 transition-scale duration-500 hover:scale-110">
                                <div className={`bg-blue-500 p-3 w-10 h-auto rounded-full ${selected == 'Services' ? 'border-2' : ''}`} onClick={() => {handleSelected('Services'); handleNavItemClicked('Services');}}>
                                    <img src="/Images/Navigation/services-icon.png" className="w-5 h-auto object-contain"/>
                                </div>
                            </div>
                        </div>
                        <div className={`cursor-pointer w-12 h-auto absolute top-[45%] left-[36%] flex items-center justify-center transition-scale duration-500 ${isMenuOpen ? 'scale-100 delay-500' : 'scale-0'}`}>
                            <div className="rounded-full w-11 h-11 flex items-center justify-center scale-100 transition-scale duration-500 hover:scale-110">
                                    <div className={`bg-blue-500 p-3 w-10 h-auto rounded-full ${selected == 'Projects' ? 'border-2' : ''}`} onClick={() => {handleSelected('Projects'); handleNavItemClicked('Projects');}}>
                                        <img src="/Images/Navigation/projects-icon.png" className="w-5 h-auto object-contain"/>
                                    </div>
                            </div>
                        </div>
                        <div className={`cursor-pointer w-12 h-auto absolute top-[60%] left-[56%] flex items-center justify-center transition-scale duration-500 ${isMenuOpen ? 'scale-100 delay-[600ms]' : 'scale-0'}`}>
                            <div className="rounded-full w-11 h-11 flex items-center justify-center scale-100 transition-scale duration-500 hover:scale-110">
                                <div className={`bg-blue-500 p-3 w-10 h-auto rounded-full ${selected == 'About' ? 'border-2' : ''}`} onClick={() => {handleSelected('About'); handleNavItemClicked('About');}}>
                                    <img src="/Images/Navigation/about-icon.png" className="w-5 h-auto object-contain"/>
                                </div>
                            </div>
                        </div>
                        <div className={`cursor-pointer w-12 h-auto absolute top-[67%] left-[78%] flex items-center justify-center transition-scale duration-500 ${isMenuOpen ? 'scale-100 delay-700' : 'scale-0'}`}>
                            <div className="rounded-full w-11 h-11 flex items-center justify-center scale-100 transition-scale duration-500 hover:scale-110">
                                <div className={`bg-blue-500 p-3 w-10 h-auto rounded-full ${selected == 'Contact' ? 'border-2' : ''}`} onClick={() => {handleSelected('Contact'); handleNavItemClicked('Contact');}}>
                                    <img src="/Images/Navigation/phone-icon.png" className="w-5 h-auto object-contain"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            
            
        
        </>
    )
}

export default NavigationBar