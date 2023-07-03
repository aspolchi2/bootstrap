
// fetch guardians of the galaxy
fetch("http://www.omdbapi.com/?i=tt3896198&apikey=cc725204")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("imgpeli1").src = data.Poster;
        document.getElementById("namePeli1").innerHTML = data.Title;
        document.getElementById("genrePeli1").innerHTML = data.Genre;

    });

// fetch the lord of the rings
fetch("https://www.omdbapi.com/?apikey=cc725204&t=The%20Lord%20of%20the%20Rings")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("imgpeli2").src = data.Poster;
        document.getElementById("namePeli2").innerHTML = data.Title;
        document.getElementById("genrePeli2").innerHTML = data.Genre;

    });

// fetch pinoccio
fetch("https://www.omdbapi.com/?apikey=cc725204&t=Pinocchio")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("imgpeli3").src = data.Poster;
        document.getElementById("namePeli3").innerHTML = data.Title;
        document.getElementById("genrePeli3").innerHTML = data.Genre;


    });

// fetch shrek2
fetch("https://www.omdbapi.com/?apikey=cc725204&t=Shrek%202")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("imgpeli4").src = data.Poster;
        document.getElementById("namePeli4").innerHTML = data.Title;
        document.getElementById("genrePeli4").innerHTML = data.Genre;



    });