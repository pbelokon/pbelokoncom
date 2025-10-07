import React from "react";
import Image from "next/image";
import Linkedin from "../../public/linkedin";
import Github from "../../public/github";
import Youtube from "../../public/youtube";
import Link from "next/link";
const Navigation = () => {
  return (
    <header className="header ">
      <div className="backdrop"></div>
      <div className="backdrop-edge"></div>
      <nav className="navigation">
        <Image src={"cat.svg"} height="60" width="60" alt="image" />
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
        </ul>
      </nav>
      <ul className="icons">
        <li>
          <Link href={"https://www.linkedin.com/in/pbelokon/"}>
            <Linkedin />
          </Link>
        </li>
        <li>
          <Link href={"https://github.com/pbelokon"}>
            <Github />
          </Link>
        </li>
        <li>
          <Link href={"https://www.youtube.com/@BaronSakamoto"}>
            <Youtube />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
