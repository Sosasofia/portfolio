import React from "react";
import { IconContext } from "react-icons";
import { List, Item } from "./style";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoSass,
  IoLogoNodejs,
} from "react-icons/io";
import { SiStyledcomponents } from "react-icons/si";
import { FaGit, FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <IconContext.Provider
      value={{ color: "#454545", size: "5rem", className: "skillIcon" }}
    >
      <List>
        <Item>
          <IoLogoHtml5 />
          <p>HTML5</p>
        </Item>
        <Item>
          <IoLogoCss3 />
          <p>CSS3</p>
        </Item>
        <Item>
          <IoLogoJavascript />
          <p>Javascript</p>
        </Item>
        <Item>
          <IoLogoSass />
          <p>Sass</p>
        </Item>
        <Item>
          <FaReact />
          <p>React</p>
        </Item>
        <Item>
          <SiStyledcomponents />
          <p>Styled Components</p>
        </Item>
        <Item>
          <FaGit /> <p>Git</p>
        </Item>
        <Item>
          <IoLogoNodejs />
          <p>Node</p>
        </Item>
      </List>
    </IconContext.Provider>
  );
}
