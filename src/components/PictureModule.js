import React from "react"
import "./PictureModule.css"

const PictureModule = ({ imgSrc, text }) => {
  return (
    <div id="picture-container">
      <img src={imgSrc} alt="Family" id="gag-image" />
      <p>{text}</p>
    </div>
  )
}

export default PictureModule
