$(document).ready(function () {

    //list of global varibales 

    var animals = ["cat", "dog", "hamster", "chicken", "horse"];
    var animal;

    function renderButtons() {
        $("#buttons-section").empty();
        for (var i = 0; i < animals.length; i++) {
            var button = $("<button>");
            button.addClass("btn btn-secondary animal-button");
            button.attr("name", animals[i]).text(animals[i]);
            $("#buttons-section").append(button);
        }
    }

    renderButtons();

    // jQuery to activate the add animals to input form and rendeButtons function.
    $("#add-animal").on("click", function(event) {
        event.preventDefault();
        var addAnimalInput = $("#animal-input").val().trim();
        animals.push(addAnimalInput);
        renderButtons();
    })

    $('body').on("click", "button.animal-button", displayAnimalsinfo);


    // Display animals info from api url
    function displayAnimalsinfo() {
        $("#animals-section").empty();
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
                // H2 element that will store rated data and render on the html.
                var ratedh2 = $('<h2>').text(response.data[i].rating);
                //  This img tag will hold the images from the api resquest
                var image = $("<img>")
                image.addClass("gifimg");
                // assign of animated images to the image attr when user click the imag
                image.attr("src", response.data[i].images.fixed_height_still.url).attr("animals-animate", response.data[i].images.fixed_height.url);
                //assign of animated images to the image attr when user click the imag
                image.attr("animal-still", response.data[i].images.fixed_height_still.url).attr("movement-status", "still");
                //Displaying the rating and the image
                gifDiv.append(ratedh2).append(image);
                $("#animals-section").prepend(gifDiv);

            }
            
        });
        
    }

    $("body").on("click", "img.gifimg", function(){
        var movement = $(this).attr("movement-status");
         
        if (movement === "still") {
            $(this).attr("src", $(this).attr("animal-animate"));
            $(this).attr(("movement-status", "animate"))
        } else {
            $(this).attr("src", $(this).attr("animal-still"));
            $(this).attr(("movement-status", "still"))

        }
    })



})
