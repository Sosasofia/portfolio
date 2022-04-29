import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import { projects } from "utils/data";
import FadeIn from "animations/FadeIn";

const Container = styled(motion.div)`
  width: 100%;
  padding: 20px 0;
  margin: 0 auto;
`;

export default function Projects() {
  return (
    <FadeIn>
      <Container id="projects">
        <h2>Projects</h2>
        <Carousel projects={projects} />
      </Container>
    </FadeIn>
  );
}
