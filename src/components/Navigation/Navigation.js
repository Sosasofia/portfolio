import React from "react";
import { FaHome } from "react-icons/fa";
import {
  BsFillPersonFill,
  BsEnvelopeFill,
  BsBriefcaseFill,
} from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { Navbar, Item } from "./style.js"



export default function Navigation() {
  return (
    <IconContext.Provider
      value={{ color: "#454545", size: "2.5rem", className: "navIcons" }}
    >
      <Navbar>
        <Item href="#home">
          <FaHome />
          <p>Home</p>
        </Item>
        <Item href="#about">
          <BsFillPersonFill></BsFillPersonFill>
          <p>About</p>
        </Item>
        <Item href="#projects">
          <BsBriefcaseFill></BsBriefcaseFill>
          <p>Projects</p>
        </Item>
        <Item href="#contact">
          <BsEnvelopeFill></BsEnvelopeFill>
          <p>Contact</p>
        </Item>
      </Navbar>
    </IconContext.Provider>
  );
}
