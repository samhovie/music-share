import React, { useContext, createRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import './Player.css'
import { PlayerContext } from "../../App";

export default function Player() {
    const {url, isPlaying, setIsPlaying} = useContext(PlayerContext)

    const onPlayerPlayPause = () => {

        // if it's playing, we need to find the pause class and change it to play (if exists)
        const buttonCollection = document.getElementsByClassName("fa-pause");
        const button = [...buttonCollection][0] ? [...buttonCollection][0] : false

        if (isPlaying && button) {
          button.classList.remove("fa-circle-play")
          button.classList.add("fa-pause-song")
          setIsPlaying(false)
        } else {
          // if it is not playing, we need to know what play button to pause
          // individual cards get context, check if their song is playing
          // we need to check if there is a url to set it to playing
          setIsPlaying(Boolean(url))
        }

      }

    //   const mainPlayButtonCol = document.getElementsByClassName("rhap_main-controls-button rhap_play-pause-button")
    //   const mainPlayPause = [...mainPlayButtonCol][0]
    //   console.log(mainPlayPause)
    //   if (mainPlayPause) mainPlayPause.addEventListener('onClick', onPlayerPlayPause)





    return <AudioPlayer onPlay={onPlayerPlayPause} onPause={onPlayerPlayPause} src={url} />;
}
