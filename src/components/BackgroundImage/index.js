import React from "react";
import bgImgJpeg from "../../assets/images/stock.jpeg";
import bgImgWeb from "../../assets/images/web/stock.webp";

export default function BackgroundImage() {
    return(
        <picture>
  <source type="image/webp" srcset={bgImgWeb}/>
  <source type="image/jpeg" srcset={bgImgJpeg}/>
  <img src={bgImgJpeg} alt=""/>
</picture>

    )
}