$(document).ready(function () {

    //list of global varibales 

    var animals = ["cat", "dog", "hamster", "chicken", "horse"];


    // functions area :  displayanimals, 


    function displayAnimals() {
        $("#buttons-section").empty();
        for (var i = 0; i < animals.length; i++) {
            var button = $("<button>");
            button.addClass("btn btn-secondary");
            button.attr("name", animals[i]).text(animals[i]);
            $("#buttons-section").append(button);
        }
    }

    displayAnimals();

    // Display animals info from api url
    function displayAnimalsinfo() {
        $(".gifAnimals-section").empty();
        var animal = $(this).attr("name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=qWPtsqFT7M5oMW5Cp5LzLZlwNqM7a68b&limit=10"


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (i = 0; i < response.data.length; i++) {
                // this section will hold the generated gif from the API data
                var gifDiv = $("<div class ='gifsearch'>");
                //storing the rating date
                var rating = response.rated;
                // h2 element that will rated data
                var ratedh2 = $('<h2>').text(response.data[i].rating);





            }
        });
    }














})


