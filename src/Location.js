import useScrollFadeIn from './hooks';
import KakaoMap from './KakaoMap';
const Sparkles = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4 mr-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.867L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
    />
  </svg>
);
const { Kakao } = window;

const Location = () => {
  const startKakaoNavi = () => {
    Kakao.Navi.start({
      name: '신도림 테크노마트',
      x: 126.890227293528,
      y: 37.5070438414784,
      coordType: 'wgs84',
    });
  };
  const startTmap = () => {
    window.open(
      'https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx1a6753f111de4d7dbcb5dc7c930d2025&name=%EC%9B%A8%EC%8A%A4%ED%84%B4%EB%B2%A0%EB%8B%88%EB%B9%84%EC%8A%A4+%EC%8B%A0%EB%8F%84%EB%A6%BC+%2C+7%EC%B8%B5+%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%8A%A4%ED%99%80&lon=126.890227293528&lat=37.5070438414784',
      '',
      ''
    );
  };

  return (
    <div className="flex flex-col min-h-screen-full justify-center overflow-y-auto bg-back text-white font-light text-sm">
      <KakaoMap />
      <a
        href="https://m.map.kakao.com/actions/searchView?q=%EC%84%9C%EC%9A%B8+%EA%B5%AC%EB%A1%9C%EA%B5%AC+%EC%83%88%EB%A7%90%EB%A1%9C+97&wxEnc=LVSOTP&wyEnc=QNLTTMN&lvl=4#!/all/map/place"
        target="_blank"
        rel="noreferrer"
        className="inline-flex justify-center gap-1 w-full py-2 bg-white text-back opacity-80 font-bold text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 22 22"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
          />
        </svg>
        <span>지도 자세히 보기</span>
      </a>
      <div className="flex flex-col gap-4 px-8 py-16">
        <div>
          <div
            className="inline-flex items-center"
            {...useScrollFadeIn('right', 0.8, 0)}
          >
            <Sparkles />
            <p className="font-normal text-base">지하철 이용 시</p>
          </div>
          <div className="pl-4" {...useScrollFadeIn('fade', 0.8, 0.1)}>
            <p>1, 2호선 신도림역 2, 3번 출구</p>
            <p className="opacity-80">
              (테크노마트 판매동 지하 1층과 직접 연결)
            </p>
          </div>
        </div>
        <div>
          <div
            className="inline-flex items-center"
            {...useScrollFadeIn('right', 0.8, 0.1)}
          >
            <Sparkles />
            <p className="font-normal text-base">버스 이용 시</p>
          </div>
          <div className="pl-4" {...useScrollFadeIn('fade', 0.8, 0.2)}>
            <p>신도림역 1번 출구</p>
            <div>
              <div className="inline-flex">
                <span className="opacity-80 shrink-0 mr-1">[간선]</span>
                <span>160, 503, 600, 662, 670</span>
              </div>
              <div className="inline-flex">
                <span className="opacity-80 shrink-0 mr-1">[지선]</span>
                <span>
                  5615, 5714, 6512, 6513, 6515, 6516, 6637, 6640, 6649
                </span>
              </div>
              <div className="inline-flex">
                <span className="opacity-80 shrink-0 mr-1">[기타]</span>
                <span>
                  301, 320, 10, 11-1, 11-2(일반), 83, 88, 510, 530, 662, 6018,
                  N16, 구로09(마을), 양천04(마을)
                </span>
              </div>
            </div>
          </div>
          <div className="mt-2 pl-4" {...useScrollFadeIn('fade', 0.8, 0.2)}>
            <p>신도림역 2번 출구</p>
            <div className="inline-flex">
              <span className="opacity-80 shrink-0 mr-1">[간선]</span>
              <span>
                5619, 6411, 6511, 6611, 영등포01, 영등포08, 영등포09, 영등포,
                영등포13
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            className="inline-flex items-center"
            {...useScrollFadeIn('right', 0.8, 0.2)}
          >
            <Sparkles />
            <p className="font-normal text-base">자가용 이용 시</p>
          </div>
          <div className="pl-4" {...useScrollFadeIn('fade', 0.8, 0.3)}>
            <div className="inline-flex">
              <span className="opacity-80 shrink-0 mr-1">[신주소]</span>
              <span>서울시 구로구 새말로 97 신도림테크노마트</span>
            </div>
            <div className="inline-flex">
              <span className="opacity-80 shrink-0 mr-1">[구주소]</span>
              <span>서울시 구로구 구로동 3-25 신도림테크노마트</span>
            </div>
            <div className="inline-flex flex-wrap m-1 w-full gap-2 justify-around">
              <div
                className="rounded-sm inline-flex items-center gap-1 min-w-[8rem]"
                onClick={startKakaoNavi}
              >
                <img src="img/kakao.png" alt="카카오맵 길안내" />
                <span>카카오맵 길안내</span>
              </div>
              <div
                className="rounded-sm inline-flex items-center gap-1 min-w-[8rem]"
                onClick={startTmap}
              >
                <img src="img/tmap.png" alt="티맵 길안내" />
                <span>티맵 길안내</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="inline-flex items-center"
            {...useScrollFadeIn('right', 0.8, 0.3)}
          >
            <Sparkles />
            <p className="font-normal text-base">주차 안내</p>
          </div>
          <div className="pl-4" {...useScrollFadeIn('fade', 0.8, 0.4)}>
            <p>신도림 테크노마트 지하 주차장(지하 3층 ~ 지하 7층) 이용</p>
            <p>
              7층 예약실 앞 데스크에서 주차등록 시{' '}
              <span className="font-bold">3시간 무료</span>
            </p>
            <p className="opacity-80">
              (주차장 01번 79번 사이의 엘리베이터와 식장이 연결됩니다)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
