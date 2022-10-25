import React, { useEffect, useState } from "react";
import { Roadview, Map, MapMarker } from "react-kakao-maps-sdk";

interface placeType {
  place_name: string;
  road_address_name: string;
  address_name: string;
  phone: string;
  place_url: string;
}

// head에 작성한 Kakao API 불러오기
const { kakao } = window;

type Marker = {
  lat: number;
  lng: number;
};

const KakaoMap = () => {
  // 마커를 담는 배열

  const [myPos, setMyPos] = useState<Marker>();
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let { latitude, longitude } = position.coords;
        setMyPos({
          lat: latitude,
          lng: longitude,
        });
        let mapOption = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도를 생성합니다
        // var map = new kakao.maps.Map(<div></div>, mapOption);
      });
    }
  }, []);

  return (
    <div className="map-container" style={{ position: "relative" }}>
      {myPos && (
        <Map
          center={{ lat: myPos.lat, lng: myPos.lng }}
          style={{ width: "100", height: "360px" }}
          id="map"
        >
          <MapMarker // 마커를 생성합니다
            position={{
              // 마커가 표시될 위치입니다
              lat: myPos.lat,
              lng: myPos.lng,
            }}
          />
          {markers[0] &&
            markers.map((marker) => (
              <MapMarker // 마커를 생성합니다
                position={{
                  // 마커가 표시될 위치입니다
                  lat: marker.lat,
                  lng: marker.lng,
                }}
              />
            ))}
        </Map>
      )}
      <Roadview
        position={{
          lng: 128.5325855,
          lat: 35.8175047,
          radius: 50,
        }}
        style={{ width: "500px", height: "500px" }}
      />
    </div>
  );
};

export default KakaoMap;
