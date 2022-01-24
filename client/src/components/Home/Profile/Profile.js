import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import "./Profile.css";

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.facebook.com/profile.php?id=100008194634782" target="_blank">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://github.com/ThienBa" target="_blank">
                                <i className="fa fa-github-square"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-youtube-square"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Huynh Thien Ba</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h1>
                                <Typical
                                    steps={[
                                        'Enthusiastic Developer', 1000,
                                        'React Js Developer', 1000,
                                        'Node Js Developer', 1000,
                                        'Eager To Learn', 1000,
                                    ]}
                                    loop={Infinity}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building web applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >Hire Me</button>
                        <a href="huynhthienbacv.pdf" download="HuynhThienBaCV.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
