import { Link } from "react-router-dom";
import weblogo from "../../weblogo/weblogo.png";
import { useEffect } from "react";

const UserNavbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      });
    });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid m-2">
          <Link className="navbar-brand p-3" aria-current="page" to="/home">
            <img src={weblogo} alt="" className="logo-size" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  <b>Home</b>{" "}
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" aria-current="page" to="/blogs">
                  <b>Blogs</b>{" "}
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link" aria-current="page" to="/about-us">
                  <b>About Us</b>{" "}
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" aria-current="page" to="/contact-us">
                  <b>Contact Us</b>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
