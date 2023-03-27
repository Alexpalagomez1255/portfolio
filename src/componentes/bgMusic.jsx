import { useEffect } from 'react';
import music from '../assets/music.mp3';

function MusicPlayer() { 
  useEffect(() => {
    const audio = new Audio(music);
    audio.loop = true;
    audio.autoplay = true;

    const context = new AudioContext();
    const source = context.createMediaElementSource(audio);
    source.connect(context.destination);

    return () => {
      audio.pause();
      audio.src = '';
      source.disconnect();
    };
  }, []);
}

export default MusicPlayer;