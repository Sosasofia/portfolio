import React from "react";
import { AiOutlineGlobal, AiOutlineGithub } from "react-icons/ai";
import { Icon, Container, Links } from "./style";

export default function Project({ data }) {
  const { title, description, github, demo, image, technologies } = data;

  return (
    <Container>
        <h5>{title}</h5>
        <img  alt="project preview" src={image}></img>
        <p>{description}</p>
        <p className="stack">{technologies}</p>
       
        <Links>
          <Icon href={github} target="_blank" rel="noreferrer">
            <AiOutlineGithub color="#454545" size="5rem" className="linkIcon"/>
          </Icon>
          <Icon href={demo} target="_blank" rel="noreferrer" >
            <AiOutlineGlobal color="#454545" size="5rem" className="linkIcon"/>
          </Icon>
      </Links>
    </Container>  
  );
}
