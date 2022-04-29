import styled from "styled-components";
import { device, color } from "utils/data";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  line-height: 1.5;
  padding: 20px 0;
  max-width: 700px;
  margin: 0px auto; 
  
  p {
    margin: 20px;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  p {
    margin: 0;
  }

  @media ${device.laptop} {
    font-size: 2.5rem;
  }
`;

const Item = styled.li`
  list-style-type: none;
  padding: 10px;
  box-shadow: 6px 7px 2px -3px rgb(84 76 65 / 50%);
  background-color: ${color.navigation};
  transition: all 0.4s ease 0s;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(256, 256, 256, 0.5);
    transform: translateY(-3px);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
  }
`;

export { Container, List, Item };
