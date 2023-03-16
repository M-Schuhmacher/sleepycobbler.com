import './Panel.css';
import React from "react"

const Panel = (props) => {
  const panel_color = "screen " + props.color,
        image = props.image,
        icon_styles = "screen-icon " + props.icon_styles.join(" "),
        name = props.name,
        subtitle = props.subtitle,
        link = props.link;

  return (
    <div class={panel_color}>
      <img class="image screen-image" src={image} draggable="false" />
      <div class="screen-overlay"></div>
      <div class="screen-content">
        <i class={icon_styles}></i>
        <div class="screen-user">
          <span class="name">{name}</span>
          <a class="link" href={link}>{subtitle}</a>
        </div>
      </div>
    </div>
  );
};

export default Panel;
