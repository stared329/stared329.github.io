import React, { useEffect } from 'react';
const { kakao } = window;
console.log(window.kakao, window.Kakao);

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5070438414784, 126.890227293528),
      level: 3
    };
    const imageSrc = 'img/marker00.png';
    const imageSize = new kakao.maps.Size(98, 54);
    const imageOption = {offset: new kakao.maps.Point(22, 16)};
    const image = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    const map = new kakao.maps.Map(container, options);
    const position  = new kakao.maps.LatLng(37.5070438414784, 126.890227293528);
    const marker = new kakao.maps.Marker({ position, image });
    marker.setMap(map);
    // map.setDraggable(false);
    // map.setZoomable(false);
  });
  return (
    <div id="map" style={{width:'100%',height:'300px'}}></div>
  )
};

export default KakaoMap;
