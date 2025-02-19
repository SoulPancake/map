import React, { useRef } from "react";
import "./threatContainer.css"
import { Cancel } from "@material-ui/icons";

export default function ThreatModal({ setShowThreatModal }) {
    const textRef = useRef();

    return (
        <div className="threatContainer">


            <div className="logo">
                <img src={require(".//logo2.png")} alt="optic logo"></img>
            </div>
            <form >
                <label>

                    <input className="analysisBox" type="text" placeholder="Enter the text to analyse the sentiment... " ref={textRef} />
                </label>
                <input className="tsb" type="submit" value="Analyse threat sentiment" />
            </form>
            <Cancel className="threatCancel" onClick={() => setShowThreatModal(false)}></Cancel>
        </div>
    )
}