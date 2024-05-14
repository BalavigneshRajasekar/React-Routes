import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mt-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 d-lg-flex  justify-content-center gap-lg-5 w-100 ">
              <li className="text-decoration-none">
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isPending ? "px-2 " : isActive ? "li px-2 " : "l-style"
                  }
                >
                  All
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/FullStackDevelopment"}
                  className={({ isActive, isPending }) =>
                    isPending ? "px-2" : isActive ? "li px-2" : "l-style"
                  }
                >
                  FullStackDevelopment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/DataScience"}
                  className={({ isActive, isPending }) =>
                    isPending ? "px-2" : isActive ? "li px-2" : "l-style"
                  }
                >
                  DataScience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/CyberSecurity"}
                  className={({ isActive, isPending }) =>
                    isPending ? "px-2" : isActive ? "li px-2" : "l-style"
                  }
                >
                  CyberSecurity
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Careers"}
                  className={({ isActive, isPending }) =>
                    isPending ? "px-2" : isActive ? "li px-2" : "l-style"
                  }
                >
                  Careers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
