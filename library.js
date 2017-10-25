/*JAVASCRIPT*/

/*List of shows*/

var movies = [
    {name: "Jaws", type: "movie", userrate: 90, IMDBrate: 8, genre: "Drama/Mystery", year: "(1975)", image: '../img/js.jpg'},
    {name: "Star Wars", type: "movie", userrate: 94, IMDBrate: 8.7, genre: "SciFi", year: "(1977)", image: '../img/sw.jpg'},
    {name: "The Breakfast Club", type: "movie", userrate: 91, IMDBrate: 7.9, genre: "Drama/Comedy", year: "(1985)", image: 'img/bc.jpg'},
    {name: "E.T", type: "movie", userrate: 83, IMDBrate: 7.9, genre: "Adventure/Mystery", year: "(1982)", image: '../img/et.jpg'},
    {name: "Pulp Fiction", type: "movie", userrate: 90, IMDBrate: 8.9, genre: "Thriller", year: "(1994)", image: '../img/pf.jpg'},
    {name: "Forrest Gump", type: "movie", userrate: 95, IMDBrate: 8.8, genre: "Romance/Comedy", year: "(1994)", image: '../img/fgp.jpg'},
    {name: "Memento", type: "movie", userrate: 90, IMDBrate: 8.5, genre: "Thriller", year: "(2000)", image: '../img/mom.jpg'},
    {name: "Avatar", type: "movie", userrate: 87, IMDBrate: 7.8, genre: "Sci-Fi", year: "(2007)", image: '../img/ava.jpg'},
    {name: "The Avengers", type: "movie", userrate: 90, IMDBrate: 8.1, genre: "Superhero", year: "(2012)", image: '../img/ave.jpg'},
    {name: "Wonder Woman", type: "movie", userrate: 90, IMDBrate: 7.7, genre: "Superhero", year: "(2017)", image: '../img/ww.jpg'},
];
movies.push();

var series = [
    {name: "That 70s Show", type: "series", userrate: 94, IMDBrate: 8.1, genre: "Comedy/Sitcom", year: "2006", image: '../img/70.jpg'},
    {name: "Breaking Bad", type: "series", userrate: 94, IMDBrate: 9.5, genre: "Drama", year: "2013", image: '../img/bb.jpg'},
    {name: "Riverdale", type: "series", userrate: 95, IMDBrate: 7.8, genre: "Mystery", year: "2017", image: '../img/riv.jpg'},
    {name: "This Is Us", type: "series", userrate: 94, IMDBrate: 8.8, genre: "Drama/Comedy", year: "2017", image: '../img/tiu.jpg'},
];
series.push();

var cartoons = [
    {name: "Courage the Cowardly Dog", type: "cartoon", userrate: 95, IMDBrate: 8.3, genre: "Horror", year: "2002", image: '../img/ctcd.jpg'},
    {name: "Rick and Morty", type: "cartoon", userrate: 97, IMDBrate: 9.4, genre: "Comedy/Sitcom", year: "2017", image: '../img/rnm.jpg'},
    {name: "Adventure Time", type: "cartoon", userrate: 95, IMDBrate: 8.6, genre: "Adventure", year: "2017", image: '../img/at.jpg'},
    {name: "Family Guy", type: "cartoon", userrate: 91, IMDBrate: 8.2, genre: "Sitcom", year: "2017", image: '../mg/fg.jpg'}
];
cartoons.push();

var allshows = movies.concat(series, cartoons);

console.log(allshows);

var shows = document.getElementById("Movies");

/*MAKING ELEMENTS SHOW ON DOM*/

window.onload = function info(){
    /*NEW ELEMENT
    document.getElementById("title19").textContent = movies[9].name;
    document.getElementById("date19").textContent = movies[9].year;*/
    
    
    document.getElementById("title").textContent = movies[9].name;
    document.getElementById("date").textContent = movies[9].year;
    /*document.getElementById("poster").textContent = movies[9].image;*/
    
    
    document.getElementById("title2").textContent = series[3].name;
    document.getElementById("date2").textContent = series[3].year;
    
    
    document.getElementById("title3").textContent = series[2].name;
    document.getElementById("date3").textContent = series[2].year;
    
    
    document.getElementById("title4").textContent = cartoons[3].name;
    document.getElementById("date4").textContent = cartoons[3].year;
    
    
    document.getElementById("title5").textContent = cartoons[2].name;
    document.getElementById("date5").textContent = cartoons[2].year;
    
    
    document.getElementById("title6").textContent = cartoons[1].name;
    document.getElementById("date6").textContent = cartoons[1].year;
    
    
    document.getElementById("title7").textContent = series[1].name;
    document.getElementById("date7").textContent = series[1].year;
    
    
    document.getElementById("title8").textContent = movies[8].name;
    document.getElementById("date8").textContent = movies[8].year;
    
    
    document.getElementById("title9").textContent = movies[7].name;
    document.getElementById("date9").textContent = movies[7].year;
    
    
    document.getElementById("title10").textContent = series[0].name;
    document.getElementById("date10").textContent = series[0].year;
    
    
    document.getElementById("title11").textContent = cartoons[0].name;
    document.getElementById("date11").textContent = cartoons[0].year;
    
    
    document.getElementById("title12").textContent = movies[6].name;
    document.getElementById("date12").textContent = movies[6].year;
    
    document.getElementById("title13").textContent = movies[5].name;
    document.getElementById("date13").textContent = movies[5].year;
    
    
    document.getElementById("title14").textContent = movies[4].name;
    document.getElementById("date14").textContent = movies[4].year;
    
    
    document.getElementById("title15").textContent = movies[3].name;
    document.getElementById("date15").textContent = movies[3].year;
    
    
    document.getElementById("title16").textContent = movies[2].name;
    document.getElementById("date16").textContent = movies[2].year;
    
    
    document.getElementById("title17").textContent = movies[1].name;
    document.getElementById("date17").textContent = movies[1].year;
    
    
    document.getElementById("title18").textContent = movies[0].name;
    document.getElementById("date18").textContent = movies[0].year;
};



/*Request a show*/

var requests = [];

function request(){
    show = document.getElementById("name").value;
    requests.push(show); 
    
    document.getElementById("showrequested").textContent = "Your request has been sent to our team.";
}

console.log(requests);


/*JQUERY*/

$(function(){
    //filters
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "ALL") {
            $(".choice").show();
        }
    });
    
                           
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "rate1") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "85") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "rate2") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "90") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "rate3") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "95") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "rate4") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "100") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "IMDB1") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "7") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "IMDB2") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "8") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "IMDB3") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "9") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "genre1") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "adv") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "genre2") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "com") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "genre3") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "dra") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "genre4") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "hor") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "genre5") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "mys") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "genre6") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "rom") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "genre7") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "sci") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "genre8") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "sit") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "genre9") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "sup") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "genre10") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "thr") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "70s") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "70") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "80s") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "80") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "90s") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "90") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "00s") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "00") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filterSubmit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "10s") {
            $(".choice").hide();
            $(".choice").each(function() {
                if ($(this).data("category") === "10") {
                    $(this).show();
                }
            });
        }
    });
    
});