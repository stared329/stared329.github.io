import React, { useEffect } from 'react';
const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    if (window.kakao) {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.5070438414784, 126.890227293528),
        level: 3,
      };
      const imageSrc = 'img/marker00.png';
      const imageSize = new kakao.maps.Size(125, 70);
      const imageOption = { offset: new kakao.maps.Point(34, 16) };
      const image = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      const map = new kakao.maps.Map(container, options);
      const position = new kakao.maps.LatLng(
        37.5070438414784,
        126.890227293528
      );
      const marker = new kakao.maps.Marker({ position, image });
      marker.setMap(map);
      // map.setDraggable(false);
      // map.setZoomable(false);
    }
  });
  return (
    <div id="map" className="w-full h-[300px] bg-white text-back text-center">
      {!window.kakao && '현재 지도를 로드할 수 없습니다.'}
    </div>
  );
};

export default KakaoMap;
