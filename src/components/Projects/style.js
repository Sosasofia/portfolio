import styled from "styled-components";
import { device, color } from "utils/data";

const Container = styled.div`
  height: 500px;
  border-radius: 5px;
  background-color: ${color.project};
  position: relative;
  text-align: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 8%,
      rgba(0, 0, 0, 0.2) 100%
    );
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }

  @media ${device.laptop} {
    padding-bottom: 60px;
    height: 600px;

    &:hover::before {
      opacity: 1;
    }

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const HidenBox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
  padding: 20px;
  z-index: 3;

  @media ${device.laptop} {
    position: relative;
    position: absolute;
    top: 0;

    opacity: 0;
    transform: translateY(5%);
    transition: 0.5s;
    height: 100%;
    width: 100%;
    align-items: flex-end;

    &:hover {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Image = styled.img`
  max-width: 300px;
  height: auto;

  @media ${device.laptop} {
    max-width: 600px;
  }
`;

const Icon = styled.a`
  width: 15rem;
  height: 5rem;
  padding: 5px;
  background-color: white;
  border-radius: 30px;
  //border: 1px solid #544C41;
  //animation-duration: 6s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 5px;
  text-decoration: none;
  transition: all 0.6s;
  background-color: ${color.navigation};
  color: black;

  &:hover {
    //background-color: rgba(256,256,356,.9);
    //background-color: #625a4f;
    transform: translateY(-7px);
  }
`;

export { Image, Icon, HidenBox, Container };
