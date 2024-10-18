const getWeather = (city) => {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "3a2861ff82msh6d83072a0cfefd7p195aa8jsnf6b1c507b312",
  //     "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  //   },
  // };
  const api_key = "aaa8e4a0059638ca94e7b4beb66228b0";
  document.getElementById("cityName").innerHTML = city;
  document.getElementById("cityName1").innerHTML = city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Please check the city spelling and try again.`);
      }
      return response.json();
    })
    .then((response) => {
      console.log(city, response);
      document.getElementById("content").style.display = "block";
      document.getElementById("error").style.display = "none";
      let sunRi = parseInt(response.sys.sunrise + "000");
      let r = new Date(sunRi);
      let sr = r.getHours() + ":" + r.getMinutes() + " A.M";
      let sunSe = parseInt(response.sys.sunset + "000");
      let s = new Date(sunSe);
      let ss = s.getHours() + ":" + s.getMinutes() + " P.M";

      let tempR = Math.floor(response.main.temp - 272.15);
      console.log(tempR);
      let tempMi = Math.floor(response.main.temp_min - 272.15);
      console.log(tempMi);
      let tempMa = Math.floor(response.main.temp_max - 272.15);
      console.log(tempMa);

      let feelsL = Math.floor(response.main.feels_like - 272.15);

      cloud_pct.innerHTML = response.clouds.all;
      temp.innerHTML = tempR;
      temp2.innerHTML = tempR;
      feels_like.innerHTML = feelsL;
      humidity.innerHTML = response.main.humidity;
      humidity2.innerHTML = response.main.humidity;
      min_temp.innerHTML = tempMi;
      max_temp.innerHTML = tempMa;
      wind_speed.innerHTML = response.wind.speed;
      wind_speed2.innerHTML = response.wind.speed;
      wind_degrees.innerHTML = response.wind.deg;
      // sunrise.innerHTML = response.sunrise + "000";
      sunrise.innerHTML = sr;
      // sunset.innerHTML = response.sunset + "000";
      sunset.innerHTML = ss;
    })
    .catch((err) => {
      // console.error(err);
      document.getElementById("error").innerText = `${err.message}`;
      document.getElementById("error").style.display = "block";
      document.getElementById("content").style.display = "none";
      // document.getElementById("cloud_pct").innerHTML = "-";
      // document.getElementById("temp").innerHTML = "-";
      // document.getElementById("temp2").innerHTML = "-";
      // document.getElementById("feels_like").innerHTML = "-";
      // document.getElementById("humidity").innerHTML = "-";
      // document.getElementById("humidity2").innerHTML = "-";
      // document.getElementById("min_temp").innerHTML = "-";
      // document.getElementById("max_temp").innerHTML = "-";
      // document.getElementById("wind_speed").innerHTML = "-";
      // document.getElementById("wind_speed2").innerHTML = "-";
      // document.getElementById("wind_degrees").innerHTML = "-";
      // document.getElementById("sunrise").innerHTML = "-";
      // document.getElementById("sunset").innerHTML = "-";
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

const main = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    // console.log(latitude, longitude);
    const url = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=658aa8725c0c2859524360cih76ee79`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // console.log(res.address.city);
        // console.table(res.address);
        let a = res.address.city;
        // let city = a.split(" ");
        // let firstWord = city[0];
        // console.log(firstWord);
        console.log(a);
        getWeather(a);
      })
      .catch(() => {
        console.log("err");
      });
  });
};
main();
// getWeather("Jaipur");

mumbaiW.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Mumbai");
});
jaipurW.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Jaipur");
});
bangaloreW.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Bangalore");
});
goaW.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Goa");
});
agraW.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Agra");
});
shimlaW.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Shimla");
});
amritsarW.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Amritsar");
});
rishikeshW.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Rishikesh");
});
hyderabadW.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Hyderabad");
});

const cities = () => {
  const api_key = "aaa8e4a0059638ca94e7b4beb66228b0";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Surat&APPID=${api_key}`;

  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      // console.log("Surat", response);
      let sunRi = parseInt(response.sys.sunrise + "000");
      let r = new Date(sunRi);
      let sr = r.getHours() + ":" + r.getMinutes() + " A.M";
      let sunSe = parseInt(response.sys.sunset + "000");
      let s = new Date(sunSe);
      let ss = s.getHours() + ":" + s.getMinutes() + " P.M";
      let tempR = Math.floor(response.main.temp - 272.15);
      // console.log(tempR);
      let tempMi = Math.floor(response.main.temp_min - 272.15);
      // console.log(tempMi);
      let tempMa = Math.floor(response.main.temp_max - 272.15);
      // console.log(tempMa);
      let feelsL = Math.floor(response.main.feels_like - 272.15);

      s0.innerHTML = tempR;
      s1.innerHTML = tempMi;
      s2.innerHTML = tempMa;
      s3.innerHTML = feelsL;
      s4.innerHTML = response.main.humidity;
      s5.innerHTML = response.clouds.all;
      s6.innerHTML = response.wind.speed;
      s7.innerHTML = response.wind.deg;
      // sunrise.innerHTML = response.sunrise + "000";
      s8.innerHTML = sr;
      // sunset.innerHTML = response.sunset + "000";
      s9.innerHTML = ss;
    })
    .catch((err) => console.log(err));

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Ajmer&APPID=${api_key}`
  )
    .then((response) => response.json())
    .then((response) => {
      // console.log("Ajmer", response);

      let sunRi = parseInt(response.sys.sunrise + "000");
      let r = new Date(sunRi);
      let sr = r.getHours() + ":" + r.getMinutes() + " A.M";
      let sunSe = parseInt(response.sys.sunset + "000");
      let s = new Date(sunSe);
      let ss = s.getHours() + ":" + s.getMinutes() + " P.M";
      let tempR = Math.floor(response.main.temp - 272.15);
      // console.log(tempR);
      let tempMi = Math.floor(response.main.temp_min - 272.15);
      // console.log(tempMi);
      let tempMa = Math.floor(response.main.temp_max - 272.15);
      // console.log(tempMa);
      let feelsL = Math.floor(response.main.feels_like - 272.15);

      a0.innerHTML = tempR;
      a1.innerHTML = tempMi;
      a2.innerHTML = tempMa;
      a3.innerHTML = feelsL;
      a4.innerHTML = response.main.humidity;
      a5.innerHTML = response.clouds.all;
      a6.innerHTML = response.wind.speed;
      a7.innerHTML = response.wind.deg;
      // sunrise.innerHTML = response.sunrise + "000";
      a8.innerHTML = sr;
      // sunset.innerHTML = response.sunset + "000";
      a9.innerHTML = ss;
    })
    .catch((err) => console.log(err));

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Raipur&APPID=${api_key}`
  )
    .then((response) => response.json())
    .then((response) => {
      // console.log("Raipur", response);
      let sunRi = parseInt(response.sys.sunrise + "000");
      let r = new Date(sunRi);
      let sr = r.getHours() + ":" + r.getMinutes() + " A.M";
      let sunSe = parseInt(response.sys.sunset + "000");
      let s = new Date(sunSe);
      let ss = s.getHours() + ":" + s.getMinutes() + " P.M";
      let tempR = Math.floor(response.main.temp - 272.15);
      // console.log(tempR);
      let tempMi = Math.floor(response.main.temp_min - 272.15);
      // console.log(tempMi);
      let tempMa = Math.floor(response.main.temp_max - 272.15);
      // console.log(tempMa);
      let feelsL = Math.floor(response.main.feels_like - 272.15);

      r0.innerHTML = tempR;
      r1.innerHTML = tempMi;
      r2.innerHTML = tempMa;
      r3.innerHTML = feelsL;
      r4.innerHTML = response.main.humidity;
      r5.innerHTML = response.clouds.all;
      r6.innerHTML = response.wind.speed;
      r7.innerHTML = response.wind.deg;
      // sunrise.innerHTML = response.sunrise + "000";
      r8.innerHTML = sr;
      // sunset.innerHTML = response.sunset + "000";
      r9.innerHTML = ss;
    })
    .catch((err) => console.log(err));

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Manali&APPID=${api_key}`
  )
    .then((response) => response.json())
    .then((response) => {
      // console.log("Manali", response);
      let sunRi = parseInt(response.sys.sunrise + "000");
      let r = new Date(sunRi);
      let sr = r.getHours() + ":" + r.getMinutes() + " A.M";
      let sunSe = parseInt(response.sys.sunset + "000");
      let s = new Date(sunSe);
      let ss = s.getHours() + ":" + s.getMinutes() + " P.M";
      let tempR = Math.floor(response.main.temp - 272.15);
      // console.log(tempR);
      let tempMi = Math.floor(response.main.temp_min - 272.15);
      // console.log(tempMi);
      let tempMa = Math.floor(response.main.temp_max - 272.15);
      // console.log(tempMa);
      let feelsL = Math.floor(response.main.feels_like - 272.15);

      m0.innerHTML = tempR;
      m1.innerHTML = tempMi;
      m2.innerHTML = tempMa;
      m3.innerHTML = feelsL;
      m4.innerHTML = response.main.humidity;
      m5.innerHTML = response.clouds.all;
      m6.innerHTML = response.wind.speed;
      m7.innerHTML = response.wind.deg;
      // sunrise.innerHTML = response.sunrise + "000";
      m8.innerHTML = sr;
      // sunset.innerHTML = response.sunset + "000";
      m9.innerHTML = ss;
    })
    .catch((err) => console.log(err));
  // Move the auto-complete logic to a separate function
  function setupAutoComplete(cityData) {
    const inputElement = document.getElementById("city");
    const resultsContainer = document.getElementById("autocompleteResults");
    const hideCityN = document.getElementById("inp_res");

    resultsContainer.addEventListener("click", () => {
      resultsContainer.innerHTML = "";
    });
    hideCityN.addEventListener("mouseleave", () => {
      resultsContainer.innerHTML = "";
    });
    inputElement.addEventListener("input", function () {
      const userInput = inputElement.value.toLowerCase();
      const matchingCities = cityData.filter((city) =>
        city.toLowerCase().startsWith(userInput)
      );

      displayResults(matchingCities, resultsContainer);
    });
  }

  function displayResults(results, container) {
    container.innerHTML = "";

    results.forEach((result) => {
      const resultElement = document.createElement("div");
      resultElement.textContent = result;
      resultElement.addEventListener("click", function () {
        const inputElement = document.getElementById("city");
        inputElement.value = result;
        container.innerHTML = "";
        // Trigger the weather data retrieval when a city is clicked
        getWeather(result);
      });
      container.appendChild(resultElement);
    });
  }
  // Assuming your JSON file is named cities.json
  fetch("cities.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data)) {
        throw new Error("Data is not an array");
      }

      // Extract city names from the objects
      const cityNames = data.map((city) => city.name);

      // Do something with the city names
      // Maybe store it in a variable for later use
      setupAutoComplete(cityNames);
    })
    .catch((error) => console.error("Error loading cities.json:", error));
};

cities();
