import styled from "styled-components";
import { device, color } from "utils/data";

const Container = styled.div`
  position: relative;
  background-color: ${color.project};
  padding: 20px; 
  border: 3px solid #454545;
  border-radius: 5px;
  display: grid;
  gap: 20px;

  img {
    max-width: 100%;
    min-width: 100%;
  }

  .stack {
    font-weight: bolder;
    color: black;
    font-size: 1.5rem;
  }  

  @media ${device.laptop} {
    text-align: left;

    img {
      max-width: 250px;
    }
  } 
`;

const Links = styled.div`
  display: inline-flex;
  margin: 10px;
  width: 100%;
  justify-content: center;
  
  @media ${device.laptop} {
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const Icon = styled.a`
  margin: 0 5px;
  
  .linkIcon {
    transition: ease-in-out 0.4;
  }

  @media ${device.laptop} {
    margin: 0 10px;

    .linkIcon:hover {
      fill: black;
      transform: scale(1.05); 
    }
  }
`;


export { Icon, Links, Container };
