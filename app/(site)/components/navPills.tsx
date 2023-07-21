"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavPills = () => {
  const pathname = usePathname();

  return (
    <div className="container-fluid; text-center" id="menubuttons">
      <div className="row text-center" style={{ marginTop: "2rem", marginBottom: "-12 rem" }}>
        <div className="col-md-12 text-center">
          <ul className="nav nav-pills">
            <li className="nav-item" style={{ marginLeft: "-3rem" }}>
              <Link
                className={`nav-link ${pathname === "/stories" ? "active" : ""}`}
                href="/stories"
              >
                Stories
              </Link>
            </li>
            <li className="nav-item" style={{ marginLeft: "4rem" }}>
              <Link
                className={`nav-link ${pathname === "/books" ? "active" : ""}`}
                href="/books"
              >
                Books
              </Link>
            </li>
            <li className="nav-item" style={{ marginLeft: "4rem" }}>
              <Link
                className={`nav-link ${pathname === "/photos" ? "active" : ""}`}
                href="/photos"
              >
                Photos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default NavPills; 