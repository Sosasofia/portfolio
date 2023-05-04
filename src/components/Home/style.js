import styled from "styled-components";
import { motion } from "framer-motion";
import { device, color } from "utils/data";


const Container = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 90vh;
  padding-top: 6rem;
  
  .location {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    color: ${color.dark};
    size: 10rem;
  }
  
  @media ${device.laptop} {
    margin-bottom: 10rem;
  }
  
`;

const Button = styled.a`
  width: 18rem;
  height: 5rem;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  border: 3px solid #454545;
  box-shadow: 6px 7px 2px -3px rgb(84 76 65 / 50%);
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.4s ease 0s;
  color: #454545;

  &:hover {
    box-shadow: none;
    transform: translateY(-5px);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 6px 7px 2px -3px rgb(84 76 65 / 50%);
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

const List = styled.div`
  display: flex;
  gap: 1rem;
  margin: 9rem 0 4rem 0;

  .skillIcon {
    transition: all .6s;
  }

  .skillIcon:hover {
    transform: translateY(-7px);
    fill: black;
  }

  @media ${device.laptop} {
    gap: 2rem;
  }
`;


export { Container, Button, Buttons, List };
