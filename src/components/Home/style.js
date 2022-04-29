import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "utils/data";


const Container = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
  //padding-top: 19rem;
  height: 90vh;
  padding-top: 6rem;
  
  p {
    margin-bottom: 10rem;
  }

  @media ${device.laptop} {
    margin-bottom: 10rem;
  }
  
`;

const Button = styled(motion.a)`
  width: 18rem;
  height: 5rem;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  border: 3px solid #454545;
  box-shadow: 6px 7px 2px -3px rgb(84 76 65 / 50%);
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
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


export { Container, Button };
