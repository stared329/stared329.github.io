import React from 'react';
import useScrollFadeIn from '../util/hooks';

const Main = ({ height, gr, br }) => {
  return (
    <div className="flex flex-col bg-white h-screen">
      <div
        className={`bg-[url('../assets/img/004.jpg')] bg-cover bg-no-repeat flex flex-col relative`}
        style={{ height }}
      >
        <div className="flex flex-col mix-blend-color-burn">
          <h1
            className="bg-white font-cursive w-full text-center text-lg py-5"
            {...useScrollFadeIn('down', 1, 0)}
          >
            Wedding invitaion
          </h1>
          <div className="inline-flex justify-center w-full gap-[12px] py-3">
            <h2
              className="text-3xl font-bold"
              {...useScrollFadeIn('left', 1, 0.3)}
            >
              {gr && gr.child.name}
            </h2>
            <p
              className="font-cursive self-end"
              {...useScrollFadeIn('left', 1, 0.2)}
            >
              and
            </p>
            <h2
              className="text-3xl font-bold"
              {...useScrollFadeIn('right', 1, 0.3)}
            >
              {br && br.child.name}
            </h2>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center w-full text-center text-lg py-8 bg-white m-auto h-[calc(100% - ${height}px)]`}
      >
        <h3 className="font-bold" {...useScrollFadeIn('up', 1, 0.8)}>
          2023년 5월 6일 토요일 오후 1시 20분
        </h3>
        <h3 {...useScrollFadeIn('up', 1, 0.9)}>
          신도림 테크노마트 <b>7층</b>
        </h3>
        <h3 className="font-bold" {...useScrollFadeIn('up', 1, 1)}>
          웨스턴베니비스 다이너스티홀
        </h3>
      </div>
    </div>
  );
};

export default Main;
