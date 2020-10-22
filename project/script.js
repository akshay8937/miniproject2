// Show and Hide the Menu

function showhidemenu() {
    let mn = document.querySelector('.navbar-nav')
    if (mn.style.display === 'flex') {
        mn.style.display = 'none';
    }
    else {
        mn.style.display = 'flex';
    }
}
// Globally declared CityName variable

var cityName;

// function which get data from search box and store in local storage
var longitude;
var latitude;


$(document).ready(function () {
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    }
    getLocation();

    $('.location1').click(function () {
        getLocation();
        console.log(longitude);
        console.log(latitude);

        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=${latitude},${longitude}&days=1`,

            success: function (res) {
                console.log(res)

                // localStorage.setItem("cityName",res.location.name)

                let current_location;

                current_location +=
                    `
               <div class="container-fluid">
               <div class="row justify-content-center">

               <div class="col-md-8 mt-2">
   
                   <div class="card  my-3">
                       <div class="card-body">
                           <h5 class="card-title">CURRENT WEATHER</h5>
                           <hr>
                           <div class="row">
                               <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                   <h6 id="time" class="card-subtitle mb-2 text-muted"></h6>
                                   <h5>${res.location.name}</h5>
                                    <span><img src="${res.current.condition.icon}">
                                    <span><h1>${res.current.temp_c}&#8451</h1></span>
                                    <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
                                    <span>${res.current.condition.text}</span>
                               </div>
                               <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                   <h5>Wind Speed <span class="text-muted mx-3" style="float:right" id="windSpeed"></span>
                                   </h5>
                                   <hr>
                                   <h5>Humidity <span class="text-muted mx-3" style="float:right" id="humidity"></span>
                                   </h5>
                                   <hr>
                                   <h5>Precipitation <span class="text-muted mx-3" style="float:right" id="prep"></span>
                                   </h5>
                                   <hr>
                                   <h5>Pressure<span class="text-muted mx-3" style="float:right" id="pressure"></span></h5>
   
                               </div>
                           </div>
                       </div>
                   </div>
   
               </div>
           </div>
               
               
               `
                $(".center_image").html(current_location);
                $("#windSpeed").html(res.current.wind_kph + `<span> KPH</span>`)
                $("#humidity").html(res.current.humidity)
                $("#prep").html(res.current.precip_mm + `<span> MM</span>`)
                $("#pressure").html(res.current.pressure_mb + `<span> MB</span>`)

            }





        })


    })

    $("button").click(function () {
        cityName = $("#search").val();
        localStorage.setItem('cityName', cityName);
        console.log(cityName);
    })

})
