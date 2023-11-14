import React from "react";
import videoFile from "./../assets/videos/lady-working.mp4";
import ReactPlayer from "react-player";

export default function Video() {
    return(
        <ReactPlayer
            url={videoFile}
            muted={true}
            loop={true}
            controls
            playing
            autoPlay
            />
    );
}