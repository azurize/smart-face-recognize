import React from "react";
import "./ImageLinkForm.css";

const ImageLink = () => {
  return (
    <div>
        <p className="f3 white">
            {"I can detect faces in images. Give me a try!"}
        </p>
        <div className="center">
            <div className="center Console pa4 br3 shadow-5">
                <input className="f4 pa2 w-70 center" type="text" />
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-dark-gray">Detect!</button>
            </div>
        </div>
    </div>
  );
};

export default ImageLink;
