import { FaCode, FaLaptopCode, FaServer, FaCloud, FaTools, FaBriefcase } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    Software Engineer with nearly 3 years of experience in building scalable, full-stack web applications with a strong focus on frontend
                    development using React and backend development with Flask and FastAPI. Proficient in designing modular and reusable components,
                    integrating RESTful APIs, and deploying solutions on cloud infrastructure.
                </p>
                <p>
                    Adept at working in Agile environments, driving UI/UX enhancements, and contributing to high-impact enterprise applications.
                    Passionate about problem-solving, performance optimization, and continuous learning.
                </p>
            </section>

            <section className="timeline">

                <div className="title-wrapper">
                    <h3 className="h3">Experience</h3>


                </div>

                <ol className="timeline-list">

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            Software Engineer | Société Générale - GSC
                        </h4>
                        <span>June 2022 — Present</span>
                        <p className="timeline-text">
                            Developed scalable and user-friendly web applications using React.js and Angular, focusing on performance, responsiveness, and seamless end-to-end integration.<br />
                            Independently led UI/UX design efforts, translating complex requirements into intuitive layouts and user experiences.<br />
                            Built reusable front-end components including dashboards, data visualizations, health check workflows, and dynamic tables with full CRUD functionality.<br />
                            Engineered robust RESTful APIs using Python (Flask), integrating with databases to deliver reliable and efficient backend support for frontend features.<br />
                            Streamlined development and deployment workflows by implementing CI/CD pipelines with Jenkins, improving build automation and release efficiency.<br />
                            Collaborated in Agile cross-functional teams, contributing across the stack to ensure timely delivery of high-quality, maintainable solutions.
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            Summer Intern | Women in Data Science (WiDS), Pune
                        </h4>
                        <span>May 2021 — June 2021</span>
                        <p className="timeline-text">
                            Developed a chatbot from scratch using Google DialogFlow.<br />
                            Managed data annotation, intent/entity design, and dialog management for contextual accuracy.
                        </p>
                    </li>

                </ol>
            </section>


            <section className="service">
                <h3 className="h3 service-title">My Skills</h3>

                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                            <FaCode size={28} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Languages</h4>
                            <p className="service-item-text">JavaScript, Python, Java</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                            <FaLaptopCode size={28} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Frontend</h4>
                            <p className="service-item-text">HTML, CSS, React, Redux, Vite, Material UI</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                            <FaServer size={28} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Backend</h4>
                            <p className="service-item-text">Flask, FastAPI, REST APIs, PostgreSQL, SQL, Linux</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                            <FaCloud size={28} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Cloud</h4>
                            <p className="service-item-text">Azure, Private Cloud</p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                            <FaTools size={28} />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Other</h4>
                            <p className="service-item-text">Problem Solving, DSA, DBMS, OOPs, Operating Systems</p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default About;
