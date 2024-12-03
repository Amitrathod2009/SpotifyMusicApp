import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const playerContext = createContext();

const PlayerConetxtProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[1]);
  const [playStatus, setPlayStatus] = useState(false);
  const [Loaded,setIsLoaded]=useState(false)
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play=()=>{
    audioRef.current.play();
    setPlayStatus(true)
  }
  const pause=()=>{
    audioRef.current.pause();
    setPlayStatus(false)
  }

  const playWithId=async()=>{
   await setTrack(songsData[id]);
   await audioRef.current.play
  }

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };
  
    audioRef.current.addEventListener('loadeddata', handleLoad);
  
    return () => audioRef.current.removeEventListener('loadeddata', handleLoad);
  }, [audioRef]);
  

useEffect(()=>{
setTimeout(() => {
  audioRef.current.ontimeupdate=()=>{
    seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100)+"%")
    console.log("DURATIONS==>",Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))
    setTime({
    currentTime: {
      second: Math.floor(audioRef.current.currentTime%60),
      minute: Math.floor(audioRef.current.currentTime/60),
    },
    totalTime: {
      second: Math.floor(audioRef.current.duration%60),
      minute: Math.floor(audioRef.current.duration/60),
    },
  })
}

}, 1000);
},[audioRef])

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,pause
  };
  return (
    <playerContext.Provider value={contextValue} {...props}>
      {props.children}
    </playerContext.Provider>
  );
};

export default PlayerConetxtProvider;
