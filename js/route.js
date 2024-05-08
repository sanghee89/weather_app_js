const defaultLocation = '#/weather?37.55551, 126.9199'; //어메이징농카이

window.navigator.geolocation.getCurrentPosition((position) => {
  const { lattitude, longitude } = position.coords;
  console.log(lattitude, longitude);
});
