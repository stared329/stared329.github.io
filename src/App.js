import React, { useEffect, useRef, useState } from 'react';
import ReactSparkle from 'react-sparkle';
import PhotoViewer from './PhotoViewer';
import Main from './Main';
import Introduce from './Introduce';
import Gallery from './Gallery';
import Location from './Location';
import info from './assets/info.json';

function App() {
  const { width } = window.screen;
  const w = width > 448 ? 448 : width;
  const [height, setHeight] = useState(parseInt(1.50333504 * w, 10));
  const [play, setPlay] = useState(false);
  const audioRef = useRef();
  const [{ father, mother, child }, setInfo] = useState(info.br);
  const [openPhoto, setPhoto] = useState({ open: false, index: null });

  const handleStart = (e) => {
    setPlay(true);
    document.removeEventListener('click', handleStart);
  };

  if (width < 449) {
    document.addEventListener('click', handleStart, false);
  }
  document.addEventListener('beforeunload', () => {
    audioRef.current.pause();
    setPlay(false);
  });

  useEffect(() => {
    const [k, v] = window.location.search.replace('?', '').split('=');
    if (k === 'target' && ['br', 'gr'].includes(v)) {
      setInfo(info[v]);
    } else {
      setInfo(info.br);
    }
    const { width } = window.screen;
    const w = width > 448 ? 448 : width;
    setHeight(parseInt(1.50333504 * w, 10));
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    const onPlay = () => audio.play();

    if (audio && play) {
      onPlay();
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [play]);

  const onStart = () => {
    setPlay(!play);
  };

  return (
    <div className="root-back h-screen-full">
      <div className="flex w-full justify-center overflow-auto opacity-95">
        <div
          className={`relative container max-w-md mx-auto h-screen-full text-back ${
            openPhoto.open && 'blur-md'
          }`}
        >
          <audio
            preload="true"
            autobuffer="true"
            style={{ display: 'none' }}
            ref={audioRef}
            loop
          >
            <source src={'bg.mp3'} />
          </audio>
          <label className="swap absolute right-1 top-1 text-back opacity-75 z-10 mix-blend-multiply">
            <input type="checkbox" onChange={onStart} checked={play} />
            <svg
              className="swap-on fill-current shadow-sm"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
            </svg>
            <svg
              className="swap-off fill-current shadow-sm"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
            </svg>
          </label>
          <Main {...{ height, ...info }} />
          <Introduce {...{ father, mother, child }} />
          <Gallery {...{ setPhoto }} />
          <Location />
          <footer className="bg-back max-w-md mx-auto w-full font-sans text-xs text-center text-white py-2">
            <p className="opacity-60">
              Copyright 2023 jamie kim All rights reserved.
            </p>
          </footer>
        </div>
        <PhotoViewer
          {...{
            ...openPhoto,
            onClose: () => setPhoto({ open: false, index: null }),
          }}
        />
        <ReactSparkle flickerSpeed="slower" maxSize={7} fadeOutSpeed={30} />
      </div>
    </div>
  );
}

export default App;
