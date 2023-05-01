import React from "react";
import { AiOutlineDownload, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { Container, Button, Buttons } from "./style";
import Skills from "./Skills";

export default function Home() {
  return (
    <Container
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1>Sosa Sofía</h1>
      <h2>Frontend developer</h2>
      <div className="location">
        <AiOutlineEnvironment size="2rem" />
        <p>Buenos Aires, Argentina</p>
      </div>
      
      <Skills />
      <Buttons>
        <Button href="#contact">
          <AiOutlinePhone size="3rem"/>
          Contact me
        </Button>
        <Button
          href="https://drive.google.com/drive/folders/1zHots5C-1JyvfAyq6q8MhxC2yAfMOyXY?usp=sharing"
          target="_blank"
        >
          <AiOutlineDownload size="3rem" />
          Download CV
        </Button>
      </Buttons>
    </Container>
  );
}
