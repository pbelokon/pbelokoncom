import React from "react";
import Image from "next/image";
const ListItem = ({ src = "/temp.jpg", w = "50", h = "50", alt = "temp" }) => {
  return (
    <div className="work-list-item">
      <Image src={src} width={w} height={h} alt={alt} />

      <h2>Project</h2>
      <p> Read more</p>
    </div>
  );
};

export default ListItem;
