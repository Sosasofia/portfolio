import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  font-size: 0.6rem;
  margin: 20px;

  
`;

export default function Footer() {
  return (
    <Container>
      <p>© Sosa Sofía | 2022</p>
    </Container>
  );
}
