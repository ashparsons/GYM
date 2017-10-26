/*List of shows*/

var movies = [
    {name: "Jaws", type: "movie", userrate: 90, IMDBrate: 8, genre: "Drama/Mystery", year: "1975", image: '../img/js.jpg', showdescription:"When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing that the loss of tourist revenue will cripple the town. Ichthyologist Matt Hooper (Richard Dreyfuss) and grizzled ship captain Quint (Robert Shaw) offer to help Brody capture the killer beast, and the trio engage in an epic battle of man vs. nature."},
    
    {name: "Star Wars", type: "movie", userrate: 94, IMDBrate: 8.7, genre: "SciFi", year: "1977", image: '../img/sw.jpg', showdescription:"The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 (Kenny Baker) and C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy."},
    
    {name: "The Breakfast Club", type: "movie", userrate: 91, IMDBrate: 7.9, genre: "Drama/Comedy", year: "1985", image: 'img/bc.jpg', showdescription:"Five high school students from different walks of life endure a Saturday detention under a power-hungry principal (Paul Gleason). The disparate group includes rebel John (Judd Nelson), princess Claire (Molly Ringwald), outcast Allison (Ally Sheedy), brainy Brian (Anthony Michael Hall) and Andrew (Emilio Estevez), the jock. Each has a chance to tell his or her story, making the others see them a little differently -- and when the day ends, they question whether school will ever be the same."},
    
    {name: "E.T", type: "movie", userrate: 83, IMDBrate: 7.9, genre: "Adventure/Mystery", year: "1982", image: '../img/et.jpg', showdescription:"After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott (Henry Thomas). Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, to his brother and his little sister, Gertie (Drew Barrymore), and the children decide to keep its existence a secret. Soon, however, E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien."},
    
    {name: "Pulp Fiction", type: "movie", userrate: 90, IMDBrate: 8.9, genre: "Thriller", year: "1994", image: '../img/pf.jpg', showdescription:"Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, 'Pumpkin' (Tim Roth) and 'Honey Bunny' (Amanda Plummer)."},
    
    {name: "Forrest Gump", type: "movie", userrate: 95, IMDBrate: 8.8, genre: "Romance/Comedy", year: "1994", image: '../img/fgp.jpg', showdescription:"Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright)."},
    
    {name: "Memento", type: "movie", userrate: 90, IMDBrate: 8.5, genre: "Thriller", year: "2000", image: '../img/mom.jpg', showdescription:"Leonard (Guy Pearce) is tracking down the man who raped and murdered his wife. The difficulty, however, of locating his wife's killer is compounded by the fact that he suffers from a rare, untreatable form of memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why."},
    
    {name: "Avatar", type: "movie", userrate: 87, IMDBrate: 7.8, genre: "Sci-Fi", year: "2007", image: "../img/ava.jpg", showdescription:"On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world."},
    
    {name: "The Avengers", type: "movie", userrate: 90, IMDBrate: 8.1, genre: "Superhero", year: "2012", image: "../img/ave.jpg", showdescription:"When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's 'dream team' are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner)."},
    
    {name: "Wonder Woman", type: "movie", userrate: 90, IMDBrate: 7.7, genre: "Superhero", year: "(2017)", image: "../img/ww.jpg", showdescription: "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny."},
];
movies.push();

var series = [
    {name: "That 70s Show", type: "series", userrate: 94, IMDBrate: 8.1, genre: "Comedy/Sitcom", year: "2006", image: "../img/70.jpg", showdescription:"Set in the mood ring and polyester era of the 1970s, the series is a retro-hip situation comedy about an eclectic group of friends on the verge of adulthood. They live in the suburbs of Wisconsin, where they yearn for independence amid the growing pains of becoming adults."},
    {name: "Breaking Bad", type: "series", userrate: 94, IMDBrate: 9.5, genre: "Drama", year: "2013", image: "../img/bb.jpg", showdescription:"Mild-mannered high school chemistry teacher Walter White thinks his life can't get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy. But Walter is dumbstruck when he learns he has terminal cancer. Realizing that his illness probably will ruin his family financially, Walter makes a desperate bid to earn as much money as he can in the time he has left by turning an old RV into a meth lab on wheels."},
    {name: "Riverdale", type: "series", userrate: 95, IMDBrate: 7.8, genre: "Mystery", year: "2017", image: "../img/riv.jpg", showdescription:"Archie Andrews starts the school year with the world weighing on his shoulders. He's decided he wants to pursue a future in the music business, but his recently ended clandestine relationship with the music teacher has left him without a mentor, and his friendship with Jughead Jones is in a bad place. Things look like they might be turning around when Veronica Lodge, a new girl, arrives. Despite the instant chemistry, Veronica is hesitant to risk a friendship with Betty -- who has a crush on Archie -- to pursue anything. Amidst all the small-town banality lurks a mystery: the recent tragic death of Jason Blossom, the twin brother of beautiful and popular troublemaker, Cheryl."},
    {name: "This Is Us", type: "series", userrate: 94, IMDBrate: 8.8, genre: "Drama/Comedy", year: "2017", image: '../img/tiu.jpg', showdescription:"The Pearson family's generational story unfolds in this emotional drama. In moments of love, joy, triumph and heartbreak, revelations emerge from parents Jack and Rebecca's past, while triplets Kate, Randall and Kevin discover deeper meaning in their present day lives. Successful businessman and father Randall searches for information about his biological parents. Kate finds love and self-acceptance while battling obesity. Kevin pursues a more meaningful career, which brings some difficult choices."},
];
series.push();

var cartoons = [
    {name: "Courage the Cowardly Dog", type: "cartoon", userrate: 95, IMDBrate: 8.3, genre: "Horror", year: "2002", image: '../img/ctcd.jpg', showdescription:"Courage is a timid pink dog with paranoia problems. His owners are an old couple living on a farm full of bizarre adversaries. Courage must overcome his fear and help save his owners, Eustace and Muriel, from ghosts and paranormal spirits living on the farm. Although Muriel loves Courage, Eustace loves to tease him and scare him."},
    {name: "Rick and Morty", type: "cartoon", userrate: 97, IMDBrate: 9.4, genre: "Comedy/Sitcom", year: "2017", image: "../img/rnm.jpg", showdescription:"After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage as his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures across the universe that often involve his grandchildren, Morty and Summer."},
    {name: "Adventure Time", type: "cartoon", userrate: 95, IMDBrate: 8.6, genre: "Adventure", year: "2017", image: '../img/at.jpg', showdescription:"Twelve-year-old Finn battles evil in the Land of Ooo. Assisted by his magical dog, Jake, Finn roams the Land of Ooo righting wrongs and battling evil. Usually that evil comes in the form of the Ice King, who is in search of a wife. He's decided he should wed Princess Bubblegum, though she doesn't want to marry him. Still, he persists in trying to steal her away, and Finn and Jake, along with Lady Raincorn (a cross between a unicorn and a rainbow) do their best to keep her from harm."},
    {name: "Family Guy", type: "cartoon", userrate: 91, IMDBrate: 8.2, genre: "Sitcom", year: "2017", image: "../mg/fg.jpg", showdescription:"Sick, twisted and politically incorrect, the animated series features the adventures of the Griffin family. Endearingly ignorant Peter and his stay-at-home wife Lois reside in Quahog, R.I., and have three kids. Meg, the eldest child, is a social outcast, and teenage Chris is awkward and clueless when it comes to the opposite sex. The youngest, Stewie, is a genius baby bent on killing his mother and destroying the world. The talking dog, Brian, keeps Stewie in check while sipping martinis and sorting through his own life issues."}
];
cartoons.push();

window.onload = function extra(){
    
    document.getElementById("title10").textContent = movies[0].name;
    document.getElementById("year10").textContent = movies[0].year;
    document.getElementById("more10").textContent = movies[0].showdescription;
    document.getElementById("genre10").textContent = movies[0].genre;
    document.getElementById("IMDB10").textContent = movies[0].IMDBrate;
    document.getElementById("user10").textContent = movies[0].userrate;
    
    
    document.getElementById("title17").textContent = movies[1].name;
    document.getElementById("year17").textContent = movies[1].year;
    document.getElementById("more17").textContent = movies[1].showdescription;
    document.getElementById("genre17").textContent = movies[1].genre;
    document.getElementById("IMDB17").textContent = movies[1].IMDBrate;
    document.getElementById("user17").textContent = movies[1].userrate;
    
    
    document.getElementById("title12").textContent = movies[2].name;
    document.getElementById("year12").textContent = movies[2].year;
    document.getElementById("more12").textContent = movies[2].showdescription;
    document.getElementById("genre12").textContent = movies[2].genre;
    document.getElementById("IMDB12").textContent = movies[2].IMDBrate;
    document.getElementById("user12").textContent = movies[2].userrate;
    
    
    document.getElementById("title13").textContent = movies[3].name;
    document.getElementById("year13").textContent = movies[3].year;
    document.getElementById("more13").textContent = movies[3].showdescription;
    document.getElementById("genre13").textContent = movies[3].genre;
    document.getElementById("IMDB13").textContent = movies[3].IMDBrate;
    document.getElementById("user13").textContent = movies[3].userrate;
    
    
    document.getElementById("title16").textContent = movies[4].name;
    document.getElementById("year16").textContent = movies[4].year;
    document.getElementById("more16").textContent = movies[4].showdescription;
    document.getElementById("genre16").textContent = movies[4].genre;
    document.getElementById("IMDB16").textContent = movies[4].IMDBrate;
    document.getElementById("user16").textContent = movies[4].userrate;
    
    
    document.getElementById("title14").textContent = movies[5].name;
    document.getElementById("year14").textContent = movies[5].year;
    document.getElementById("more14").textContent = movies[5].showdescription;
    document.getElementById("genre14").textContent = movies[5].genre;
    document.getElementById("IMDB14").textContent = movies[5].IMDBrate;
    document.getElementById("user14").textContent = movies[5].userrate;
    
    
    document.getElementById("title15").textContent = movies[6].name;
    document.getElementById("year15").textContent = movies[6].year;
    document.getElementById("more15").textContent = movies[6].showdescription;
    document.getElementById("genre15").textContent = movies[6].genre;
    document.getElementById("IMDB15").textContent = movies[6].IMDBrate;
    document.getElementById("user15").textContent = movies[6].userrate;
    
    
    document.getElementById("title11").textContent = movies[7].name;
    document.getElementById("year11").textContent = movies[7].year;
    document.getElementById("more11").textContent = movies[7].showdescription;
    document.getElementById("genre11").textContent = movies[7].genre;
    document.getElementById("IMDB11").textContent = movies[7].IMDBrate;
    document.getElementById("user11").textContent = movies[7].userrate;
    
    
    document.getElementById("title18").textContent = movies[8].name;
    document.getElementById("year18").textContent = movies[8].year;
    document.getElementById("more18").textContent = movies[8].showdescription;
    document.getElementById("genre18").textContent = movies[8].genre;
    document.getElementById("IMDB18").textContent = movies[8].IMDBrate;
    document.getElementById("user18").textContent = movies[8].userrate;
    
    
    document.getElementById("title").textContent = movies[9].name;
    document.getElementById("year").textContent = movies[9].year;
    document.getElementById("more").textContent = movies[9].showdescription;
    document.getElementById("genre").textContent = movies[9].genre;
    document.getElementById("IMDB").textContent = movies[9].IMDBrate;
    document.getElementById("user").textContent = movies[9].userrate;
    
    
    document.getElementById("title2").textContent = series[0].name;
    document.getElementById("year2").textContent = series[0].year;
    document.getElementById("more2").textContent = series[0].showdescription;
    document.getElementById("genre2").textContent = series[0].genre;
    document.getElementById("IMDB2").textContent = series[0].IMDBrate;
    document.getElementById("user2").textContent = series[0].userrate;
    
    
    document.getElementById("title4").textContent = series[1].name;
    document.getElementById("year4").textContent = series[1].year;
    document.getElementById("more4").textContent = series[1].showdescription;
    document.getElementById("genre4").textContent = series[1].genre;
    document.getElementById("IMDB4").textContent = series[1].IMDBrate;
    document.getElementById("user4").textContent = series[1].userrate;
    
    
    document.getElementById("title3").textContent = series[2].name;
    document.getElementById("year3").textContent = series[2].year;
    document.getElementById("more3").textContent = series[2].showdescription;
    document.getElementById("genre3").textContent = series[2].genre;
    document.getElementById("IMDB3").textContent = series[2].IMDBrate;
    document.getElementById("user3").textContent = series[2].userrate;
    
    
    document.getElementById("title5").textContent = series[3].name;
    document.getElementById("year5").textContent = series[3].year;
    document.getElementById("more5").textContent = series[3].showdescription;
    document.getElementById("genre5").textContent = series[3].genre;
    document.getElementById("IMDB5").textContent = series[3].IMDBrate;
    document.getElementById("user5").textContent = series[3].userrate;
    
    
    document.getElementById("title8").textContent = cartoons[0].name;
    document.getElementById("year8").textContent = cartoons[0].year;
    document.getElementById("more8").textContent = cartoons[0].showdescription;
    document.getElementById("genre8").textContent = cartoons[0].genre;
    document.getElementById("IMDB8").textContent = cartoons[0].IMDBrate;
    document.getElementById("user8").textContent = cartoons[0].userrate;
    
    
    document.getElementById("title6").textContent = cartoons[1].name;
    document.getElementById("year6").textContent = cartoons[1].year;
    document.getElementById("more6").textContent = cartoons[1].showdescription;
    document.getElementById("genre6").textContent = cartoons[1].genre;
    document.getElementById("IMDB6").textContent = cartoons[1].IMDBrate;
    document.getElementById("user6").textContent = cartoons[1].userrate;
    
    
    document.getElementById("title7").textContent = cartoons[2].name;
    document.getElementById("year7").textContent = cartoons[2].year;
    document.getElementById("more7").textContent = cartoons[2].showdescription;
    document.getElementById("genre7").textContent = cartoons[2].genre;
    document.getElementById("IMDB7").textContent = cartoons[2].IMDBrate;
    document.getElementById("user7").textContent = cartoons[2].userrate;
    
    
    document.getElementById("title9").textContent = cartoons[3].name;
    document.getElementById("year9").textContent = cartoons[3].year;
    document.getElementById("more9").textContent = cartoons[3].showdescription;
    document.getElementById("genre9").textContent = cartoons[3].genre;
    document.getElementById("IMDB9").textContent = cartoons[3].IMDBrate;
    document.getElementById("user9").textContent = cartoons[3].userrate;
};