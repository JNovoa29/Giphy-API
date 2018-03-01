$(document).ready(function () {
    //array of existing buttons
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

    function renderButtons() {
        $("#animeButtons").empty()
        for (var i = 0; i < animeGifs.length; i++) {
            var newBTN = $("<button class='statBTN' data-name=''"+animeGifs[i]+"'>"+animeGifs[i]+"</button>")
            $("#animeButtons").append(newBTN)
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animeGifs[i] + "&api_key=i6vOozTBU9UJ1TI9engqSoOHiHyrH9dt"

            console.log(newBTN)
        }
    }


    //api variable
    $("#addAnime").on("click", function () {
        event.preventDefault()
        var animeInput = $("#anime-input").val()
        animeGifs.push(animeInput)
        renderButtons()
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animeInput + "&api_key=i6vOozTBU9UJ1TI9engqSoOHiHyrH9dt&limit=5"
        console.log(animeInput)

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            // var imageURL = response.data.image_original_url
            // var animeImg = $("<img>")
            // animeImg.attr("src", imageUrl)
            // animeImg.attr("alt", "anime gif")
            // $("#anime".prepend(animeImg))
            console.log(response)
            // $("#animeButtons").text(JSON.stringify(response))
        })



    })

    // text input functionality to create a new button when submit is pressed

    //still & animate gif on click
    // $("#anime").on("click", function () {
    //     var state = $(this).attr("data-state")

    //     if (state === "still") {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-state", "animate");

    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-state", "still");
    //     }
    // })

    renderButtons()

})
