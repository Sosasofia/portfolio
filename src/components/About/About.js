import React from "react";
import { Container } from "./style";
import FadeIn from "animations/FadeIn";
import Skills from "components/About/Skills";


export default function About() {
  return (
    <FadeIn>
        <Container id="about">
          <h3>About Me</h3>
          <p>Hi there! My name is Sofia!</p>
          <p>I'm a Frontend developer passionate about learning new technologies, currently studying engineering at UTN FRBA. </p>
          <p>I’m now looking for a junior dev position in a company that allows me to grow professionally.</p>
          <h4>Technologies & Tools</h4>
          <Skills></Skills>
        </Container>
    </FadeIn>
  );
}