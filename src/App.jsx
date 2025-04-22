import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Academics from './components/Academics';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('about');

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        <article className={`about ${activePage === 'about' ? 'active' : ''}`} data-page="about">
          <About />
        </article>

        <article className={`academics ${activePage === 'academics' ? 'active' : ''}`} data-page="resume">
          <Academics />
        </article>

        <article className={`projects ${activePage === 'projects' ? 'active' : ''}`} data-page="portfolio">
          <Projects />
        </article>

        <article className={`contact ${activePage === 'contact' ? 'active' : ''}`} data-page="contact">
          <Contact />
        </article>
      </div>
    </main>
  );
}

export default App;
