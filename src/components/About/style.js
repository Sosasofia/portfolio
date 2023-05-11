import styled from "styled-components";
import { device } from "utils/data";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  line-height: 1.5;
  padding: 40px 0;
  max-width: 800px;
  margin: 0px auto; 

  p {
    margin: 20px 0;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;

  @media ${device.laptop} {
    font-size: 2.5rem;
    grid-template-columns: repeat(6, 1fr);
  }
`;

const Item = styled.li`
  transition: all 0.4s ease 0s;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 1.5rem;
  }

  &:hover {
    transform: translateY(-3px);
  }
`;

export { Container, List, Item };
