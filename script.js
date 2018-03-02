$(document).ready(function () {
    //array for static buttons 
    var animeGifs = [
        "soul eater",
        "fullmetal alchemist",
        "attack on titan",
        "sword art online",
        "shin sekai yori",
        "one punch man",
        "castlevania",
        "deathnote",
        "yu yu hakusho",
        "dragon ball"
    ]

    //create buttons for existing array
    function renderButtons() {
        $("#animeButtons").empty()
        for (var i = 0; i < animeGifs.length; i++) {
            var newBTN = $("<button class='statBTN' data-name='" + animeGifs[i] + "'>" + animeGifs[i] + "</button>")
            $("#animeButtons").append(newBTN)

            console.log(newBTN)
        }
    }

    //pull results on button click
    $(document).on('click', '.statBTN', function () {
        $("#anime").empty()
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr('data-name') + "&api_key=i6vOozTBU9UJ1TI9engqSoOHiHyrH9dt&limit=8"
        console.log(this)
        $.ajax({
            url: queryURL,
            method: 'GET',
        }).then(function (response) {
            var animeDiv = $("<div class='animeImg'></div>")
            var results = response.data
            console.log(results)
            for (var i = 0; i < results.length; i++) {
                var stillGif = results[i].images.fixed_width_still.url
                var playGif = results[i].images.fixed_width.url
                var rating = results[i].rating
                var gifRating = $("<p>").text("Rating: " + rating.toUpperCase())
                animeDiv.append(gifRating)
                var image = $("<img class='myImage' data-state='still'>").attr("src", stillGif);
                image.attr("data-playsrc", playGif);
                image.attr("data-stopsrc", stillGif);
                animeDiv.append(image);
                $('#anime').prepend(animeDiv);
                image.addClass("playChosenGif");
            }
        })

    })
    //create a new button to search from
    $("#addAnime").on("click", function () {
        event.preventDefault()
        var animeInput = $("#anime-input").val().trim()
        animeGifs.push(animeInput)
        renderButtons()
    })

    //on click still and animate gif images

        $(document).on("click", '.myImage', function () {
            var state = $(this).attr("data-state")

            if (state === "still") {
                $(this).attr("src", $(this).attr("data-playsrc"));
                $(this).attr("data-state", "animate");


            } else {
                $(this).attr("src", $(this).attr("data-stopsrc"));
                $(this).attr("data-state", "still");
            }
        })





    //display gif images

    function displayGifs() {
        $("#anime").empty()

        var animeGifButtons = $(this).attr("data-anime")

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {

        })
    }

    renderButtons()

})
