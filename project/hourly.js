$(document).ready(function () {

    let cityName = localStorage.getItem('cityName');
    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=${cityName}&days=1`,

        success: function (res) {
            

            // Hourly Data

            let hourly_data = [];
            let hours = res.forecast.forecastday[0].hour;
            $.map(hours, function (hour, i) {
                if (res.location.localtime <= hour.time) {
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


            
            $("#hourly").html(hourly_data)


            // navigation bar data



            let temp_location;
            temp_location = `
            <span class="text-white p-5">
            <span>${res.location.name}</span>
            <span>${res.current.temp_c}&#8451</span>
            <span><img src="${res.current.condition.icon}" ></span>
            </span>`


            $(".temp").html(temp_location)

        }




    })
})