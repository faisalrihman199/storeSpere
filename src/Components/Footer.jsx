import React from "react";
import Logo from "../assets/Icons/Footer/Logo.png"
import Facebook from "../assets/Icons/Footer/Facebook.svg"
import Instagram from "../assets/Icons/Footer/Instagram.svg"
import Linkedin from "../assets/Icons/Footer/Linkedin.svg"
import Twitter from "../assets/Icons/Footer/Twitter.svg"
import Youtube from "../assets/Icons/Footer/Youtube.svg"
import Heart from "../assets/Icons/Footer/Heart.svg"
import QrCode from "../assets/Icons/Footer/QrCode.png"
import ScrollTop from "../assets/Icons/Footer/ScrollTop.svg"
const Footer = () => {
  return (
        <footer
        className="bg-primaryColor md:rounded-2xl md:rounded-xlg justify-center wsm:w-screen wsm:-ml-6 md:ml-0 md:w-full xsm:px-5
        xsm:py-5 sm:px-10 md:px-20 sm:py-10 md:py-16 wsm:-mb-12 mt-10 md:mb-10 p-5 site-color"
        
        >
        <div className="flex flex-wrap">
            {/* Logo and Social Links Section */}
            <div className="w-full md:w-1/4 xmd:w-1/5 lg:w-1/5 lg:flex-col">
            <div className="flex">
                <div>
                <img
                    alt="StoreSphere"
                    fetchpriority="high"
                    width="166"
                    height="87"
                    decoding="async"
                    className="mb-3 px-3"
                    style={{ color: "transparent", marginLeft: "-12px" }}
                    src={Logo}
                />
                </div>
                <div className="ml-auto mr-4 md:hidden cursor-pointer">
                <img
                    alt="Icon"
                    fetchpriority="high"
                    width="32"
                    height="32"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={ScrollTop}
                />
                <span className="text-white text-xs">SCROLL</span>
                <p className="text-white text-xs" style={{ marginTop: "-5px" }}>
                    TO TOP
                </p>
                </div>
            </div>
            <div className="flex mt-2">
                <a href="http://www.facebook.com/dealcart.io" target="_blank" className="mr-4">
                <img
                    alt="facebook"
                    fetchpriority="high"
                    width="9"
                    height="19"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={Facebook}
                />
                </a>
                <a href="http://www.instagram.com/dealcart.io/" target="_blank" className="mr-4">
                <img
                    alt="twitter"
                    fetchpriority="high"
                    width="20"
                    height="16"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={Twitter}
                />
                </a>
                <a href="http://www.youtube.com/@dealcart" target="_blank" className="mr-4">
                <img
                    alt="youtube"
                    fetchpriority="high"
                    width="20"
                    height="15"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={Youtube}
                />
                </a>
                <a href="http://www.instagram.com/dealcart.io/" target="_blank" className="mr-4">
                <img
                    alt="instagram"
                    fetchpriority="high"
                    width="17"
                    height="17"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={Instagram}
                />
                </a>
                <a href="http://www.linkedin.com/company/dealcart/" target="_blank" className="mr-4">
                <img
                    alt="linkedin"
                    fetchpriority="high"
                    width="17"
                    height="16"
                    decoding="async"
                    style={{ color: "transparent" }}
                    src={Linkedin}
                />
                </a>
            </div>
            <p className="text-white xmd:block xl:flex items-center mt-4 xsm:hidden sm:hidden md:block">
                Made with
                <img
                alt="love"
                loading="lazy"
                width="17"
                height="17"
                decoding="async"
                className="h-4 w-4 ml-1 mr-1"
                style={{ color: "transparent" }}
                src={Heart}
                />
                in Pakistan
            </p>
            <p className="text-white xmd:block xl:flex items-center xsm:hidden sm:hidden md:block">
                8 New Aurangzaib Block, Garden Town, Lahore.
            </p>
            <p className="text-white xmd:block xl:flex items-center xsm:hidden sm:hidden md:block">0324 7086922</p>
            <div id="divider" className="border-t border-white mt-4 mb-4 mr-8 md:hidden lg:hidden"></div>
            </div>

            {/* Sections */}
            {[
            {
                title: "Store Sphere",
                links: [
                { href: "/", text: "Shop" },
                { href: "/about", text: "About Us" },
                { href: "/blog", text: "Blogs" },
                { href: "/privacy-policy", text: "Privacy Policy" },
                ],
            },
            {
                title: "For Business",
                links: [
                { href: "/advertise-with-us", text: "Advertise With Us" },
                { href: "/sell-with-us", text: "Sell With Us" },
                { href: "/investor-relations", text: "Investor Relations" },
                ],
            },
            {
                title: "Support",
                links: [
                { href: "/help-center", text: "Help Center" },
                { href: "https://play.google.com/store/apps/details?id=com.localpk.android", text: "Download the App" },
                { href: "return-policy", text: "Return Policy" },
                { href: "/contact-us", text: "Contact us" },
                ],
            },
            ].map((section, index) => (
            <div key={index} className="w-full md:w-1/4 xmd:w-1/5 lg:w-1/5 lg:flex-col  ml-auto ">
                <p className="text-lg font-semibold text-white text-left">{section.title}</p>
                <div className="xsm:flex xsm:flex-wrap xsm:justify-start sm:flex sm:flex-wrap sm:justify-start lg:flex-col">
                {section.links.map((link, idx) => (
                    <a key={idx} className="text-decoration-none" href={link.href}>
                    <p className="text-base font-normal text-white text-left mr-4 mt-3">{link.text}</p>
                    </a>
                ))}
                </div>
                <div id="divider" className="border-t border-white mt-4 mb-4 mr-8 md:hidden lg:hidden"></div>
            </div>
            ))}

            {/* QR Code Section */}
            <div className="" id="qrCode">
            <img
                alt="QR"
                fetchpriority="high"
                width="123"
                height="123"
                decoding="async"
                className="border-2 rounded-lg p-1"
                style={{ color: "transparent" }}
                src={QrCode}
            />
            <div id="divider" className="border-t border-white mt-4 mb-4 mr-8 md:hidden lg:hidden"></div>
            </div>
        </div>
        </footer>
  );
};

export default Footer;
