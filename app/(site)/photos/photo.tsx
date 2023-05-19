import { FC } from "react";
import Image from "next/image";

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
      <Image src={photoLink} height={180} width={180} alt={subject} className="img-fluid" />
      <div>{subject}</div>
      <div>{location}</div>
      <div>{dimensions}</div>
      <div>{`$${price}`}</div>
    </div>
  )
}; 

export default Photo; 