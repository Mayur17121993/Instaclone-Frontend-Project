import React from "react";
import "./landingPage.css"
export default function LandingPage() {
    return <>
        <div id="main-container">
            <div id="left-img-container">
                <img src={require("./Images/landingImage.png")} />
            </div>
            <div id="right-container">
                <h1>10x Team 04</h1>
                <a href="/postView">Enter</a>
            </div>
        </div>
    </>
}