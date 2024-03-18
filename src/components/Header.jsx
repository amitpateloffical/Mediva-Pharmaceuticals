// import "./Header.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, NavLink, useNavigate, } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate();


//   return (
//     <>
//       {/* <!-- Navbar Start --> */}
//       <div className="container-fluid">
//         <div className="px-5">
//           <nav className="navbar navbar-expand-lg navbar-dark p-0 py-5">
//             <Link to="/" className="navbar-brand a-index">
//               <img className="" style={{ height: "190px", width: "150px", paddingTop: "40px"}} src="logomediva.png" alt="Life Link Digital" />
//             </Link>
//             <Link to="/" >
//               <div style={{ color: "#004526" }} className="logo123">Mediva Pharmaceuticals</div>
//             </Link>
//             <button
//               type="button"
//               className="navbar-toggler ms-auto me-0"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarCollapse"
//             ></button>
//             <div className="collapse navbar-collapse" id="navbarCollapse">
//               <div className="navbar-nav ms-auto">
//                 <NavLink to="/" className="nav-item nav-link">
//                   Home
//                 </NavLink>
//                 {/* <NavLink to="/businessareas" className="nav-item nav-link">
//                   Business Area
//                 </NavLink> */}


//                 <NavLink
//                   to="/businessareas"
//                   className="nav-item nav-link"
//                   onClick={(e) => {
//                     e.preventDefault(); // Prevents the default navigation behavior
//                     e.stopPropagation(); // Stops event propagation to prevent interference with NavLink
//                     // navigate("/services"); // Manually navigate to the desired route
//                   }}
//                 >
//                   <div className="dropdown">
//                     <div>
//                     Area of Expertise &nbsp;
//                       <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           fill="currentColor"
//                           d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"
//                         />
//                       </svg>
//                     </div>
//                     <div className="dropdown-content">
//                       <ul>
//                          <li onClick={() => navigate("/businessareas")}>Overview</li>
//                         <li onClick={() => navigate("/indiabranded")}>INDIA - BRANDED GENERICS</li>
//                         <li onClick={() => navigate("/emergingmarkets")}>EMERGING MARKETS - BRANDED GENERICS</li>
//                         <li onClick={() => navigate("/usgenerics")}>USA - Generics</li>
//                         <li onClick={() => navigate("/africainstitution")}>AFRICA - INSTITUSTION BUSINESS</li>
//                       </ul>

//                     </div>
//                   </div>
//                 </NavLink>


//                 <NavLink to="/manufacturing" className="nav-item nav-link">
//                 Building
//                 </NavLink>
//                 <NavLink to="/features" className="nav-item nav-link">
//                 Technological Research
//                 </NavLink>
//                 <NavLink to="/about" className="nav-item nav-link">
//                 Company Profile
//                 </NavLink>
//                 <NavLink to="/contact" className="nav-item nav-link">
//                 Connect With Us
//                 </NavLink>

//               </div>
//               <button
//                 type="button"
//                 className="btn text-white p-0 d-none d-lg-block"
//                 data-bs-toggle="modal"
//                 data-bs-target="#searchModal"
//               >
//                 <i className="fa fa-search"></i>
//               </button>
//             </div>
//           </nav>
//         </div>

//       </div>
//       {/* <!-- Navbar End --> */}
//     </>
//   );
// }

// export default Header;

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
  // const handleButtonClick = () => {
  //   // console.log("setIsButtonClicked clicked")
  //   if (isButtonClicked) {
  //     setIsButtonClicked(false);
  //   } else {
  //     setIsButtonClicked(true);
  //   }
  // };

  return (
    <>
      <header className="header">
        <nav>
          <div className="">
            <img src="logomediva.png" width="70" height="70" alt="" />
            <Link to="/" className="p-4">
             <span className="heading-1">MEDIVA PHARMA</span> 
              {/* <span>GENoMED PHARMA</span> */}
            </Link>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            &#9776;
          </label>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/businessareas">Business Area</Link>
            </li>
            <li>
              <Link to="/manufacturing">Manufacturing</Link>
            </li>
            <li>
              <Link to="/features">R & D</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;