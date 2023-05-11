import styled from "styled-components";
import { device, color } from "utils/data";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 0;
  max-width: 700px;  
  height: 90vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${color.navigation};
  box-shadow: 10px 8px 5px -3px rgba(84, 76, 65, 0.5);

  @media ${device.laptop} {
    padding: 30px;
  }
`;

const commonStyles = `
  border: none;
  border-radius: 3px;
  border: 1px solid #454545;
  font-size: 2rem;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #f3e9dc;
  outline:none;

  &:focus {
    border: 1px solid gold;
  }
`;

const Input = styled.input`
  ${commonStyles}
  height: 4.5rem;
`;

const Textarea = styled.textarea`
  ${commonStyles}
  height: 17rem;
`;

const Button = styled.input`
  margin: 30px auto;
  width: 15rem;
  height: 5rem;
  letter-spacing: 2px;
  font-size: 2rem;
  border: 2px solid #544c41;
  border: 2px solid #454545;

  cursor: pointer;
  box-shadow: 6px 7px 2px -3px rgb(84 76 65 / 50%);
  transition: all 0.3s ease 0s;
  background-color: #f3e9dc;
  margin-bottom: 0;

  &:hover {
    background-color: #625a4f;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 6px 7px 2px -3px rgb(84 76 65 / 50%);
  }
`;

const Error = styled.div`
  color: red;
  font-style: italic;
  display: flex;
  align-items: center;
  font-weight: bold;

  span {
    font-size: 1.6rem;
    margin-left: 10px;
  }
`;


const Alert = styled.div`
  background-color: #c0c2d7;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: bold;
`;

export { Error, Form, Input, Textarea, Button, Container, Alert };
