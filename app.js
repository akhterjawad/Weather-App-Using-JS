const form = document.querySelector("#form");
const city = document.querySelector("#city");
const card = document.querySelector("#card");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    axios(
        `http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`
    )
        .then((res) => {
            city.value = ``;
            console.log(res.data);
            card.innerHTML = `
                <div class='card-custom mx-auto mt-5' style='max-width: 600px;'>
                    <h1 class='h3'>${res.data.location.name}</h1>
                    <p class='text-muted'>${res.data.location.localtime}</p>
                    <div class='d-flex justify-content-between align-items-center'>
                        <h2 class='display-3'>${res.data.current.temp_c}°C</h2>
                        <img class='weather-icon' src=${res.data.current.condition.icon} alt='Weather Icon' />
                    </div>
                    <h4 class='mt-3'>${res.data.current.condition.text}</h4>
                </div>
            `;
        })
        .catch((err) => {
            console.log("error===>", err);
        });
});
