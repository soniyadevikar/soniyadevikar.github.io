import { IoBookOutline, IoTrophyOutline, IoRibbonOutline, IoPeopleOutline } from 'react-icons/io5';

const Academics = () => {
    return (
        <>
            <header>
                <h2 className="h2 article-title">Academics</h2>
            </header>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoBookOutline size={20} />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">MKSSS's Cummins College of Engineering For Women</h4>
                        <span>2018 — 2022</span>
                        <p className="timeline-text">
                            Bachelor of Technology in Information Technology<br />
                            <strong><b>CGPA: 8.35 </b></strong><br />
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">XII - Late Jyoti Janolkar Jr. College</h4>
                        <span>2017 — 2018</span>
                        <p className="timeline-text">
                            HSC Board<br />
                            <strong><b>Percentage: 84.77%</b></strong><br />
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">X - Emerald Heights School</h4>
                        <span>2015 — 2016</span>
                        <p className="timeline-text">
                            CBSE Board<br />
                            <strong><b>CGPA: 9.8</b></strong><br />
                        </p>
                    </li>
                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IoTrophyOutline size={20} />
                    </div>
                    <h3 className="h3">Achievements</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            Spot Award — Société Générale
                        </h4>
                        <span>2025</span>
                        <p className="timeline-text">
                            Spot Award at Société Générale for outstanding commitment and delivery across backend development, with recognition for proactive upskilling and ownership.
                        </p>
                    </li>
                    
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            Research Paper Published — Springer & ResearchGate
                        </h4>
                        <span>First Online: 06 November 2022</span>
                        <p className="timeline-text">
                            <strong>Title:
                            </strong>{' '}<a
                                href="https://link.springer.com/chapter/10.1007/978-981-19-5224-1_73"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--orange-yellow-crayola)', textDecoration: 'underline' }}
                            >
                                A Comparative Analysis of Various Techniques of Data Leakage Detection in Different Domains
                            </a>

                            With the steep growth in information technology and its global reach, as well as the common citizen’s ever-increasing reliance on technology,
                            data privacy and security have become a major source of concern. This paper presents an exploratory case study analyzing and comparing
                            multiple data leakage detection techniques across different domains.
                            <br />
                            <a
                                href="https://www.researchgate.net/publication/365172178_A_Comparative_Analysis_of_Various_Techniques_of_Data_Leakage_Detection_in_Different_Domains"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    marginTop: '8px',
                                    padding: '6px 12px',
                                    backgroundColor: 'var(--orange-yellow-crayola)',
                                    color: 'var(--smoky-black)',
                                    borderRadius: '6px',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                }}
                            >
                                View on ResearchGate
                            </a>
                            <br />
                        </p>

                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">
                            Technical Event Coordinator for CRYPTHUNT — College Fest
                        </h4>
                        <span>2022</span>
                        <p className="timeline-text">
                            Successfully coordinated a technical event during college fest, overseeing event planning, participant engagement, and execution, ensuring smooth operations and high participation.
                        </p>
                    </li>

                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                        <IoRibbonOutline size={20} />
                    </div>
                    <h3 className="h3">Certifications</h3>
                </div>

                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">CCNA I & CCNA II — Certified</h4>
                        <span>2020</span>
                        <p className="timeline-text">
                            Completed Cisco Certified Network Associate foundational courses, gaining knowledge in routing, switching, and networking protocols.
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Python for Everybody & Python Data Structures — Coursera</h4>
                        <span>2020</span>
                        <p className="timeline-text">
                            Learned Python basics and data structures (lists, dictionaries, tuples) through hands-on programming assignments from the University of Michigan on Coursera.
                        </p>
                    </li>
                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box" style={{ color: 'var(--orange-yellow-crayola)' }}>
                        <IoPeopleOutline size={20} />
                    </div>
                    <h3 className="h3">Extra-Curriculars</h3>
                </div>

                <ol className="timeline-list">

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Member — Mind Messiahs, Société Générale</h4>
                        <span>2022 — Present</span>
                        <p className="timeline-text">
                            Active member of Mind Messiahs, a team that organizes internal team-building activities, innovation challenges, and bonding events.
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Volunteer — CryptHunt, Technical Fest</h4>
                        <span>2019</span>
                        <p className="timeline-text">
                            Coordinated logistics and managed participants for CryptHunt, a technical treasure hunt event during college fest.
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Clean Mula-Mutha Movement — WE Punekars NGO</h4>
                        <span>2019</span>
                        <p className="timeline-text">
                            Volunteered in an environmental cleanup drive to restore the Mula-Mutha riverbanks in Pune as part of WE Punekars.
                        </p>
                    </li>
                </ol>
            </section>
        </>
    );
};

export default Academics;
