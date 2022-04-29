import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {  Image, Icon, HidenBox, Container } from "./style";

export default function Thumbnail({ data }) {

  const { image, title, description, github, demo } = data

  return (
    <Container>
      <Image src={image}></Image>
      <h3>{title}</h3>
      <p>{description}</p>

      <HidenBox className="hiden-box">
        <Icon href={github} target="_blank" rel="noreferrer" className="linkIcon">
          <FaGithub color="#454545" size="3rem" />
          <span>Github</span>
        </Icon>
        <Icon href={demo} target="_blank" rel="noreferrer" className="linkIcon">
          <FaExternalLinkAlt color="#454545" size="3rem" />
          <span>Live demo</span>
        </Icon>
      </HidenBox>
    </Container>  
  );
}

