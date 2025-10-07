import React from "react";
import { Asap } from "next/font/google";

const asap = Asap({
  subsets: ["latin"],
});
const About = () => {
  return (
    <section className="about-section">
      <h1 className={asap.className}>Hi there! I'm Pavel.</h1>
      <div className="about-text">
        <p>
          I got interested in programming in 2017, when I created an
          <span> evasion game with pygame </span>for my computer-science class,
          given it's boundless creative possibilities I loved in since then.
        </p>
        <br />
        <p>
          I've graduate from Seneca College in 2024 from Computer Science
          degree, I've also interned at Toronto District School Board(TDSB){" "}
          <br />
          as a <span>Web developer</span>.
        </p>
        <br />
        <p>
          These days, I focus on facilitating my knowledge and skills in
          <span> creative Computer Programming</span>, and I'm also working on a
          <span> Game</span> for a <span> Game Studio </span> I started with my
          friend.
        </p>
      </div>
    </section>
  );
};

export default About;
