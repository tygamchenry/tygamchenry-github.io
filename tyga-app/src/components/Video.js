import React from "react";
import ReactPlayer from "react-player";
import videoFile from "./../assets/videos/lady-working.mp4";
import styles from "./Video.module.scss";

export default function Video() {
    return(
        <ReactPlayer
            className={`${styles.video}`}
            url={videoFile}
            muted={true}
            loop={true}
            playing
            autoPlay
            controls={false}
            playsinline
            />
    );
}