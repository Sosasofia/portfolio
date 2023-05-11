import React from "react";
import FadeIn from "animations/FadeIn";
import Social from "../Social";
import { Container } from "./style.js";
import ContactForm from "./ContactForm";


export default function Contact() {

  return (
    <FadeIn>
      <Container id="contact">
        <h3>Contact</h3>
        <ContactForm></ContactForm>        
        <Social></Social>
      </Container>
    </FadeIn>
  );
}
