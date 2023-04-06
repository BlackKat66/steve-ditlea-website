"use client";

import Image from "next/image";
import Link from "next/link";
import {  usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname(); 

  return (
    <header className="masthead bg-primary text-white text-center" style={{ marginTop: "-6rem" }}>
      <div className="container d-flex align-items-center flex-column">
        <Image src="/top-banner2.png" className="img-fluid" alt="Steve Ditlea" height={180} width={1080} />
        <div className="container-fluid; text-center" id="menubuttons">
          <div className="row text-center" style={{ marginTop: "2rem", marginBottom: "-12 rem" }}>
            <div className="col-md-12 text-center">
              <ul className="nav nav-pills">
                <li className="nav-item" style={{ marginLeft: "-3rem" }}>
                  <Link
                    className={`nav-link ${pathname === "/articles" ? "active"  : ""}`} 
                    href="/articles"
                  >
                    Articles
                  </Link>
                </li>
                <li className="nav-item" style={{ marginLeft: "4rem" }}> 
                  <Link 
                    className={`nav-link ${pathname === "/photos" ? "active"  : ""}`} 
                    href="/photos"
                  >
                    Photos
                  </Link>
                 </li>
                <li className="nav-item" style={{ marginLeft: "4rem" }}> 
                  <Link 
                    className={`nav-link ${pathname === "/extras" ? "active"  : ""}`} 
                    href="/extras"
                  >
                    Extras
                  </Link>
                 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;