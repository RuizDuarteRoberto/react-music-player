import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fortawesome } from '@fortawesome/fontawesome-svg-core'
import {
  faPlay,
  faCaretLeft,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons'

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null)

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }
  const timeUpdateHandler = () => {}
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  })

  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="backward-button"
          size="2x"
          icon={faCaretLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play-button"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="forward-button"
          size="2x"
          icon={faCaretRight}
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player
