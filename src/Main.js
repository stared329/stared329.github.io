import React from 'react';

const Main = ({ height, gr, br }) => {
  return (
    <div className="flex flex-col bg-white h-screen-full">
      <div
        className={`bg-[url('assets/img/004.jpg')] bg-cover bg-no-repeat flex flex-col relative`}
        style={{ height }}
      >
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
