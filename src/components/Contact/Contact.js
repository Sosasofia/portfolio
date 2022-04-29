import React from "react";
import FadeIn from "animations/FadeIn";
import Social from "../Social";
import { Container } from "./style.js";
import ContactForm from "./ContactForm";


export default function Contact() {

  return (
    <FadeIn>
      <Container id="contact">
        <h2>Contact</h2>
        <ContactForm></ContactForm>        
        <Social></Social>
      </Container>
    </FadeIn>
  );
}
