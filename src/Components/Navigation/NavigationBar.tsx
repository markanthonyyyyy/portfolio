import { useEffect, useState } from "react"
import NavButton from "../Buttons/NavButton";

const NavigationBar = () => {
    const [showNavigation, setShowNavigation] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            //Scroll Down
            setShowNavigation(false);
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
            <div className={`flex h-14 px-5 py-5 border-b overflow-hidden items-center border-zinc-700 bg-zinc-800 sticky top-0 z-10 transition-transform duration-500 md:h-20 md:px-10 ${showNavigation ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className="w-1/2 flex items-center transition-all duration-500 ease-in-out">
                    <img src="/Images/Navigation/sample-logo.png" className="w-5 h-auto object-contain scale-100 transition-scale duration-500  hover:scale-125 md:w-10"/>
                    <span className="ml-2 text-white font-nunito-sans font-bold transition-all duration-500 ease-in-out md:ml-5 md:text-2xl">Ally</span>
                    <span className="ml-1 text-blue-500 font-nunito-sans font-bold transition-all duration-500 ease-in-out md:text-2xl">Dev</span>
                </div>
                <div className="w-1/2 flex justify-end items-center  transition-all duration-500 ease-in-out">
                    <nav className="opacity-0 md:opacity-100 transition-opacity duration-500 ease-in- flex items-center">
                        <ul className="flex space-x-14 items-center">
                            {NavItems && NavItems.map((item, index) => (
                                <li key={index} className="text-xs text-white font-nunito-sans font-medium transition-all duration-500 ease-in-out md:text-base"><a href="/">{item.title}</a></li>
                            ))}
                            <NavButton name="Contact Me" />
                        </ul>
                        
                    </nav>
                    
                </div>
                <img src="/Images/Navigation/menu-logo.png" className={`${isMenuOpen && 'rotate-[360deg]'} duration-500 block w-5 h-auto object-contain ml-5 md:hidden`} onClick={handleMenuClick}/>

            </div>

        </>
    )
}

export default NavigationBar