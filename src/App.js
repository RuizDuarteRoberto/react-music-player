import { fortawesome } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faPause,
  faStepBackward,
  faStepForward,
  faVolumeUp,
  faVolumeMute,
  faVolumeDown,
} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <h1>Music Player</h1>
      <div className="player">
        <div className="player-controls">
          <FontAwesomeIcon icon={faStepBackward} />
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
          <FontAwesomeIcon icon={faStepForward} />
        </div>
        <div className="player-progress">
          <div className="player-progress-bar">
            <div className="player-progress-bar-fill"></div>
          </div>
        </div>

        <div className="player-volume">
          <FontAwesomeIcon icon={faVolumeUp} />
          <FontAwesomeIcon icon={faVolumeMute} />
          <FontAwesomeIcon icon={faVolumeDown} />
        </div>
      </div>
    </div>
  )
}

export default App
