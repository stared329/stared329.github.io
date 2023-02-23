import React, {useState} from 'react';
import PhotoAlbum from "react-photo-album";
import Line from './assets/img/line_01.svg';
import KakaoMap from "./KakaoMap";
import photos from "./Photo";
import PhotoViewer from "./PhotoViewer";
const { Kakao } = window;

const Sparkles = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
</svg>
);

function App() {
  const [grF, grM] = [
    {name:"안기환", re:"아버지", tel: "01000001234", bank: "기업", account: "123-456-78910"}, 
    { name: "이재순", re:"어머니", tel: "01000001234", bank: "기업", account: "123-456-78910"}, 
  ];
  const [brF, brM] = [
    { name: "김의겸", re:"아버지", tel: "01033178042", bank: "기업", account: "123-456-78910" },
    { name: "이성자", re:"어머니", tel: "01037298042", bank: "기업", account: "123-456-78910" },
  ];
  const [gr, br] = [
    { name: "안승범", re:"신랑", tel: "01071117466", bank: "기업", account: "010-7111-7466" },
    { name: "김재명", re:"신부", tel: "01092818042", bank: "카카오뱅크", account: "3333-12-6807956" },
  ];

  const [openPhoto, setPhoto] = useState({open: false, index: null,});

  const handleAccount = ({ name: n, bank:b, account: a}) => () => {
    navigator.clipboard.writeText(`${b} ${a} ${n}`);
    alert(`${n}님의 계좌번호가 복사되었습니다.`);
  };

  const startKakaoNavi = () => {
    Kakao.Navi.start({
      name: '신도림 테크노마트',
      x: 126.890227293528,
      y: 37.5070438414784,
      coordType: 'wgs84',
    });
  };

  const startTmap = () => {
    window.open('https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx1a6753f111de4d7dbcb5dc7c930d2025&name=%EC%9B%A8%EC%8A%A4%ED%84%B4%EB%B2%A0%EB%8B%88%EB%B9%84%EC%8A%A4+%EC%8B%A0%EB%8F%84%EB%A6%BC+%2C+7%EC%B8%B5+%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%8A%A4%ED%99%80&lon=126.890227293528&lat=37.5070438414784','','');
  };

  const handlePhoto = (e)  => {
    console.log(e.index, e.photo.src);
    const {index} = e;
    setPhoto({ open: true, index, onClose: () => setPhoto({ open: false, index: null })})
  }

  return (
    <div className="root-back min-h-screen">
      <div className="flex w-full justify-center overflow-auto opacity-95">
        <div className={`container max-w-md mx-auto  h-full text-back ${openPhoto.open && 'blur-md'}`}>
          <h1 className="bg-white font-cursive w-full text-center py-4">Wedding invitaion</h1>
          <div className="bg-[url('assets/img/004.jpg')] bg-contain bg-no-repeat relative h-[673px]">
            <div className="absolute inline-flex justify-center w-full gap-4 top-0 bg-gradient-to-b py-6 from-white">
              <h2 className="text-3xl font-bold">{gr.name}</h2>
              <p className="font-cursive self-end">and</p>
              <h2 className="text-3xl font-bold">{br.name}</h2>
            </div>
            <div className="absolute flex flex-col justify-center w-full text-center text-lg bottom-0 pt-10" style={{background: 'linear-gradient(to top, #FFFFFF 65%, rgba(255, 255, 255, 0) 100%)'}}>
              <h3 className="font-bold">2023년 5월 6일 토요일 오후 1시 20분</h3>
              <h3>신도림 테크노마트 <b>7층</b></h3>
              <h3 className="font-bold">웨스턴베니비스 다이너스티홀</h3>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-10 py-16">
            <div className="flex flex-col gap-2 justify-center">
              <img src={Line} alt="botanic line" className='w-2/3 mx-auto mb-4' />
              {["모든 것이 새로워지는 봄날,", "사랑하는 두 사람이", "새 인생을 시작하려 합니다.", "바쁘시더라도 와주셔서", "저희 두 사람의 결혼을 축복해 주시고", "따뜻한 마음으로 격려해 주신다면", "큰 힘이 되겠습니다."].map(v => <p className="w-full text-center">{v}</p>)}
              <img src={Line} alt="botanic line" className='w-2/3 rotate-180 mx-auto mt-4' />
            </div>
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-1"><p className="text-lg">{grF.name}</p>·<p className="text-lg">{grM.name}</p>의 차남<p className="text-xl font-bold mx-1">{gr.name.substring(1, 3)}</p></div>
              <div className="inline-flex items-center gap-1"><p className="text-lg">{brF.name}</p>·<p className="text-lg">{brM.name}</p>의 차녀<p className="text-xl font-bold mx-1">{br.name.substring(1, 3)}</p></div>
            </div>
          </div>
          <div className="bg-[url('https://environment.ec.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2021-07/banner_v1_1.png?itok=_VO4aRIL')] ">
            <div className="flex flex-col py-6 px-10 gap-4 bg-[rgba(84,142,100,0.9)] justify-between text-white">
              <div className="inline-flex items-center justify-between">
                <p className="w-14 text-right font-light">{brF.re}</p>
                <p className="text-lg">{brF.name}</p>
                <div className="inline-flex gap-4">
                  <a href={`tel:${brF.tel}`} className="bg-white py-1 px-2 text-back rounded-sm">전화</a>
                  <a href={`sms:${brF.tel}`} className="bg-white py-1 px-2 text-back rounded-sm">문자</a>
                  <span className="bg-accent py-1 px-2 text-white rounded-sm" onClick={handleAccount(brF)}>축의</span>
                </div>
              </div>
              <div className="inline-flex items-center justify-between gap-1">
                <p className="w-14 text-right font-light">{brM.re}</p>
                <p className="text-lg">{brM.name}</p>
                <div className="inline-flex gap-4">
                  <a href={`tel:${brM.tel}`} className="bg-white py-1 px-2 text-back rounded-sm">전화</a>
                  <a href={`sms:${brM.tel}`} className="bg-white py-1 px-2 text-back rounded-sm">문자</a>
                  <span className="bg-accent py-1 px-2 text-white rounded-sm" onClick={handleAccount(brM)}>축의</span>
                </div>
              </div>
              <div className="inline-flex items-center justify-between gap-1">
                <p className="w-14 text-right font-light">{br.re}</p>
                <p className="text-lg">{br.name}</p>
                <div className="inline-flex gap-4">
                  <a href={`tel:${br.tel}`} className="bg-white py-1 px-2 text-back rounded-sm">전화</a>
                  <a href={`sms:${br.tel}`} className="bg-white py-1 px-2 text-back rounded-sm">문자</a>
                  <span className="bg-accent py-1 px-2 text-white rounded-sm" onClick={handleAccount(br)}>축의</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white px-8 py-16">
            <PhotoAlbum layout="rows" photos={photos} padding={0} spacing={8} onClick={handlePhoto} />
          </div>
          <div className="bg-back text-white font-light text-sm">
            <KakaoMap />
             <a href="https://m.map.kakao.com/actions/searchView?q=%EC%84%9C%EC%9A%B8+%EA%B5%AC%EB%A1%9C%EA%B5%AC+%EC%83%88%EB%A7%90%EB%A1%9C+97&wxEnc=LVSOTP&wyEnc=QNLTTMN&lvl=4#!/all/map/place"
              target="_blank" rel="noreferrer"
              className="inline-flex justify-center gap-1 w-full py-2 bg-white text-back opacity-80 font-bold text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              <span>지도 자세히 보기</span>
            </a>
            <div className="flex flex-col gap-4 px-8 py-16">
              <div>
                <div className="inline-flex items-center"><Sparkles /><p className="font-normal text-base">지하철 이용 시</p></div>
                <div className="pl-4">
                  <p>1, 2호선 신도림역 2, 3번 출구</p>
                  <p className="opacity-80">(테크노마트 판매동 지하 1층과 직접 연결)</p>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center"><Sparkles /><p className="font-normal text-base">버스 이용 시</p></div>
                <div className="pl-4">
                  <p>신도림역 1번 출구</p>
                  <div>
                    <div className="inline-flex"><span className="opacity-80 shrink-0 mr-1">[간선]</span><span>160, 503, 600, 662, 670</span></div>
                    <div className="inline-flex"><span className="opacity-80 shrink-0 mr-1">[지선]</span><span>5615, 5714, 6512, 6513, 6515, 6516, 6637, 6640, 6649</span></div>
                    <div className="inline-flex"><span className="opacity-80 shrink-0 mr-1">[기타]</span><span>301, 320, 10, 11-1, 11-2(일반), 83, 88, 510, 530, 662, 6018, N16, 구로09(마을), 양천04(마을)</span></div>
                  </div>
                </div>
                <div className="mt-2 pl-4">
                  <p>신도림역 2번 출구</p>
                    <div className="inline-flex"><span className="opacity-80 shrink-0 mr-1">[간선]</span><span>5619, 6411, 6511, 6611, 영등포01, 영등포08, 영등포09, 영등포, 영등포13</span></div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center"><Sparkles /><p className="font-normal text-base">자가용 이용 시</p></div>
                <div className="pl-4">
                  <div className="inline-flex"><span className="opacity-80 shrink-0 mr-1">[신주소]</span><span>서울시 구로구 새말로 97 신도림테크노마트</span></div>
                  <div className="inline-flex"><span className="opacity-80 shrink-0 mr-1">[구주소]</span><span>서울시 구로구 구로동 3-25 신도림테크노마트</span></div>
                  <div className="inline-flex justify-evenly m-1 w-full">
                    <div className="rounded-sm w-full inline-flex items-center mr-2 justify-center gap-1 text-base font-bold bg-[#FAE001] text-[#1976D2]" onClick={startKakaoNavi}>
                      <img src="img/kakao_navi.png"  style={{width:'32px'}} alt="카카오 네비 로고" />
                      <span>카카오맵 길안내</span>
                    </div>
                    <div className="rounded-sm w-full inline-flex items-center mr-2 justify-center gap-1 text-base font-bold bg-white text-[#000000]" onClick={startTmap}>
                      <img src="img/tmap_navi.png" style={{width:'32px'}} alt="티맵 네비 로고" />
                      <span>티맵 길안내</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center"><Sparkles /><p className="font-normal text-base">주차 안내</p></div>
                <div className="pl-4">
                  <p>신도림 테크노마트 지하 주차장(지하 3층 ~ 지하 7층) 이용</p>
                  <p>7층 예약실 앞 데스크에서 주차등록 시 <span className="font-bold">3시간 무료</span></p>
                  <p className="opacity-80">(주차장 01번 79번 사이의 엘리베이터와 식장이 연결됩니다)</p>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-back font-sans text-xs w-full text-center text-opacity-40 text-white py-2">
            Copyright 2023 jamie kim All rights reserved.
          </footer>
        </div>
        <PhotoViewer {...openPhoto} />
      </div>
    </div>
  );
}

export default App;
