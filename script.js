// let dataSet;
// fetch('https://api.openweathermap.org/data/2.5/forecast?q=amman&appid=fa28086c66399618bfe457d5b80c8370&units=metric')
//   .then(response => response.json())
//   .then(data => getWeather()
// );

fetch('https://api.openweathermap.org/data/2.5/forecast?q=amman&appid=fa28086c66399618bfe457d5b80c8370&units=metric')
  .then((response) => response.json())
  .then((data) => {
    getweather(data);
  });

function getweather(data) {
  const city = document.querySelector('.city');
  let area = data[0];
  console.log(area);
  console.log(data);
}
