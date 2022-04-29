import React from "react";
import { Container } from "./style";
import FadeIn from "animations/FadeIn";
import Skills from "components/About/Skills";


export default function About() {
  return (
    <FadeIn>
        <Container id="about">
          <h2>About Me</h2>
          <p>Hi there! My name is Sofia!</p>
          <p>I’m 22 years old from Buenos Aires, Argentina. Currently studying at UTN FRBA. In the last few years, I became more interested in web development, so I decided to study HMTL, CSS, and JavaScript by myself.</p>
          <p>I’m now looking for a junior dev position in a company that allows me to grow professionally.</p>
          <h2>Skills</h2>
          <Skills></Skills>
        </Container>
    </FadeIn>
  );
}