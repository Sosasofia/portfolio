import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { device } from "utils/data";
import { motion } from "framer-motion";

const morph = keyframes`
  0% { border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%; } 
  50% { border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%; } 
`;

const Container = styled(motion.div)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: auto;
`;

const Shape = styled.div`
  grid-area: image;
  background-image: url("/foto.jpg");
  animation: ${morph} 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 200px;
  width: 200px;
  transition: all 1s ease-in-out;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    animation-play-state: paused;
    cursor: pointer;
  }

  @media ${device.laptop} {
    height: 250px;
    width: 250px;
  }
`;

export default function Image() {
  return (
    <Container className="container">
      <Shape className="shape"></Shape>
    </Container>
  );
}
