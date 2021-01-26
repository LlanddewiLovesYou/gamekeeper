import React from "react";

interface Props {}

export const useAudio = (audioUrl: string) => {
  let audio = new Audio(audioUrl);
  const playAudio = (e: any) => {
    e.preventDefault();
    audio.play();
  };
  const AudioBoundary: React.FC<Props> = ({ children }) => {
    return <div onClick={(e) => playAudio(e)}>{children}</div>;
  };

  return AudioBoundary;
};
