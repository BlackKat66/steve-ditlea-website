import { FC } from "react";

interface PhotoProps {
  photoLink: string; 
  subject: string;
  location: string; 
}

const Photo: FC<PhotoProps> = ({
  photoLink,
  subject,
  location,
}) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <img src={photoLink} style={{height: "300px", width: "auto"}} alt={subject} className="img-fluid" />
      <div>{subject}</div>
      <div style={{marginBottom: "30px"}}>{location}</div>
    </div>
  )
}; 

export default Photo; 