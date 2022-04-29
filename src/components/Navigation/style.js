import styled from "styled-components";
import { device, color } from "utils/data";

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px 60px;
  position: fixed;
  z-index: 5;
  background-color: ${color.navigation};
  opacity: .9;
    
  @media ${device.laptop} {
    width: 25vw;
    height: 100vh;
    border-right: 1px solid lightgray;
    flex-direction: column;
    justify-content: center;
  }
`;

const Item = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #544C41;

  p {
    display: none;
  }

  @media ${device.laptop} {
    & {
      width: 180px;
      width: fit-content;
      margin: 25px;
      border-radius: 40px;
      transition: all 0.3s ease;
      position: relative;
      height: 5rem;
      padding: 10px 0;
    }

    &:before {
      content: "";
      position: absolute;
      height: 5rem;
      width: 5rem;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 40px;
      transition: all 0.4s ease;
    }

    &:hover:before {
      width: 100%;
      background-color: rgba(256,256,356,.5);
      transform: scale(1.08);
    }

    p {
      display: block;
      text-transform: lowercase;
      letter-spacing: 2px;
      margin: 0 20px;
      z-index: 5;
      color: black;
    }
  }
`;

export { Navbar, Item };
