import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
 

  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid">
        <div className="px-5">
          <nav className="navbar navbar-expand-lg navbar-dark p-0 py-5">
            <Link to="/" className="navbar-brand">
              <img style={{ height: "180px", width: "150px", paddingTop: "40px"}} src="logo123.png" alt="Life Link Digital" />
             
            </Link>
            <Link to="/" >
            <div style={{color: "#004526" }} className="logo123">Mediva Pharmaceuticals</div>
            </Link>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            ></button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <NavLink to="/" className="nav-item nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                 Business Area 
                </NavLink>


                {/* <NavLink
                  to="/services"
                  className="nav-item nav-link"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the default navigation behavior
                    e.stopPropagation(); // Stops event propagation to prevent interference with NavLink
                    // navigate("/services"); // Manually navigate to the desired route
                  }}
                >
                  <div className="dropdown">
                    <div>
                      Service &nbsp;
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="currentColor"
                          d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"
                        />
                      </svg>
                    </div>
                    <div className="dropdown-content">
                      <ul>
                        <li onClick={() => navigate("/ebmr")}>e-BMR</li>
                        <li onClick={() => navigate("/elogbook")}>e-LogBook</li>
                        <li onClick={() => navigate("/lms")}>LMS</li>
                        <li onClick={() => navigate("/mes")}>MES</li>
                        <li onClick={() => navigate("/edms")}>EDMS</li>
                        <li onClick={() => navigate("/eqms")}>EQMS</li>
                        <li onClick={() => navigate("/quality-risk-management")}>Quality Risk Management</li>
                        <li onClick={() => navigate("/pharma-audit")}>Pharma Audit & Remediation</li>
                        <li onClick={() => navigate("/root-cause-analysis")}>Automated Root Cause Analysis</li>
                        <li onClick={() => navigate("/warehouse-management")}>Warehouse management system</li>
                        <li onClick={() => navigate("/paperless-microbiology")}>Paper less microbiology</li>
                        <li onClick={() => navigate("/usfda-warning-letter-management")}>
                          USFDA warning letter management
                        </li>
                        <li onClick={() => navigate("/merger-and-acquisition")}>Merger & acquisition</li>
                        <li onClick={() => navigate("/ai-assited-culture-of-quality")}>
                          AI-Assisted Culture of Quality
                        </li>
                        <li onClick={() => navigate("/connected-and-integrated-gxp-systems")}>
                          Connected & Integrated GXP Systems
                        </li>
                        <li onClick={() => navigate("/ai-assited-pharma")}>AI-Assisted Pharma 4.0</li>
                        <li onClick={() => navigate("/intelligent-pharma")}>
                          Intelligent Pharma Manufacturing Factory
                        </li>
                        <li onClick={() => navigate("/gxp-training")}>GxP Training </li>
                        <li onClick={() => navigate("/rpa")}>Robotic Process Automation (RPA) </li>
                      </ul>
                  
                    </div>
                  </div>
                </NavLink> */}

              
                <NavLink to="/industries" className="nav-item nav-link">
                Manufacturing
                </NavLink>
                <NavLink to="/features" className="nav-item nav-link">
                 R & D
                </NavLink>
                <NavLink to="/contact" className="nav-item nav-link">
                 About Us
                </NavLink>
              
              </div>
              <button
                type="button"
                className="btn text-white p-0 d-none d-lg-block"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </nav>
        </div>
       
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
}

export default Header;
