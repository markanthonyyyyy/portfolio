import { useEffect, useState } from "react"
import NavButton from "../Buttons/NavButton";

const NavigationBar = () => {
    const [showNavigation, setShowNavigation] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };

    }, [lastScrollY])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
            }else{
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
            title: "Service"
        },
        {
            title: "Project"
        },
        {
            title: "About"
        },
    ]

    return (
        <>
            <div className={`flex h-14 px-5 py-5 border-b w-full items-center border-zinc-700 bg-zinc-800 fixed top-0 z-10 transition-transform duration-500 md:h-20 md:px-10 ${showNavigation ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className="w-1/2 flex items-center transition-all duration-500 ease-in-out">
                    <img src="/Images/Navigation/sample-logo.png" className="w-5 h-auto object-contain scale-100 transition-scale duration-500  hover:scale-125 md:w-10"/>
                    <span className="ml-2 text-white font-nunito-sans font-bold transition-all duration-500 ease-in-out md:ml-5 md:text-2xl">Ally</span>
                    <span className="ml-1 text-blue-500 font-nunito-sans font-bold transition-all duration-500 ease-in-out md:text-2xl">Dev</span>
                </div>
                <div className="w-1/2 flex justify-end items-center  transition-all duration-500 ease-in-out">
                    <nav className="opacity-0 md:opacity-100 transition-opacity duration-500 ease-in- flex items-center">
                        <ul className="flex space-x-14 items-center">
                            {NavItems && NavItems.map((item, index) => (
                                <li key={index} className="text-xs text-white font-nunito-sans font-medium transition-all duration-500 ease-in-out md:text-base hover:text-blue-500 hover:scale-105">
                                    <a href="/">{item.title}</a>
                                </li>
                            ))}
                            <NavButton name="Contact Me" />
                        </ul>
                        
                    </nav>
                </div>
                {/* For Mini Navigation */}
                <div>
                    <img src="/Images/Navigation/menu-logo.png" className={`${isMenuOpen && 'rotate-[360deg]'} duration-500 block w-5 h-auto object-contain md:hidden z-20 absolute top-[1.1rem] right-4`} onClick={handleMenuClick} />
                </div>
                <div className={`bg-zinc-700 w-60  h-60 z-10 absolute transition-transform duration-500 ${isMenuOpen ? 'translate-x-0 translate-y-0' : 'translate-x-full -translate-y-full'} right-0 top-0 rounded-bl-full `}>

                </div>                
            </div>
            
            
        
        </>
    )
}

export default NavigationBar