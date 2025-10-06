import React from "react";
import { Asap } from "next/font/google";
import Image from "next/image";
import ArrowDown from "./ArrowDown";
const asap = Asap({
  subsets: ["latin"],
});
const Worsks = () => {
  return (
    <section className="works-section">
      <div className="top">
        <h1 className={asap.className}>My WORKS</h1>
        <ArrowDown width={"50"} height={"50"} className="arrow" />
      </div>
    </section>
  );
};

export default Worsks;
