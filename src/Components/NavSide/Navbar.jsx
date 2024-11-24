import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import Logo from "../../assets/Icons/NavSide/Logo.png";
import HamBurger from "../../assets/Icons/NavSide/HamBurger.svg";
import Search from "../../assets/Icons/NavSide/search.svg";
import Order from "../../assets/Icons/NavSide/Order.svg";
import Cart from "../../assets/Icons/NavSide/Cart.svg";
import Profile from "../../assets/Icons/NavSide/Profile.svg";
import Cross from "../../assets/Icons/NavSide/Cross.svg";
import Address from "../../assets/Icons/NavSide/Address.svg";
import Favourites from "../../assets/Icons/NavSide/Favourites.svg";
import Reward from "../../assets/Icons/NavSide/Reward.svg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 z-50" style={{backgroundColor:'#f3f4ff'}}>
            <div className="bg-dcBackground md:h-[85px] px-4 lg:px-6 py-3 flex justify-between items-center mx-auto relative">
                {/* Mobile Menu */}
                <div className="flex md:hidden grow">
                    <button
                        className="inline-flex p-2 rounded-md hover:bg-gray-100"
                        onClick={toggleMenu}
                        aria-label="Open Menu"
                    >
                        <img
                            alt="home"
                            loading="lazy"
                            width="25"
                            height="21"
                            decoding="async"
                            src={HamBurger}
                            style={{ color: "transparent" }}
                        />
                    </button>
                    <div
                        id="sideWrapper"
                        className={`fixed top-0 left-0 bg-white w-3/4 h-full z-40 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <div className="w-full h-full flex flex-col">
                            <button
                                className="w-8 ml-auto pt-2 pr-2 cursor-pointer"
                                onClick={toggleMenu}
                                aria-label="Close Menu"
                            >
                                <img
                                    alt="cross-ic"
                                    fetchpriority="high"
                                    width="29"
                                    height="29"
                                    decoding="async"
                                    src={Cross}
                                    style={{ color: "transparent" }}
                                />
                            </button>
                            <div className="w-24 mt-4 ml-6">
                                <img
                                    alt="Logo"
                                    fetchpriority="high"
                                    width="157"
                                    height="70"
                                    decoding="async"
                                    src={Logo}
                                    style={{ color: "transparent" }}
                                />
                            </div>
                            <div id="divider" className="border my-4"></div>
                            {[
                                { to: "/orders", label: "Orders", icon: Order },
                                { to: "/favourites", label: "Favourites", icon: Favourites },
                                { to: "/addresses", label: "Addresses", icon: Address },
                                { to: "/rewards", label: "Rewards", icon: Reward },
                                { to: "/help-center", label: "Help", icon: Address },
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    className="flex justify-between items-center px-6 py-1 cursor-pointer ease-in-out transition-all duration-300 hover:bg-gray-100"
                                    to={item.to}
                                    onClick={toggleMenu} // Close menu on link click
                                >
                                    <div className="flex items-center">
                                        <div className="w-9 h-9 mr-2 bg-primaryColor bg-opacity-25 p-2 flex justify-center rounded">
                                            <img
                                                alt={item.label}
                                                fetchpriority="high"
                                                width="23"
                                                height="18"
                                                decoding="async"
                                                src={item.icon}
                                                style={{ color: "transparent" }}
                                            />
                                        </div>
                                        <span className="block font-medium text-sm text-dcDark">{item.label}</span>
                                    </div>
                                </Link>
                            ))}
                            <div id="divider" className="border my-4"></div>
                            <div className="pl-6">
                                <nav className="flex flex-col text-sm">
                                    {["Home", "About", "Services", "Blog", "Contact"].map((link, index) => (
                                        <Link
                                            key={index}
                                            className="p-2 text-dcDark active:text-slate-900 no-underline ease-in-out transition-all duration-300 hover:text-slate-900"
                                            to={`/${link.toLowerCase()}`}
                                            onClick={toggleMenu} // Close menu on link click
                                        >
                                            {link}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <Link className="w-1/3 grow" to="/">
                    <img
                        alt="Logo"
                        loading="lazy"
                        width="100"
                        height="45"
                        decoding="async"
                        className="xsm:my-0 xsm:mx-auto md:m-0"
                        style={{ color: "transparent" }}
                        src={Logo}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden w-1/3 justify-center items-center md:flex md:grow">
                    <div className="inline-flex mr-2 cursor-pointer items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none">
                        <img
                            alt="home"
                            loading="lazy"
                            width="25"
                            height="21"
                            decoding="async"
                            src={HamBurger}
                            onClick={()=>setIsMenuOpen(!isMenuOpen)}
                            style={{ color: "transparent" }}
                        />
                    </div>
                    {
                        isMenuOpen ?
                        <nav>
                            {["Home", "About", "Services", "Blog", "Contact"].map((link, index) => (
                                <Link
                                    key={index}
                                    className="p-2 text-dcDark active:text-slate-900 no-underline ease-in-out transition-all duration-300 hover:text-slate-900"
                                    to={`/${link==='Home'?"":link.toLowerCase()}`}
                                >
                                    {link}
                                </Link>
                            ))}
                        </nav>
                        :
                        <div className="w-[400px] ease-linear transition-all duration-500">
                            <div className="relative">
                                <span className="absolute top-1/4 pl-3">
                                    <img
                                        alt="Search Icon"
                                        fetchpriority="high"
                                        width="22"
                                        height="21"
                                        decoding="async"
                                        src={Search}
                                        style={{ color: "transparent" }}
                                    />
                                </span>
                                <input
                                    className="pl-10 pr-4 py-2 w-full header-nav-bar placeholder:text-dcTextColor focus:outline-yellow"
                                    type="text"
                                    placeholder="Search Store Sphere"
                                    style={{ border: '1px solid #311164', borderRadius: '30px' }}
                                    value=""
                                />
                            </div>
                        </div>
                    }
                </div>


                {/* Right Side Icons */}
                <div className="w-1/3 justify-end flex items-center space-x-5">
                    <Link className="flex-col justify-center items-center no-underline hidden md:flex" to="/orders">
                        <div className="w-8 h-8 p-2 items-center bg-[#D6DAFF] rounded-full cursor-pointer flex">
                            <img
                                alt="home"
                                loading="lazy"
                                width="23"
                                height="18"
                                decoding="async"
                                src={Order}
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <span className="text-xs text-dcDark leading-5">Orders</span>
                    </Link>
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-8 h-8 p-2 bg-[#D6DAFF] rounded-full cursor-pointer">
                            <div className="relative">
                                <img
                                    alt="user cart"
                                    loading="lazy"
                                    width="22"
                                    height="24"
                                    decoding="async"
                                    src={Cart}
                                    style={{ color: "transparent" }}
                                />
                            </div>
                        </div>
                        <span className="text-xs text-dcDark leading-5">Cart</span>
                    </div>
                    <div className="flex flex-col md:hidden justify-center items-center">
                        <div className="w-8 h-8 p-2 bg-[#D6DAFF] rounded-full cursor-pointer">
                            <img
                                alt="Search"
                                loading="lazy"
                                width="25"
                                height="24"
                                decoding="async"
                                src={Search}
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <span className="text-xs text-dcDark leading-5">Search</span>
                    </div>
                    <div className="flex-col justify-center items-center hidden md:flex">
                        <button
                            className="w-8 h-8 p-2 bg-[#D6DAFF] rounded-full flex items-center cursor-pointer"
                            type="button"
                        >
                            <img
                                alt="home"
                                loading="lazy"
                                width="23"
                                height="27"
                                decoding="async"
                                src={Profile}
                                style={{ color: "transparent" }}
                            />
                        </button>
                        <span className="text-xs text-dcDark leading-5">Profile</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
