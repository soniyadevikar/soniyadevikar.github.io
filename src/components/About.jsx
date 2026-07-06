import { FaCode, FaLaptopCode, FaServer, FaCloud, FaTools, FaBriefcase } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    Software Engineer with 4+ years of experience building scalable enterprise applications in financial services. Expertise in
                    Python, Java, JavaScript, React.js, Angular, Flask, and Spring Boot for developing RESTful APIs, microservices, and
                    responsive web applications. Proficient in full-stack development across frontend, backend, and database technologies
                    including PostgreSQL, MySQL, Oracle, and cloud technologies including Docker, Kubernetes, Jenkins, and AWS. 
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
                            Developed and maintained scalable full-stack web applications using React.js, Angular, Redux, Python (Flask), Java (Spring Boot), and Material-UI, delivering high-performance dashboards and reporting solutions for business-critical financial systems.<br />
                            Designed, developed, and secured RESTful APIs and backend services using Python (Flask) and Java (Spring Boot), enabling seamless frontend-backend communication with 99.9% uptime and average response times under 200ms.<br />
                            Implemented enterprise-grade business logic and data validation in backend services, integrating with PostgreSQL and Oracle databases to support reliable, mission-critical financial workflows.<br />
                            Built a unified network management and automation platform using Python, Flask, Celery, Netmiko, Paramiko, and React.js, automating device health checks and incident workflows, resulting in 0.5 FTE cost savings.<br />
                            Improved application quality and release efficiency by increasing unit and integration test coverage to 85%, implementing CI/CD pipelines with Jenkins, and contributing to Agile ceremonies including sprint planning, daily stand-ups, and retrospectives.
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
