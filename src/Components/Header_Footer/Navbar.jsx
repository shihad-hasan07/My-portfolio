import { useState, useRef, useEffect } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='py-5 px-6 md:px-16 lg:px-32 border-b-[1px] border-b-[#332142] flex items-center justify-between gap-9 w-full z-50 fixed top-0 text-white bg-[#150c1d]'>

            <div>
                <p className='text-xl lg:text-xl xl:text-2xl hover:drop-shadow-2xl font-navLogo tracking-widest'>
            
                        <a href="#home">{"< Shihad />"}</a>
                </p>
            </div>

            {/* Desktop Menu */}
            <div className='hidden lg:flex items-center'>
                <ul className='flex lg:gap-1 xl:gap-2 text-lg font-tartiaray font-bold'>
                    {["Home", "About Me", "Skills", "Projects", "Contact"].map((item) => (
                        <li key={item}>
                            <a className='hover:border-b tracking-wide hover:bg-[#1b1249] px-4 py-2 rounded-md' href={`#${item.toLowerCase()}`}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Icon & Dropdown */}
            <div className="lg:hidden relative" ref={menuRef}>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <RiCloseLine size={28} /> : <RiMenu3Fill size={28} />}
                </button>

                {/* Dropdown Menu with Smooth Transition & Auto-Close */}
                <div
                    className={`absolute right-0 mt-3 w-44 bg-[#1b1249] shadow-lg rounded-lg py-2 z-50 
                    transition-all duration-300 ease-in-out 
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
                >
                    <ul className="text-white text-lg font-tartiaray font-semibold flex flex-col">
                        {["Home", "About Me", "Skills", "Projects", "Contact"].map((item) => (
                            <li key={item} onClick={() => setMenuOpen(false)}>
                                <a className="block px-4 py-2 hover:bg-[#332142] rounded-md" href={`#${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
