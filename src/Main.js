import React, { useState, useRef, useEffect } from 'react';
import bg from './assets/bg.mp3';

const Main = ({ audioStatus: as, height, gr, br }) => {
  const myRef = useRef();
  const [audioStatus, changeAudioStatus] = useState(false);

  const handleBG = () => {
    if (audioStatus) {
      myRef.current.pause();
    } else {
      myRef.current.play();
    }
    changeAudioStatus(!audioStatus);
  };

  useEffect(() => {
    if (as) {
      myRef.current.play();
    } else {
      myRef.current.pause();
    }
    if (as !== audioStatus) {
      changeAudioStatus(as);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [as]);

  return (
    <div className="flex flex-col bg-white h-screen-full pb-8">
      <div
        className={`bg-[url('assets/img/004.jpg')] bg-cover bg-no-repeat flex flex-col relative`}
        style={{ height }}
      >
        <audio ref={myRef} src={bg} />
        <button
          className="absolute right-1 top-1 text-white opacity-75 z-10"
          onClick={handleBG}
        >
          {!!audioStatus ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          )}
        </button>
        <div className="flex flex-col mix-blend-color-burn">
          <h1 className="bg-white font-cursive w-full text-center text-lg py-5">
            Wedding invitaion
          </h1>
          <div className="inline-flex justify-center w-full gap-[12px] py-3">
            {gr && <h2 className="text-3xl font-bold">{gr.child.name}</h2>}
            <p className="font-cursive self-end">and</p>
            {br && <h2 className="text-3xl font-bold">{br.child.name}</h2>}
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center w-full text-center text-lg py-8 bg-white m-auto h-[calc(100% - ${height}px)]`}
      >
        <h3 className="font-bold">2023년 5월 6일 토요일 오후 1시 20분</h3>
        <h3>
          신도림 테크노마트 <b>7층</b>
        </h3>
        <h3 className="font-bold">웨스턴베니비스 다이너스티홀</h3>
      </div>
    </div>
  );
};

export default Main;
