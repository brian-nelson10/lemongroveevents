import React from "react";
import bgImgJpeg from "../../assets/images/event.jpg";
import bgImgWeb from "../../assets/images/web/event.webp";

export default function BackgroundImage() {
    return(
        <picture>
  <source type="image/webp" srcset={bgImgWeb}/>
  <source type="image/jpeg" srcset={bgImgJpeg}/>
  <img src={bgImgJpeg} alt=""/>
</picture>

    )
}