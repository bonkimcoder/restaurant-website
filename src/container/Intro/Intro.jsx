import React, { useRef, useState } from "react";
import { meal } from "../../constants";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        typeof="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill size={27} color="#fff" />
          ) : (
            <BsFillPlayFill size={27} color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
