import React from "react";
import { IconContext } from "react-icons";
import { List, Item } from "./style";
import { 
  SiJavascript, SiHtml5, SiNodedotjs, SiGithub, 
  SiSass, SiCss3, SiReact, SiStyledcomponents, 
  SiTailwindcss, SiRedux, SiVite, SiExpress 
} from "react-icons/si";

export const skills = [
  {label: "HMTL5", icon: <SiHtml5 />},
  {label: "CSS", icon: <SiCss3 />},
  {label: "Javascript", icon: <SiJavascript />},
  {label: "Saas", icon: <SiSass />},
  {label: "Styled Components", icon: <SiStyledcomponents />},
  {label: "React", icon: <SiReact/>},
  {label: "Tailwind", icon: <SiTailwindcss />},
  {label: "Redux", icon: <SiRedux />},
  {label: "Node.js", icon: <SiNodedotjs />},
  {label: "Express", icon: <SiExpress />},
  {label: "Vite", icon: <SiVite />},
  {label: "Github", icon: <SiGithub />},
]
         
         
export default function Skills() {
  return (
    <IconContext.Provider
      value={{ color: "#454545", size: "5rem", className: "skillIcon" }}
    >
      <List>
      {skills.map((skill, index) => {
        return (
          <Item key={index}>
            {skill.icon}
            <span>{skill.label}</span>
          </Item>
        );
      })}
      </List>
    </IconContext.Provider>
  );
}
