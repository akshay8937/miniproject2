// Get Current Weather Data from Weather API

$(document).ready(function () {


    let cityName = localStorage.getItem('cityName');
    console.log(cityName)
    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=${cityName}&days=1`,

        success: function (res) {
            // calculate Current time

            var current_time = res.location.localtime;
            console.log(current_time)
            var time = current_time.slice(11, 16)


            // Hourly Data

            let hourly_data = [];
            let hours = res.forecast.forecastday[0].hour;
            let count = 0;
            $.map(hours, function (hour, i) {
                if (res.location.localtime <= hour.time && count < 3) {
                    count++;
                    hourly_data += `
                    <div class="col-md-8 mt-2">
                <div class="card  my-3">
                    <div class="card-body justify-content-center">
                        <div class="row">
                            <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h5 class="card-text">${hour.time.slice(11, 16)}</h5>
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <span><img src="${hour.condition.icon}" </span>   
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h4 class="card-text">${hour.temp_c}&#8451</h4>   
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h6 class="card-text text-muted">RealFeels ${hour.feelslike_c}&#8451</h6>
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h5 class="card-text">${hour.condition.text}</h5>
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h5 class="card-text text-muted">${hour.chance_of_rain}% <span><img src="chance_of_rain.jfif" </span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    `

                }
            })



            // Main Content Current temperature,loc,icon,feelslike,condition

            let current_temp;
            current_temp = `
            <h5>${res.location.name}</h5>
            <span><img src="${res.current.condition.icon}">
            <span><h1>${res.current.temp_c}&#8451</h1></span>
            <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
            <span>${res.current.condition.text}</span>
                `



            console.log(res)







            // Navigation Bar Temperature,Location and Icon


            let temp_location;
            temp_location = `
            <span class="text-white p-5">
            <span>${res.location.name}</span>
            <span>${res.current.temp_c}&#8451</span>
            <span><img src="${res.current.condition.icon}" ></span>
            </span>`

            // Low Temperature and High Temperature

            $("#low_temp").html(res.forecast.forecastday[0].day.mintemp_c + `&#8451`)
            $("#high_temp").html(res.forecast.forecastday[0].day.maxtemp_c + `&#8451`)

            // Wind speed, humidity ,precipitation 


            $("#windSpeed").html(res.current.wind_kph + `<span> KPH</span>`)
            $("#humidity").html(res.current.humidity)
            $("#prep").html(res.current.precip_mm + `<span> MM</span>`)
            $("#pressure").html(res.current.pressure_mb + `<span> MB</span>`)

            // Sunrise,Sunset , current temp, location,time

            $(".temp").html(temp_location)
            $("#time").html(time)
            $("#current_data").html(current_temp);
            $("#sunrise").html(res.forecast.forecastday[0].astro.sunrise)
            $("#sunset").html(res.forecast.forecastday[0].astro.sunset)
            $("#moonrise").html(res.forecast.forecastday[0].astro.moonrise)
            $("#moonset").html(res.forecast.forecastday[0].astro.moonset)



            // Hourly data
            // console.log(hourly_data);

            $("#hourly").html(hourly_data)
        }

    })
    $("button").click(function () {
        cityName = $("#search").val();
        console.log(cityName);
        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=${cityName}&days=1`,
            success: function (res) {

                // calculate Current time

                var current_time = res.location.localtime;
                console.log(current_time)
                var time = current_time.slice(11, 16)

                //    Current temperature
                let current_temp;
                current_temp = `
                <h5>${res.location.name}</h5>
                <span><img src="${res.current.condition.icon}">
                <span><h1>${res.current.temp_c}&#8451</span>
                <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
                <span><h6>${res.current.condition.text}</h6></span>
                    `

                // show Navigation bar data on HTML of current location,temp and icon

                let temp_location;
                temp_location = `
                <span class="text-white p-5">
                <span>${res.location.name}</span>
                <span>${res.current.temp_c}&#8451</span>
                <span><img src="${res.current.condition.icon}" ></span>
                </span>`

                // Low Temperature and High Temperature

                $("#low_temp").html(res.forecast.forecastday[0].day.mintemp_c + `&#8451`)
                $("#high_temp").html(res.forecast.forecastday[0].day.maxtemp_c + `&#8451`)




                // Hourly Data

                let hourly_data = [];
                let hours = res.forecast.forecastday[0].hour;
                let count = 0;
                $.map(hours, function (hour, i) {
                    if (res.location.localtime <= hour.time && count < 3) {
                        count++;
                        hourly_data += `
                    <div class="col-md-8 mt-2">
                <div class="card  my-3">
                    <div class="card-body justify-content-center">
                        <div class="row">
                            <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h5 class="card-text">${hour.time.slice(11, 16)}</h5>
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <span><img src="${hour.condition.icon}" </span>   
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h4 class="card-text">${hour.temp_c}&#8451</h4>   
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h6 class="card-text text-muted">RealFeels ${hour.feelslike_c}&#8451</h6>
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h5 class="card-text">${hour.condition.text}</h5>
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h5 class="card-text text-muted">${hour.chance_of_rain}% <span><img src="chance_of_rain.jfif" </span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    `

                    }
                })


                // Wind speed, humidity ,precipitation 


                $("#windSpeed").html(res.current.wind_kph + `<span> KPH</span>`)
                $("#humidity").html(res.current.humidity)
                $("#prep").html(res.current.precip_mm + `<span> MM</span>`)
                $("#pressure").html(res.current.pressure_mb + `<span> MB</span>`)


                // Sunrise,Sunset , current temp, location,time

                $(".temp").html(temp_location)
                $("#time").html(time)
                $("#current_data").html(current_temp);
                $("#sunrise").html(res.forecast.forecastday[0].astro.sunrise)
                $("#sunset").html(res.forecast.forecastday[0].astro.sunset)
                $("#moonrise").html(res.forecast.forecastday[0].astro.moonrise)
                $("#moonset").html(res.forecast.forecastday[0].astro.moonset)
                console.log(res.forecast.forecastday[0].astro.sunrise)


                // Hourly data

                $("#hourly").html(hourly_data)
            }

        })
    })
})