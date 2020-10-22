$(document).ready(function () {


$.ajax({

    type: 'GET',
    dataType: 'JSON',
    url:'http://localhost:3000/temp',

    success: function (res) {


        
        var chart = new CanvasJS.Chart("chartContainer",
        {


            title: {
                text: "Multi-Series Line Chart"
            },
            data: [
                {
                    type: "line",
                    dataPoints: [
                        { x: new Date(2020, 9, 15), y: 30 },
                        { x: new Date(2020, 9, 16), y: parseInt(res.min_temp[1]) },
                        { x: new Date(2020, 9, 17), y: parseInt(res.min_temp[2]) },
                        { x: new Date(2020, 9, 18), y: parseInt(res.min_temp[3]) },
                        { x: new Date(2020, 9, 19), y: parseInt(res.min_temp[4])  },
                        { x: new Date(2020, 9, 20), y: parseInt(res.min_temp[5]) },
                        { x: new Date(2020, 9, 21), y: parseInt(res.min_temp[6]) }

                    ]
                   
                },
                {
                    

                    type: "line",
                    dataPoints: [
                        { x: new Date(2020, 9, 15), y: parseInt(res.max_temp[0]) },
                        { x: new Date(2020, 9, 16), y: parseInt(res.max_temp[1]) },
                        { x: new Date(2020, 9, 17), y: parseInt(res.max_temp[2]) },
                        { x: new Date(2020, 9, 18), y: parseInt(res.max_temp[3]) },
                        { x: new Date(2020, 9, 19), y: parseInt(res.max_temp[4])  },
                        { x: new Date(2020, 9, 20), y: parseInt(res.max_temp[5]) },
                        { x: new Date(2020, 9, 21), y: parseInt(res.max_temp[6]) }

                    ]
                }

            ]
        });

        chart.render();

    }


})

    let cityName = localStorage.getItem('cityName');
    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=${cityName}&days=10`,

        success: function (res) {

            // Daily Data


            let days= []
            let daily_data = []
            for(var i=0 ; i<3; i++){
                days[i] = res.forecast.forecastday[i];
            }
            console.log(days)
            $.each(days, function (i, d) {
                daily_data +=
                    `
             <div class="col-md-8 mt-2">
                <div class="card  my-3">
                    <div class="card-body justify-content-center">
                        <div class="row">
                            <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h5 class="card-text">${d.date.slice(0, 10)}</h5>
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <span><img src="${d.day.condition.icon}" </span>   
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h4 class="card-text">High<span class="text-muted"> ${d.day.maxtemp_c}&#8451</span></h4>   
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h4 class="card-text">Low <span class="text-muted"> ${d.day.mintemp_c}&#8451</h4>
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h5 class="card-text">${d.day.condition.text}</h5>
                                </div>
                                <div class="col-sm-12 col-lg-2 col-md-6 mt-2">
                                <h5 class="card-text text-muted">${d.day.daily_chance_of_rain}% <span><img src="chance_of_rain.jfif" </span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                `

            })
            
            $("#daily").html(daily_data)


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
if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
     } else {
   x.innerHTML = "Geolocation is not supported by this browser.";
     }

    $('#location').click(function () {
        getLocation();
        console.log(longitude);
        console.log(latitude);

        $.ajax({
            type: 'GET',
            dataType: 'JSON',
             url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=${latitude},${longitude}&days=1`,

             success: function(res){
                console.log(res)

                localStorage.setItem("cityName",res.location.name)
             }
        })

    })


    // function which get data from search box and store in local storage

    
    $("button").click(function () {
        cityName = $("#search").val();
        localStorage.setItem('cityName', cityName);
        console.log(cityName);
    })

})
