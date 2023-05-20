import { FC } from "react";

interface PhotoProps {
  photoLink: string; 
  subject: string;
  location: string; 
  dimensions: string; 
  price: number; 
}

const Photo: FC<PhotoProps> = ({
  photoLink,
  subject,
  location,
  dimensions,
  price
}) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <img src={photoLink} style={{height: "300px", width: "auto"}} alt={subject} className="img-fluid" />
      <div>{subject}</div>
      <div>{location}</div>
      <div>{dimensions}</div>
      <div style={{marginBottom: "30px"}}>{`$${price}`}</div>
    </div>
  )
}; 

export default Photo; 