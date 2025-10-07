import React from "react";
import { Asap } from "next/font/google";

const asap = Asap({
  subsets: ["latin"],
});
const About = () => {
  return (
    <section className="about-section">
      <h1 className={asap.className}>Hi there! I&apos;m Pavel</h1>
      <div className="about-text">
        <p>
          I got interested in programming in 2017, when I created an
          <span> evasion game with pygame </span>
          for my computer science class. Given its boundless creative
          possibilities, I&apos;ve loved it since then.
        </p>
        <br />
        <p>
          I&apos;ve graduated from Seneca College in 2024 with a Computer
          Science degree. I&apos;ve also interned at Toronto District School
          Board (TDSB) <br />
          as a <span>Web developer</span>.
        </p>
        <br />
        <p>
          These days, I focus on developing my knowledge and skills in
          <span> creative Computer Programming</span>, and I&apos;m also working
          on a<span> game</span> for a <span>game studio</span> I started with
          my friend.
        </p>
      </div>
    </section>
  );
};

export default About;
