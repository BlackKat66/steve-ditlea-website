import { FC } from "react";
import Image from "next/image";

import NavPills from "./navPills";

interface HeaderProps {
  bannerImageUrl: string;
}

const Header: FC<HeaderProps> =  ({ bannerImageUrl }) => {
  return (
    <header className="masthead bg-primary text-white text-center" style={{ marginTop: "-6rem" }}>
      <div className="container d-flex align-items-center flex-column">
        <img src={bannerImageUrl} className="img-fluid" alt="Steve Ditlea" />
        <NavPills />
      </div>
    </header>
  );
};

export default Header;