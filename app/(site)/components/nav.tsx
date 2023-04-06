import Link from "next/link";

const Nav = () => (
  <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div className="container">
      <Link className="navbar-brand js-scroll-trigger" style={{ color: "#fff" }} href="/">
        <i className="fas fa-house-user" style={{ fontSize: "2.5 rem" }}>
        </i>
      </Link>
      <button
        className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-navbutton text-white rounded"
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarResponsive" 
        aria-controls="navbarResponsive"
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-0 mx-lg-1">
            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={{ color: "#fff" }} href="#contact">
              Contact Steve
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav; 