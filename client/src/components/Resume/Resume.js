import React, { useEffect, useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import AOS from 'aos';
import './Resume.css';

function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    useEffect(() => {
        AOS.init();
    })

    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <div className="resume-heading-content">
                        <span>{props.heading ? props.heading : ''}</span>
                        {props.fromDate && props.toDate ? (
                            <div className="heading-date">
                                {props.fromDate + "-" + props.toDate}
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className="resume-sub-heading">
                        <span>{props.subHeading ? props.subHeading : ''}</span>
                    </div>
                    <div className="resume-heading-description">
                        <span>{props.description ? props.description : ''}</span>
                    </div>
                </div>
            </div>
        );
    }

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Project", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" }
    ];

    const programmingSkillDetails = [
        { skill: "Html5/Css3/Sass" },
        { skill: "Bootstrap" },
        { skill: "Javascript" },
        { skill: "React Js" },
        { skill: "React router" },
        { skill: "Redux" },
        { skill: "Node Js" },
        { skill: "Gitthub" }
    ];

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: {
                fromDate: "01/2022", toDate: "02/2022"
            },
            description: "A Personal Portfolio website to showcase all my details and project at one places",
            subHeading: "Technologies Used: HTML5/CSS3, Bootstrap, React Js, Node Js"
        },
        {
            title: "CyberBugs",
            duration: {
                fromDate: "08/2021", toDate: "09/2021"
            },
            description: "Site management tasks",
            subHeading: "Technologies Used: HTML5/CSS3, React Js, Redux, Call Api, Ant Design"
        },
        {
            title: "Movie Star",
            duration: {
                fromDate: "09/2021", toDate: "10/2021"
            },
            description: "Online movie ticket booking site",
            subHeading: "Technologies Used: React Js, Redux, Call Api, Ant Design"
        },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Cyberlearn programming training center"}
                subHeading={"FRONT-END FOUNDATION"}
                fromDate={"07/2021"}
                toDate={"08/2021"}
            />
            <ResumeHeading
                heading={"Cyberlearn programming training center"}
                subHeading={"FRONT-END PROFESSIONAL REACTJS DEVELOPER"}
                fromDate={"08/2021"}
                toDate={"10/2021"}
            />
            <ResumeHeading
                heading={"Cyberlearn programming training center"}
                subHeading={"BACK-END NODEJS DEVELOPER"}
                fromDate={"11/2021"}
                toDate={"12/2021"}
            />
        </div>,
        <div className="resume-screen-container" key="work-experiene">
            <ResumeHeading
                heading={"Cyberlearn"}
                subHeading={"REACTJS AND NODEJS INTERN"}
                fromDate={"12/2021"}
                toDate={"02/2022"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                    - Build projects for training such as Stripe payment menu page, Collaborative White Board, Build a Rick and Morty Character Wiki,...
                </span>
                <br />
                <span className="resume-description-text">
                    - Apply knowledge of pagination, search, filtering, react icons, react hooks, web sockets, nodejs to complete assigned tasks
                </span>
                <br />
                <span className="resume-description-text">
                    - Perform the task in accordance with UX/UI standards, directory division standards, function rules, and no code repetitions.
                </span>
            </div>
        </div>,
        <div className="resume-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                </div>
            ))}
        </div>,
        <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectDetail, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectDetail.title}
                    subHeading={projectDetail.subHeading}
                    description={projectDetail.description}
                    fromDate={projectDetail.duration.fromDate}
                    toDate={projectDetail.duration.toDate}
                />
            ))}
        </div>,
        <div className="resume-screen-container" key="interest">
            <ResumeHeading
                heading="Take an online course"
                description="Want to learn more new knowledge after work, taking some online courses to develop coding skills is what I like."
            />
            <ResumeHeading
                heading="Music"
                description="Listen to some music at the end of the day before going to bed to clear your mind"
            />
            <ResumeHeading
                heading="Travel"
                description="Going to a new area, seeing the scenery, the people and relaxing, it's amazing."
            />
        </div>
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarouselOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" }
        }
        setCarousalOffSetStyle(newCarouselOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}
            >
                <img
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    className="bullet-logo"
                    alt="Oops... no internet connection" />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreen = () => {
        return (
            <div
                style={carousalOffSetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map(ResumeDetail => ResumeDetail)}
            </div>
        )
    }

    return <div className="resume-container screen-container" id={props.id || ""}>
        <div className="resume-content">
            <ScreenHeading title={'Resume'} subHeading={'My For Bio Details'} />
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-easing="linear" data-aos-once="true">
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-icons"></div>
                        <div className="bullet-container">
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    </div>;
}

export default Resume;
