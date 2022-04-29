import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Container, Button } from "./style";
import Image from "../Image";
import Social from "../Social";

export default function Home() {
  return (
    <Container
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Image></Image>
      <h1>Sosa Sofía</h1>
      <p>Front-end developer and student.</p>
      <Social></Social>
      <Button
        href="https://drive.google.com/drive/folders/1zHots5C-1JyvfAyq6q8MhxC2yAfMOyXY?usp=sharing"
        target="_blank"
      >
        <AiOutlineDownload size="3rem" />
        Download CV
      </Button>
    </Container>
  );
}
