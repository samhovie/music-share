import React, { useContext, createRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { PlayerContext } from "../../App";

export default function Player( {ref} ) {

    const {url} = useContext(PlayerContext)


    return <AudioPlayer src={url} />;
}
