import Line from './assets/img/line_01.svg';

function App() {
  return (
    <div className="bg-back w-full min-h-screen">
      <div className="container max-w-md mx-auto bg-white h-full text-back">
        <h1 className="font-cursive w-full text-center py-4">Wedding invitaion</h1>
        <div className="bg-[url('004.jpg')] bg-contain bg-no-repeat relative h-[673px] mb-24">
          <div className="absolute inline-flex justify-center w-full gap-4 top-0 bg-gradient-to-b py-6 from-white">
            <h2 className="text-3xl font-bold">안승범</h2>
            <p className="font-cursive self-end">and</p>
            <h2 className="text-3xl font-bold">김재명</h2>
          </div>
          <div className="absolute flex flex-col justify-center w-full text-center bottom-0 translate-y-[50%] pb-6 pt-10" style={{background: 'linear-gradient(to top, #FFFFFF 65%, rgba(255, 255, 255, 0) 100%)'}}>
            <h3 className="text-2xl">2023년 5월 6일 토요일 오후 1시 20분</h3>
            <h3 className="text-xl">신도림 테크노마트 <b>7층</b></h3>
            <h3 className="text-xl">웨스턴베니비스 다이너스티홀</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <img src={Line} alt="botanic line" className='w-2/3 mx-auto mb-4' />
          {["모든 것이 새로워지는 봄날,", "사랑하는 두 사람이", "새 인생을 시작하려 합니다.", "바쁘시더라도 와주셔서", "저희 두 사람의 결혼을 축복해 주시고", "따뜻한 마음으로 격려해 주신다면", "큰 힘이 되겠습니다."].map(v => <p className="w-full text-center">{v}</p>)}
          <img src={Line} alt="botanic line" className='w-2/3 rotate-180 mx-auto mt-4' />
          
        </div>
      </div>
    </div>
  );
}

export default App;
