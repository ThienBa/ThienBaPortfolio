import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import AOS from 'aos';
import './AboutMe.css';

function AboutMe(props) {
    useEffect(() => {
        AOS.init();
    })

    const SCREEN_CONSTANTS = {
        description: "React js web developer with a background knowledge of redux, coupled with a desire to build web applications with maximum efficiency. Passion, enthusiasm is willing to become an asset of an organization.",
        highlights: {
            bullets: [
                "React Js development",
                "Redux for State Management",
                "Interact with api",
                "Building REST API"
            ],
            heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlight = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value, index) => (
                <div className="highlight" key={index}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }


    return <div className="about-me-container screen-container" id={props.id || ""}>
        <div className="about-me-parent">
            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-easing="linear" data-aos-once="true">
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>

                        <div className="about-me-options">
                            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                            >Hire Me</button>
                            <a href="huynhthienbacv.pdf" download="HuynhThienBaCV.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default AboutMe;
