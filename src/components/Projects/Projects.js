import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projects, device } from "utils/data";
import FadeIn from "animations/FadeIn";
import Project from "./Project";

const Container = styled(motion.div)`
  padding: 0 20px;
  margin: 100px 0;

  @media  ${device.laptop} {
    padding: 0 50px;
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  gap: 20px;

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function Projects() {
  return (
    <FadeIn>
      <Container id="projects">
        <h3>Projects</h3>
        <List>
          {
            projects.map((project, index) => {return (
              <Project key={index} data={project} />
            )})
          }
        </List>
      </Container>
    </FadeIn>
  );
}
