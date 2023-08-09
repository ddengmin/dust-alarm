function kakaoAPI(lat, lon) {
  const API_KEY = `79ac681bed609bac07fbf05fb2f80542`;
  let location;
  console.log("위경도", lat, lon);
  fetch(
    `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`,
    {
      method: "get",
      headers: {
        Authorization: ` KakaoAK ${API_KEY}`,
      },
    }
  );
}
function Geolocation() {
  let lat, lon;
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("내위치", position);
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    kakaoAPI(lat, lon);
  });
}
export default Geolocation;
