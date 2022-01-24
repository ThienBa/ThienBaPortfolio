import React, { useEffect, useState } from 'react';
import ScrollService from '../../utilities/ScrollService';
import './BackToTop.css';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return <div>
        {isVisible &&
            <div className="scroll-to-top" onClick={() => ScrollService.scrollHandler.scrollToHome()}>
                <i className="fa fa-angle-up"></i>
            </div>}
    </div>;
}

export default BackToTop;
