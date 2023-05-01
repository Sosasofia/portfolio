import React from "react";
import { IconContext } from "react-icons";
import { List } from "./style";
import {
  IoLogoJavascript,
  IoLogoCss3,
} from "react-icons/io";
import { SiTailwindcss, SiReact } from "react-icons/si";
import { FaNode } from "react-icons/fa"

export default function Skills() {
  return (
    <IconContext.Provider
      value={{ color: "#454545", size: "5rem", className: "skillIcon" }}
    >
      <List>
          <IoLogoCss3 title="CSS 3"/>
          <IoLogoJavascript title="Javascript"/>
          <SiReact title="React"/>
          <SiTailwindcss title="Tailwind"/>
          <FaNode title="Node.js"/>
      </List>
    </IconContext.Provider>
  );
}
