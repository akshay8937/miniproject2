$(document).ready(function () {

    // let cityName = localStorage.getItem('cityName');
    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=Delhi&days=1`,

        success: function (res) {

            console.log(res)
            // Hourly Data

            let delhi_data ;

            delhi_data += `
            <div class="row justify-content-center">

            <div class="col-md-8 mt-2">

                <div class="card  my-3">
                    <div class="card-body">
                        <h5 class="card-title">${res.location.name}</h5>
                        <hr>
                        <div class="row">
                            <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                <h6 id="time" class="card-subtitle mb-2 text-muted"></h6>
                                <span><img src="${res.current.condition.icon}">
                                <span><h1>${res.current.temp_c}&#8451</h1></span>
                                <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
                                <span>${res.current.condition.text}</span>
                            </div>
                            <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                <h5>Wind Speed <span class="text-muted mx-3" style="float:right"
                                        id="windSpeed"></span>
                                </h5>
                                <hr>
                                <h5>Humidity <span class="text-muted mx-3" style="float:right"
                                        id="humidity"></span>
                                </h5>
                                <hr>
                                <h5>Precipitation <span class="text-muted mx-3" style="float:right"
                                        id="prep"></span>
                                </h5>
                                <hr>
                                <h5>Pressure<span class="text-muted mx-3" style="float:right"
                                        id="pressure"></span></h5>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        `
        $("#first_city").html(delhi_data)
        $("#windSpeed").html(res.current.wind_kph + `<span> KPH</span>`)
        $("#humidity").html(res.current.humidity)
        $("#prep").html(res.current.precip_mm + `<span> MM</span>`)
        $("#pressure").html(res.current.pressure_mb + `<span> MB</span>`)


        }
    })



    // second slide
    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=mumbai&days=1`,

        success: function (res) {

            console.log(res)
            // Hourly Data

            let mumbai_data ;

            mumbai_data += `
            <div class="row justify-content-center">

            <div class="col-md-8 mt-2">

                <div class="card  my-3">
                    <div class="card-body">
                        <h5 class="card-title">${res.location.name}</h5>
                        <hr>
                        <div class="row">
                            <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                <h6 id="time" class="card-subtitle mb-2 text-muted"></h6>
                                <span><img src="${res.current.condition.icon}">
                                <span><h1>${res.current.temp_c}&#8451</h1></span>
                                <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
                                <span>${res.current.condition.text}</span>
                            </div>
                            <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                <h5>Wind Speed <span class="text-muted mx-3" style="float:right"
                                        id="windSpeed1"></span>
                                </h5>
                                <hr>
                                <h5>Humidity <span class="text-muted mx-3" style="float:right"
                                        id="humidity1"></span>
                                </h5>
                                <hr>
                                <h5>Precipitation <span class="text-muted mx-3" style="float:right"
                                        id="prep1"></span>
                                </h5>
                                <hr>
                                <h5>Pressure<span class="text-muted mx-3" style="float:right"
                                        id="pressure1"></span></h5>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        `
        $("#second_city").html(mumbai_data)
        $("#windSpeed1").html(res.current.wind_kph + `<span> KPH</span>`)
        $("#humidity1").html(res.current.humidity)
        $("#prep1").html(res.current.precip_mm + `<span> MM</span>`)
        $("#pressure1").html(res.current.pressure_mb + `<span> MB</span>`)


        }
    })


    // third slide

    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=bangalore&days=1`,

        success: function (res) {

            console.log(res)
            // Hourly Data

            let bangalore_data ;

            bangalore_data += `
            <div class="row justify-content-center">

            <div class="col-md-8 mt-2">

                <div class="card  my-3">
                    <div class="card-body">
                        <h5 class="card-title">${res.location.name}</h5>
                        <hr>
                        <div class="row">
                            <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                <h6 id="time" class="card-subtitle mb-2 text-muted"></h6>
                                <span><img src="${res.current.condition.icon}">
                                <span><h1>${res.current.temp_c}&#8451</h1></span>
                                <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
                                <span>${res.current.condition.text}</span>
                            </div>
                            <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                <h5>Wind Speed <span class="text-muted mx-3" style="float:right"
                                        id="windSpeed2"></span>
                                </h5>
                                <hr>
                                <h5>Humidity <span class="text-muted mx-3" style="float:right"
                                        id="humidity2"></span>
                                </h5>
                                <hr>
                                <h5>Precipitation <span class="text-muted mx-3" style="float:right"
                                        id="prep2"></span>
                                </h5>
                                <hr>
                                <h5>Pressure<span class="text-muted mx-3" style="float:right"
                                        id="pressure2"></span></h5>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        `
        $("#third_city").html(bangalore_data)
        $("#windSpeed2").html(res.current.wind_kph + `<span> KPH</span>`)
        $("#humidity2").html(res.current.humidity)
        $("#prep2").html(res.current.precip_mm + `<span> MM</span>`)
        $("#pressure2").html(res.current.pressure_mb + `<span> MB</span>`)


        }
    })

        // State first slide

        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=Lucknow&days=1`,
    
            success: function (res) {
    
                console.log(res)
                // Hourly Data
    
                let lucknow_data ;
    
                lucknow_data += `
                <div class="row justify-content-center">
    
                <div class="col-md-8 mt-2">
    
                    <div class="card  my-3">
                        <div class="card-body">
                            <h5 class="card-title">${res.location.name}</h5>
                            <hr>
                            <div class="row">
                                <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                    <h6 id="time" class="card-subtitle mb-2 text-muted"></h6>
                                    <span><img src="${res.current.condition.icon}">
                                    <span><h1>${res.current.temp_c}&#8451</h1></span>
                                    <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
                                    <span>${res.current.condition.text}</span>
                                </div>
                                <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                    <h5>Wind Speed <span class="text-muted mx-3" style="float:right"
                                            id="windSpeed3"></span>
                                    </h5>
                                    <hr>
                                    <h5>Humidity <span class="text-muted mx-3" style="float:right"
                                            id="humidity3"></span>
                                    </h5>
                                    <hr>
                                    <h5>Precipitation <span class="text-muted mx-3" style="float:right"
                                            id="prep3"></span>
                                    </h5>
                                    <hr>
                                    <h5>Pressure<span class="text-muted mx-3" style="float:right"
                                            id="pressure3"></span></h5>
    
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
            `
            $("#fourth_city").html(lucknow_data)
            $("#windSpeed3").html(res.current.wind_kph + `<span> KPH</span>`)
            $("#humidity3").html(res.current.humidity)
            $("#prep3").html(res.current.precip_mm + `<span> MM</span>`)
            $("#pressure3").html(res.current.pressure_mb + `<span> MB</span>`)
    
    
            }
        })

        // state second slide

        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=Allahabad&days=1`,
    
            success: function (res) {
    
                console.log(res)
                // Hourly Data
    
                let allahabad_data ;
    
                allahabad_data += `
                <div class="row justify-content-center">
    
                <div class="col-md-8 mt-2">
    
                    <div class="card  my-3">
                        <div class="card-body">
                            <h5 class="card-title">${res.location.name}</h5>
                            <hr>
                            <div class="row">
                                <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                    <h6 id="time" class="card-subtitle mb-2 text-muted"></h6>
                                    <span><img src="${res.current.condition.icon}">
                                    <span><h1>${res.current.temp_c}&#8451</h1></span>
                                    <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
                                    <span>${res.current.condition.text}</span>
                                </div>
                                <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                    <h5>Wind Speed <span class="text-muted mx-3" style="float:right"
                                            id="windSpeed4"></span>
                                    </h5>
                                    <hr>
                                    <h5>Humidity <span class="text-muted mx-3" style="float:right"
                                            id="humidity4"></span>
                                    </h5>
                                    <hr>
                                    <h5>Precipitation <span class="text-muted mx-3" style="float:right"
                                            id="prep4"></span>
                                    </h5>
                                    <hr>
                                    <h5>Pressure<span class="text-muted mx-3" style="float:right"
                                            id="pressure4"></span></h5>
    
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
            `
            $("#fifth_city").html(allahabad_data)
            $("#windSpeed4").html(res.current.wind_kph + `<span> KPH</span>`)
            $("#humidity4").html(res.current.humidity)
            $("#prep4").html(res.current.precip_mm + `<span> MM</span>`)
            $("#pressure4").html(res.current.pressure_mb + `<span> MB</span>`)
    
    
            }
        })

            // state third slide

            $.ajax({
                type: 'GET',
                dataType: 'JSON',
                url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=Agra&days=1`,
        
                success: function (res) {
        
                    console.log(res)
                    // Hourly Data
        
                    let agra_data ;
        
                    agra_data += `
                    <div class="row justify-content-center">
        
                    <div class="col-md-8 mt-2">
        
                        <div class="card  my-3">
                            <div class="card-body">
                                <h5 class="card-title">${res.location.name}</h5>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                        <h6 id="time" class="card-subtitle mb-2 text-muted"></h6>
                                        <span><img src="${res.current.condition.icon}">
                                        <span><h1>${res.current.temp_c}&#8451</h1></span>
                                        <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
                                        <span>${res.current.condition.text}</span>
                                    </div>
                                    <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                        <h5>Wind Speed <span class="text-muted mx-3" style="float:right"
                                                id="windSpeed5"></span>
                                        </h5>
                                        <hr>
                                        <h5>Humidity <span class="text-muted mx-3" style="float:right"
                                                id="humidity5"></span>
                                        </h5>
                                        <hr>
                                        <h5>Precipitation <span class="text-muted mx-3" style="float:right"
                                                id="prep5"></span>
                                        </h5>
                                        <hr>
                                        <h5>Pressure<span class="text-muted mx-3" style="float:right"
                                                id="pressure5"></span></h5>
        
                                    </div>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>
                `
                $("#sixth_city").html(agra_data)
                $("#windSpeed5").html(res.current.wind_kph + `<span> KPH</span>`)
                $("#humidity5").html(res.current.humidity)
                $("#prep5").html(res.current.precip_mm + `<span> MM</span>`)
                $("#pressure5").html(res.current.pressure_mb + `<span> MB</span>`)
        
        
                }
            })

                //  world city first slide


                $.ajax({
                    type: 'GET',
                    dataType: 'JSON',
                    url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=London&days=1`,
            
                    success: function (res) {
            
                        console.log(res)
                        // Hourly Data
            
                        let london_data ;
            
                        london_data += `
                        <div class="row justify-content-center">
            
                        <div class="col-md-8 mt-2">
            
                            <div class="card  my-3">
                                <div class="card-body">
                                    <h5 class="card-title">${res.location.name}</h5>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                            <h6 id="time" class="card-subtitle mb-2 text-muted"></h6>
                                            <span><img src="${res.current.condition.icon}">
                                            <span><h1>${res.current.temp_c}&#8451</h1></span>
                                            <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
                                            <span>${res.current.condition.text}</span>
                                        </div>
                                        <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                            <h5>Wind Speed <span class="text-muted mx-3" style="float:right"
                                                    id="windSpeed6"></span>
                                            </h5>
                                            <hr>
                                            <h5>Humidity <span class="text-muted mx-3" style="float:right"
                                                    id="humidity6"></span>
                                            </h5>
                                            <hr>
                                            <h5>Precipitation <span class="text-muted mx-3" style="float:right"
                                                    id="prep6"></span>
                                            </h5>
                                            <hr>
                                            <h5>Pressure<span class="text-muted mx-3" style="float:right"
                                                    id="pressure6"></span></h5>
            
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                        </div>
                    </div>
                    `
                    $("#seventh_city").html(london_data)
                    $("#windSpeed6").html(res.current.wind_kph + `<span> KPH</span>`)
                    $("#humidity6").html(res.current.humidity)
                    $("#prep6").html(res.current.precip_mm + `<span> MM</span>`)
                    $("#pressure6").html(res.current.pressure_mb + `<span> MB</span>`)
            
            
                    }
                })

        // world second slide

        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=america&days=1`,
    
            success: function (res) {
    
                console.log(res)
                // Hourly Data
    
                let newyork_data ;
    
                newyork_data += `
                <div class="row justify-content-center">
    
                <div class="col-md-8 mt-2">
    
                    <div class="card  my-3">
                        <div class="card-body">
                            <h5 class="card-title">${res.location.name}</h5>
                            <hr>
                            <div class="row">
                                <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                    <h6 id="time" class="card-subtitle mb-2 text-muted"></h6>
                                    <span><img src="${res.current.condition.icon}">
                                    <span><h1>${res.current.temp_c}&#8451</h1></span>
                                    <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
                                    <span>${res.current.condition.text}</span>
                                </div>
                                <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                    <h5>Wind Speed <span class="text-muted mx-3" style="float:right"
                                            id="windSpeed7"></span>
                                    </h5>
                                    <hr>
                                    <h5>Humidity <span class="text-muted mx-3" style="float:right"
                                            id="humidity7"></span>
                                    </h5>
                                    <hr>
                                    <h5>Precipitation <span class="text-muted mx-3" style="float:right"
                                            id="pre7"></span>
                                    </h5>
                                    <hr>
                                    <h5>Pressure<span class="text-muted mx-3" style="float:right"
                                            id="pressure7"></span></h5>
    
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
            `
            $("#eighth_city").html(newyork_data)
            $("#windSpeed7").html(res.current.wind_kph + `<span> KPH</span>`)
            $("#humidity7").html(res.current.humidity)
            $("#prep7").html(res.current.precip_mm + `<span> MM</span>`)
            $("#pressure7").html(res.current.pressure_mb + `<span> MB</span>`)
    
    
            }
        })

        // world third slide


        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            url: `http://api.weatherapi.com/v1/forecast.json?key=4378378be636462db6990842201610&q=Tokyo&days=1`,
    
            success: function (res) {
    
                console.log(res)
                // Hourly Data
    
                let tokyo_data ;
    
                tokyo_data += `
                <div class="row justify-content-center">
    
                <div class="col-md-8 mt-2">
    
                    <div class="card  my-3">
                        <div class="card-body">
                            <h5 class="card-title">${res.location.name}</h5>
                            <hr>
                            <div class="row">
                                <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                    <h6 id="time" class="card-subtitle mb-2 text-muted"></h6>
                                    <span><img src="${res.current.condition.icon}">
                                    <span><h1>${res.current.temp_c}&#8451</h1></span>
                                    <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span>
                                    <span>${res.current.condition.text}</span>
                                </div>
                                <div class="col-sm-12 col-lg-6 col-md-6 mt-2">
                                    <h5>Wind Speed <span class="text-muted mx-3" style="float:right"
                                            id="windSpeed8"></span>
                                    </h5>
                                    <hr>
                                    <h5>Humidity <span class="text-muted mx-3" style="float:right"
                                            id="humidity8"></span>
                                    </h5>
                                    <hr>
                                    <h5>Precipitation <span class="text-muted mx-3" style="float:right"
                                            id="prep8"></span>
                                    </h5>
                                    <hr>
                                    <h5>Pressure<span class="text-muted mx-3" style="float:right"
                                            id="pressure8"></span></h5>
    
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
            `
            $("#ninth_city").html(tokyo_data)
            $("#windSpeed8").html(res.current.wind_kph + `<span> KPH</span>`)
            $("#humidity8").html(res.current.humidity)
            $("#prep8").html(res.current.precip_mm + `<span> MM</span>`)
            $("#pressure8").html(res.current.pressure_mb + `<span> MB</span>`)
    
    
            }
        })
    


    


    // navigation bar data



    let temp_location;
    temp_location = `
            <span class="text-white p-5">
            <span>${res.location.name}</span>
            <span>${res.current.temp_c}&#8451</span>
            <span><img src="${res.current.condition.icon}" ></span>
            </span>`


    $(".temp").html(temp_location)


})
