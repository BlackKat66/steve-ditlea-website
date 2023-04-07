import { FC } from "react";

interface DividerProps {
  iconClass: string;
  title: string;
}

const Divider: FC<DividerProps> = ({ iconClass, title }) => (
  <>
    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">{title}</h2>
    <div className="divider-custom">
      <div className="divider-custom-line"></div>
      <div className="divider-custom-icon"><i className={iconClass} style={{ fontSize: "3.5rem" }}></i></div>
      <div className="divider-custom-line"></div>
    </div>
  </>
); 

export default Divider; 