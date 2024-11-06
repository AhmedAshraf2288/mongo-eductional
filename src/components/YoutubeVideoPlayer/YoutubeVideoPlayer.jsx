import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { useEffect, useState } from "react";
import { useStore } from "../../zustand/store";

const YoutubeVideoPlayer = ({
  url,
  type,
  onStarted,
  onEnded,
  poster,
  posterAlt,
}) => {
  const authData = useStore((state) => state.authData);
  const [codePosition, setCodePosition] = useState({ left: "0%", top: "0%" });

  function getRandomPosition() {
    setCodePosition({
      left: `${Math.floor(Math.random() * 100)}%`,
      top: `${Math.floor(Math.random() * 100)}%`,
    });
  }

  useEffect(() => {
    getRandomPosition();
    const timeOut = setInterval(() => {
      getRandomPosition();
    }, 5000);

    return () => clearInterval(timeOut);
  }, []);

  return (
    <div className="w-100 d-flex" style={{ direction: "ltr" }}>
      <div className="w-100 position-relative">
        {type == 2 ? (
          <MediaPlayer
            aspectRatio="16/9"
            title=""
            src={`youtube/${url}`}
            onEnd={onEnded}
            onStarted={onStarted}
          >
            <MediaProvider>
              {poster ? (
                <Poster className="vds-poster" src={poster} alt={posterAlt} />
              ) : (
                ""
              )}
            </MediaProvider>
            <DefaultVideoLayout icons={defaultLayoutIcons} />
          </MediaPlayer>
        ) : (
          type == 3 && (
            <div
              style={{ aspectRatio: "16 / 9", width: "100%" }}
              className="video-iframe"
              id="player"
            >
              <iframe src={url} allowfullscreen="true" />
            </div>
          )
        )}
        <div
          className="position-absolute text-danger"
          style={codePosition}
          id="code"
        >
          {authData?.code}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoPlayer;
