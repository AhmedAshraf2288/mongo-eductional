import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = ({ url}) => {
  return (
    <div className="ltr w-100">
      <ReactAudioPlayer
        src={url}
        controls
        controlsList="nodownload"
        className="w-100"
      />
    </div>
  );
};

export default AudioPlayer;