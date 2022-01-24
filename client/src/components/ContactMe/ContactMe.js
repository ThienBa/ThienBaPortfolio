import React, { useEffect, useState } from 'react';
import Typical from 'react-typical';
import axios from 'axios';
import { toast } from 'react-toastify';
import imgBack from '../../assets/images/mailz.jpeg';
import load from '../../assets/images/load2.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import AOS from 'aos';
import './ContactMe.css';

function ContactMe(props) {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [bool, setBool] = useState(false);

    useEffect(() => {
        AOS.init();
    })

    const handleChange = (event) => {
        let { name, value } = event.target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let { name, email, message } = state;
        try {
            let data = {
                name,
                email,
                message
            }
            setBool(true);
            const res = await axios.post(`/contact`, data);
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                toast.error(res.data.msg);
                setBool(false);
            } else if (res.status === 200) {
                toast.success(res.data.msg);
                setBool(false);
                setState({
                    name: "",
                    email: "",
                    message: ""
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="main-container" id={props.id || ""}>
        <ScreenHeading
            subHeading={"Let Keep In Touch"}
            title={"Contact Me"}
        />
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-easing="linear" data-aos-once="true">
            <div className="central-form">
                <div className="col">
                    <h2 className="title">
                        {" "}
                        <Typical
                            steps={[
                                'Get In Touch',
                                1000,
                            ]}
                            loop={Infinity}
                        />
                    </h2>
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
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt="image not found" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={handleChange} value={state.name} />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={handleChange} value={state.email} />

                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="message" onChange={handleChange} value={state.message} />

                        <div className="send-btn">
                            <button type="submit">
                                Send <i className="fa fa-paper-plane"></i>
                                {bool ? (<b className="load">
                                    <img src={load} alt="image not responding" />
                                </b>) : ("")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
}

export default ContactMe;
