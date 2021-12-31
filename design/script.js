const searchInput = document.getElementById("ipInput");
const submitBtn = document.getElementById("submitBtn");
const ipSearch = searchInput.value.trim();

// To Run Geolocation API
function getLocation(ipAddress) {
    fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_P8CHOZPKw7tvKCLazS8yosCI3wTKm&ipAddress=" + ipSearch)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);


            // To Display Data From API
            let address = document.createElement("p");
            let add = address.textContent = data.ip;
            let addEl = document.getElementById("address");

            addEl.textContent = add;

            let location = document.createElement("p");
            let loc = location.textContent = data.location.city + ", " + data.location.region;
            let locEl = document.getElementById("location");

            locEl.textContent = loc;

            let timezone = document.createElement("p");
            let time = timezone.textContent = "UTC-" + data.location.timezone;
            let timeEl = document.getElementById("timezone");

            timeEl.textContent = time;

            let ispText = document.createElement("p");
            let isp = ispText.textContent = data.isp;
            let ispEl = document.getElementById("isp");

            ispEl.textContent = isp;
        })
}

// To Run Map API
// const lat = location.lat;
// const lon = location.lng;

// const map = L.map("map").setView([lat, lon], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoidGltaXRoaWN1czciLCJhIjoiY2t4dHNmZmk0MGg2YjJ2cG9nZW15bmk0MSJ9.qs9VzBdMftHSSLu8IAwJMA}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "mapbox/streets-v11",
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: "pk.eyJ1IjoidGltaXRoaWN1czciLCJhIjoiY2t4dHNmZmk0MGg2YjJ2cG9nZW15bmk0MSJ9.qs9VzBdMftHSSLu8IAwJMA"
// }).addTo(map);

// Runs Geolocation API When IP Address Is Searched
function formSubmit(event) {
    event.preventDefault();
    const ipSearch = searchInput.value.trim();
    getLocation(ipSearch);
    searchInput.value = "";
}

// Adds On-Click Function for Search Button
submitBtn.addEventListener("click", formSubmit);