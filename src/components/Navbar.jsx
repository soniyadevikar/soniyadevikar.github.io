// src/components/Navbar.jsx
const navItems = ["about", "academics", "projects", "contact"];

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item} className="navbar-item">
            <button
              className={`navbar-link ${activePage === item ? "active" : ""}`}
              onClick={() => setActivePage(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
