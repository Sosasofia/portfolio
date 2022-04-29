import React from "react";
import styled from "styled-components";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const StyledSocial = styled(motion.div)`
  display: inline-flex;

  .icons:hover {
    fill: black;
  }
`;

const Icon = styled.a`
  width: 5rem;
  height: 5rem;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  transition: all .6s;

  &:hover {
    transform: translateY(-7px)
  }
`;

export default function Social() {
  return (
    <IconContext.Provider
      value={{ color: "#454545", size: "3rem", className: "icons" }}
    >
      <StyledSocial>
        <Icon
          href="https://github.com/Sosasofia"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </Icon>
        <Icon
          href="https://www.linkedin.com/in/sofia-sosa"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </Icon>
        <Icon
          href="mailto:sosasofiabeatriz@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </Icon>
      </StyledSocial>
    </IconContext.Provider>
  );
}
