import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  font-size: 0.6rem;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export default function Footer() {
  return (
    <Container>
      <p>© Sosa Sofía | 2023</p>
    </Container>
  );
}
