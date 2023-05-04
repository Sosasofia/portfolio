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
import { SiStyledcomponents, SiTailwindcss, SiRedux, SiVite, SiExpress } from "react-icons/si";
import { FaGithub, FaReact } from "react-icons/fa";


export const skills = [
  {label: "HMTL5", icon: <IoLogoHtml5 />},
  {label: "CSS", icon: <IoLogoCss3 />},
  {label: "Javascript", icon: <IoLogoJavascript />},
  {label: "Saas", icon: <IoLogoSass />},
  {label: "Styled Components", icon: <SiStyledcomponents />},
  {label: "React", icon:<FaReact/>},
  {label: "Tailwind", icon: <SiTailwindcss />},
  {label: "Redux", icon: <SiRedux />},
  {label: "Node.js", icon: <IoLogoNodejs />},
  {label: "Express", icon: <SiExpress />},
  {label: "Vite", icon: <SiVite />},
  {label: "Github", icon: <FaGithub />},
]
         
         
export default function Skills() {
  return (
    <IconContext.Provider
      value={{ color: "#454545", size: "5rem", className: "skillIcon" }}
    >
      <List>
      {skills.map(skill => {
        return (
          <Item>
            {skill.icon}
            <span>{skill.label}</span>
          </Item>
        );
      })}
      </List>
    </IconContext.Provider>
  );
}
