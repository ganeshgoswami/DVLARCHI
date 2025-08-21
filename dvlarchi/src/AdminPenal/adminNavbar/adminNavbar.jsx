import { Link, useNavigate } from "react-router-dom";
import weblogo from "../../weblogo/weblogo.png";
import { AdminAuthContext } from "../../AdminAuthContext/AdminAuthContext";
import { useContext } from "react";

const AdminNavbar = () => {
  const { logout } = useContext(AdminAuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate("/"); 
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid m-2">
          <Link className="navbar-brand p-3" aria-current="page" to="/adminhome">
            <img src={weblogo} alt="" width="120 px" />
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
           className="collapse navbar-collapse" id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <Link
                  className="nav-link active"
                  to="/adminhome"
                >
                  <b>Admin Home</b>{" "}
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link
                  className="nav-link"
                  to="/addarchitecture"
                >
                  <b>Add Architecture</b>{" "}
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link
                  className="nav-link"
                  to="/Addblogs"
                >
                  <b>Add Blogs</b>{" "}
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  className="nav-link"
                  to="/blogslist"
                >
                  <b>Blogs</b>{" "}
                </Link>
              </li>

              <li className="nav-item me-3">
                <Link
                  className="nav-link"
                  to="/architectureslist"
                >
                  <b>Architectures</b>{" "}
                </Link>
              </li>
            </ul>
            <div>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
