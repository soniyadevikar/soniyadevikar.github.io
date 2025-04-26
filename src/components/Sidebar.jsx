// src/components/Sidebar.jsx
import { useState } from 'react';
import avatar from '../assets/images/my-image.jpg';
import { IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoLogoLinkedin, IoLogoGithub, IoChevronDown } from 'react-icons/io5';

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <aside className={`sidebar ${expanded ? 'active' : ''}`} data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={avatar} alt="Soniya" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Soniya">Soniya Devikar</h1>
                    <p className="title">Full Stack Developer</p>
                    <br></br>
                    <p className='download-resume'>
                        <a
                            href="https://www.researchgate.net/publication/365172178_A_Comparative_Analysis_of_Various_Techniques_of_Data_Leakage_Detection_in_Different_Domains"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            Download Resume
                        </a>
                    </p>
                </div>
                <div style={{ width: 'max-content' }}>

                </div>
                <button className="info_more-btn" onClick={() => setExpanded(!expanded)}>
                    <span>Show Contacts</span>
                    <IoChevronDown />
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box"><IoMailOutline /></div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:soniyadevikar6@gmail.com" className="contact-link">soniyadevikar6@gmail.com</a>
                        </div>
                    </li>
                    {/* <li className="contact-item">
                        <div className="icon-box"><IoPhonePortraitOutline /></div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+91935960743" className="contact-link">+91 935960743</a>
                        </div>
                    </li> */}
                    <li className="contact-item">
                        <div className="icon-box"><IoCalendarOutline /></div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time dateTime="2003-03-02">12 December, 2000</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box"><IoLocationOutline /></div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address>Bangalore, India</address>
                        </div>
                    </li>
                </ul>
                <div className="separator"></div>
                <ul className="social-list">
                    <li className="social-item">
                        <a href="https://www.linkedin.com/in/soniya-devikar-5b42911b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            <IoLogoLinkedin />
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://github.com/soniyadevikar"
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            <IoLogoGithub /></a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
