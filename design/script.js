
// To Run Geolocation API
function getLocation(ipAddress) {
    fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_P8CHOZPKw7tvKCLazS8yosCI3wTKm&ipAddress=8.8.8.8")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}
