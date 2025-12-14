import { useState, Activity } from "react";
import { useScrolled } from "../hooks/useScrolled";


interface NavItem { 
    id: string; 
    label: string; 
    href: string 
};

const NAV_ITEMS: NavItem[] = [
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "techstack", label: "Tech Stack", href: "#techstack" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "contact", label: "Contact", href: "#contact" },
];


const Header = () => {
    const [isShowingSidebar, setIsShowingSidebar] = useState(false);
    
    const scrolled = useScrolled(100);

    return (
        <header className={`text-(--primary-t-color) bg-(--dark-color) transition-all duration-500 ease-out
    ${scrolled
      ? "header-fixed bg-[hsl(60deg_33.33%_1.18%/42%)]"
      : "bg-transparent"
    }`}>
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <a
                        href="#"
                        className="text-2xl font-bold tracking-tight text-[--white-color]"
                    >
                        Krishan
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {
                            NAV_ITEMS.map((item) => (
                                <a
                                    onClick={() => setIsShowingSidebar(false)}
                                    href={item.href}
                                    key={item.id}
                                     className="link-underline py-2 font-semibold text-(--white-color) hover:text-(--primary-color) transition-colors "
                                >
                                    {item.label}
                                </a>
                            ))
                        }
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-[--white-color]"
                        onClick={() => setIsShowingSidebar(true)}
                    >
                        {/* Bars Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                </nav>
            </div>

            {/* Mobile Sidebar */}
            <Activity mode={isShowingSidebar ? "visible" : "hidden"}>
                <aside className="bg-(--dark-grey-color) fixed right-0 top-0 min-h-screen w-64 p-6 z-50">

                    {/* Close Button */}
                    <button
                        className="btn mb-5 text-(--white-color) bg-(--danger-color) rounded-xs text-sm p-2"
                        onClick={() => setIsShowingSidebar(false)}
                    >
                        {/* X Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Sidebar Nav */}
                    <nav className="flex flex-col gap-2 text-lg my-4">
                        {
                            NAV_ITEMS.map((item) => (
                                <a
                                    onClick={() => setIsShowingSidebar(false)}
                                    href={item.href}
                                    key={item.id}
                                    className="link-underline text-(--white-color) p-2 font-semibold hover:text-(--primary-color) transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))
                        }
                    </nav>
                </aside>
            </Activity>
        </header >
    );
}


export default Header;