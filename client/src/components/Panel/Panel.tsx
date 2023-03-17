import './Panel.css';
import React from "react"

export interface panelProps {
   color: string,
   image: string,
   icon_styles: Array<string>,
   name: string,
   subtitle: string,
   link: string,
   alt_text: string
}

export const Panel = (props: panelProps) => {
   const panel_color = "screen " + props.color,
      image = props.image,
      icon_styles = "screen-icon " + props.icon_styles.join(" "),
      name = props.name,
      subtitle = props.subtitle,
      link = props.link,
      alt_text = props.alt_text;

   return (
      <div className={panel_color}>
         <img className="image screen-image" src={image} alt={alt_text} draggable="false" />
         <div className="screen-overlay"></div>
         <div className="screen-content">
            <i className={icon_styles}></i>
            <div className="screen-user">
               <span className="name">{name}</span>
               <a className="link" href={link}>{subtitle}</a>
            </div>
         </div>
      </div>
   );
};