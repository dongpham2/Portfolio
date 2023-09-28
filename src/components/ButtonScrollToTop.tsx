import React, { useEffect, useState } from 'react';

type Props = {};

const ButtonScrollToTop = (props: Props) => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {backToTopButton && (
                <button onClick={scrollUp} className='fixed bottom-12 right-12 h-[50px] w-[50px] text-5xl bg-white shadow-xl rounded-xl'>
                    <ion-icon name="arrow-up-outline"></ion-icon>
                </button>
            )}
        </div>
    );
};

export default ButtonScrollToTop;