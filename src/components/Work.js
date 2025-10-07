import React from "react";
import ListItem from "./ListItem";

const Work = () => {
  return (
    <section className="work-section">
      <ListItem
        title="AWS Powered microservice"
        src="/fragments.png"
        url="/works/fragments"
      />
      <ListItem
        title="CLI tool  to generate Static sites"
        src="/bukurain.png"
        url="/works/bukurain"
      />
      <ListItem
        title="CO-OP puzzle game"
        src="/packitup.png"
        url="/works/packitup"
      />
      <ListItem
        title="Open Sours learning platform"
        src="/codecampus.png"
        url="/works/codecampus"
      />
      <ListItem
        title="Writer an IDE with no bloat"
        src="/writer.png"
        url="/works/writer"
      />
    </section>
  );
};

export default Work;
