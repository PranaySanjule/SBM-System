const axios = require("axios");

const options = {
  method: "GET",
  url: "https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi",
  params: { address: "Eiffel Tower" },
  headers: {
    "X-RapidAPI-Key": "e863a46f90msh6d679d01f4e5f44p174dc1jsn98364e8622ed",
    "X-RapidAPI-Host": "address-from-to-latitude-longitude.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
