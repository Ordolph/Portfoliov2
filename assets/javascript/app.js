$(document).ready(function () {

    $("#carouselSlide").click(function () {

        console.log("click")

        switch ($(this).attr("href")) {

            case "Project-One.JPG":
                window.open(url, 'https://github.com/Ordolph/Project-One');
                break;

            case "Trivia-Game.JPG":
                window.open(url, "https://ordolph.github.io/TriviaGame/");
                break;
            
            case "Crystal-Collector.JPG":
                window.open(url, "https://ordolph.github.io/unit-4-game/");
                break;
        }


    })


});