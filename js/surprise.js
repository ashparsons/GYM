
/*SURPRISE*/

var movies = ['Movie1', 'Movie2', 'Movie3', 'Movie4', 'Series1', 'Series2', 'Series3', 'Series4', 'Cartoon1', 'Cartoon2', 'Cartoon3', 'Cartoon4'];

function callrandom() { 
    var rand = movies[Math.floor(Math.random() * movies.length)];
    
    document.getElementById("random").textContent = rand;
};