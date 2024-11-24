import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const images = [
        "https://admin.dealcart.io/banner/full-1730189934918-Bioaqua-ezgif.com-png-to-webp-converter..webp",
        "https://admin.dealcart.io/banner/full-1730190060381-LOrealshampoos-ezgif.com-png-to-webp-converter..webp",
        "https://admin.dealcart.io/banner/full-1729167234146-Banner1..webp",
        "https://admin.dealcart.io/banner/full-1731920980221-knorr%20-%20Nov%20Banner%20-1..webp",
        "https://admin.dealcart.io/banner/full-1729167136842-New%20-%20Pn..webp",
        "https://admin.dealcart.io/banner/full-1725610746038-App-Banner-1496x645..webp",
        "https://admin.dealcart.io/banner/full-1730701570192-Afrozeh%20-%20Banner%20%287%29..webp",
        "https://admin.dealcart.io/banner/full-1728550802334-CBL%20October%20-%20Inapp%20banner..webp",
        "https://admin.dealcart.io/banner/full-1729167499523-Oct%20Banner%20-%20Sensodyne1..webp",
        "https://admin.dealcart.io/banner/full-1730190891610-MakeupRevolution1-ezgif.com-png-to-webp-converter..webp",
        "https://admin.dealcart.io/banner/full-1732172135090-Lays-%20Inapp%20banner..webp",
        "https://admin.dealcart.io/banner/full-1730190464343-Maybelline-ezgif.com-png-to-webp-converter..webp",
        "https://admin.dealcart.io/banner/full-1730284811490-Banner-ezgif.com-png-to-webp-converter%20%281%29..webp",
        "https://admin.dealcart.io/banner/full-1729167072432-1..webp"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto Slide Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Slide every 3 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full my-10">
            {/* Carousel Container */}
            <div className="overflow-hidden w-full relative">
                <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-full">
                            <img
                                className="w-full object-cover rounded-lg"
                                src={image}
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="sm:hidden">
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 clr bg-white p-2 rounded-full opacity-50 hover:opacity-100"
                >
                    &#10094;
                </button>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 clr bg-white p-2 rounded-full opacity-50 hover:opacity-100"
                >
                    &#10095;
                </button>

            </div>


            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2 sm:flex hidden">
                {images.map((_, index) => (
                    <button
                        key={index}
                        style={{border:'1px solid #311164'}}
                        className={`w-4 h-4 rounded-full ${currentIndex === index ? 'site-color ' : 'bg-white'}`}
                        
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>

        </div>
    );
};

export default Carousel;
