import PhotoAlbum from "react-photo-album";
import Line from './assets/img/line_01.svg';
import photos from "./Photo";

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

  const handleAccount = ({ name: n, bank:b, account: a}) => () => {
    navigator.clipboard.writeText(`${b} ${a} ${n}`);
    alert(`${n}님의 계좌번호가 복사되었습니다.`);
  };
  return (
    <div className="bg-back w-full min-h-screen">
      <div className="container max-w-md mx-auto bg-white h-full text-back">
        <h1 className="font-cursive w-full text-center py-4">Wedding invitaion</h1>
        <div className="bg-[url('assets/img/004.jpg')] bg-contain bg-no-repeat relative h-[673px] mb-16">
          <div className="absolute inline-flex justify-center w-full gap-4 top-0 bg-gradient-to-b py-6 from-white">
            <h2 className="text-3xl font-bold">{gr.name}</h2>
            <p className="font-cursive self-end">and</p>
            <h2 className="text-3xl font-bold">{br.name}</h2>
          </div>
          <div className="absolute flex flex-col justify-center w-full text-center bottom-0 pt-10" style={{background: 'linear-gradient(to top, #FFFFFF 65%, rgba(255, 255, 255, 0) 100%)'}}>
            <h3 className="text-xl">2023년 5월 6일 토요일 오후 1시 20분</h3>
            <h3 className="text-xl">신도림 테크노마트 <b>7층</b></h3>
            <h3 className="text-xl">웨스턴베니비스 다이너스티홀</h3>
          </div>
        </div>
        <div className="flex flex-col gap-10 mb-16">
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
            <div className="inline-flex justify-between">
              <p className="w-14 text-right font-light">{brF.re}</p>
              <p className="text-lg">{brF.name}</p>
              <div className="inline-flex gap-4">
                <a href={`tel:${brF.tel}`} className="bg-white py-1 px-2 text-back">전화</a>
                <a href={`sms:${brF.tel}`} className="bg-white py-1 px-2 text-back">문자</a>
                <span className="bg-accent py-1 px-2 text-white" onClick={handleAccount(brF)}>축의</span>
              </div>
            </div>
            <div className="inline-flex justify-between gap-1">
              <p className="w-14 text-right font-light">{brM.re}</p>
              <p className="text-lg">{brM.name}</p>
              <div className="inline-flex gap-4">
                <a href={`tel:${brM.tel}`} className="bg-white py-1 px-2 text-back">전화</a>
                <a href={`sms:${brM.tel}`} className="bg-white py-1 px-2 text-back">문자</a>
                <span className="bg-accent py-1 px-2 text-white" onClick={handleAccount(brM)}>축의</span>
              </div>
            </div>
            <div className="inline-flex justify-between gap-1">
              <p className="w-14 text-right font-light">{br.re}</p>
              <p className="text-lg">{br.name}</p>
              <div className="inline-flex gap-4">
                <a href={`tel:${br.tel}`} className="bg-white py-1 px-2 text-back">전화</a>
                <a href={`sms:${br.tel}`} className="bg-white py-1 px-2 text-back">문자</a>
                <span className="bg-accent py-1 px-2 text-white" onClick={handleAccount(br)}>축의</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <PhotoAlbum layout="columns" photos={photos} padding={0} spacing={8} />
        </div>
        <div className="p-8 bg-back text-white font-light text-sm">
          <div className="flex flex-col gap-4">
            <div><p className="font-normal text-base">지하철 이용 시</p><span>1, 2호선 신도림역 2, 3번 출구
          (테크노마트 판매동 지하 1층과 직접 연결)</span></div>
            <div><p className="font-normal text-base">버스 이용 시</p>
              <div>
                <span>신도림역 1번 출구</span>
                <div>
                  <p>[간선] 160, 503, 600, 662, 670</p>
                  <p>[지선] 5615, 5714, 6512, 6513, 6515, 6516, 6637, 6640, 6649</p>
                  <p>[기타] 301, 320, 10, 11-1, 11-2(일반), 83, 88, 510, 530, 662, 6018, N16, 구로09(마을), 양천04(마을)</p></div>
              </div>
              <div className="mt-2">
                <span>신도림역 2번 출구</span>
                <div>
                  <p>[간선] 5619, 6411, 6511, 6611, 영등포01, 영등포08, 영등포09, 영등포, 영등포13</p>
                  </div>
              </div>
            </div>
            <div><p className="font-normal text-base">자가용 이용 시</p>
              <div><p>신 주소: 서울시 구로구 새말로 97, 신도림테크노마트</p>
              <p>구 주소: 서울시 구로구 구로동 3-25 신도림테크노마트</p></div>
              <div>
                <div><span>카카오네비</span></div>
                <div><span>티맵</span></div>
              </div>
            </div>
            <div><p className="font-normal text-base">주차 안내</p>
              <div>
                <p>신도림 테크노마트 지하 주차장(지하 3층 ~ 지하 7층) 이용</p>
              <p>7층 예약실 앞 데스크에서 주차등록 시 3시간 무료</p>
              <p>(주차장 01번 79번 사이의 엘리베이터와 식장이 연결됩니다)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
