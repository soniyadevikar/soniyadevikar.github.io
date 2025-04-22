import { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.png';

const projects = [
    {
        title: "Finance Web App",
        image: project1,
        description:
            "A responsive finance dashboard built with React, showing analytics, graphs, and transaction history. Focus on performance and UI/UX.",
    },
    {
        title: "Orizon SaaS Platform",
        image: project2,
        description:
            "A modern SaaS platform for task management and collaboration. Features include real-time updates, authentication, and cloud sync.",
    },
];

const Projects = () => {
    return (
        <>
            <header>
                <h2 class="h2 article-title">Projects</h2>
            </header>
            <section className="projects">
                <ul className="project-list">
                    {projects.map((proj, index) => (
                        <li
                            key={index}
                            className="project-item active"
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <IoEyeOutline />
                                    </div>
                                    <img src={proj.image} alt={proj.title} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{proj.title}</h3>
                                <p className="project-category">{proj.description}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section></>
    );
};

export default Projects;