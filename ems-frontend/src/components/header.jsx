// Desc: Header component for the application

// Place your logo image in the public folder or src/assets and update the src path below if needed
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <a
            className="navbar-brand d-flex align-items-center fw-bold fs-4 text-primary"
            href="#"
          >

            <span
              className="me-2"
              style={{ display: "flex", alignItems: "center" }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#0d6efd" />
                <text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontFamily="Arial"
                  dy=".3em"
                >
                  EM
                </text>
              </svg>
            </span>
          </a>
          <div>
            <Link to="/" className="btn btn-outline-primary mx-1">
              Dashboard
            </Link>
            <Link to="/employees" className="btn btn-outline-primary mx-1">
              Employees
            </Link>
            <Link to="/addEmployee" className="btn btn-outline-success mx-1">
              Add Employee
            </Link>
          </div>
          <span className="navbar-text text-secondary fw-semibold">
            Web Application
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
