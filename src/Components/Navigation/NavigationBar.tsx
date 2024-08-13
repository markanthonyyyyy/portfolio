import { useEffect, useState } from "react"
import NavButton from "../Buttons/NavButton";

const NavigationBar = () => {
    const [showNavigation, setShowNavigation] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
                <div className="w-1/2 flex items-center">
                    <img src="/Images/Navigation/sample-logo.png" className="w-5 h-auto object-contain md:w-10"/>
                    <span className="ml-2 text-white font-nunito-sans font-bold md:ml-5 md:text-2xl">Ally</span>
                    <span className="ml-1 text-blue-500 font-nunito-sans font-bold md:text-2xl">Dev</span>
                </div>
                <div className="w-1/2 flex justify-end items-center gap-14">
                    <nav className="hidden md:block">
                        <ul className="flex space-x-16 ">
                            {NavItems && NavItems.map((item) => (
                                <li className="text-white font-nunito-sans text-lg font-medium">{item.title}</li>
                            ))}
                        </ul>
                    </nav>
                    <NavButton name="Contact Me"/>
                </div>
            </div>
        </>
    )
}

export default NavigationBar