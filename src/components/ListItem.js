import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Asap } from "next/font/google";

const asap = Asap({
  subsets: ["latin"],
});
const ListItem = ({
  src = "/temp.jpg",
  alt = "temp",
  url = "/",
  title = "Open Source Learning platform",
}) => {
  return (
    <article className="work-list-item">
      <img src={src} alt={alt} />
      <div>
        <h2 className={asap.className}>{title}</h2>
        <Link href={url}>
          <p className="btn">Read More </p>
        </Link>
      </div>
    </article>
  );
};

export default ListItem;
