//storing API key

var apikey = "80c529d7faab43a7a202e7d82091d70";


const apiresult = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&key=80c529d7faab43a7a202e7d82091d70";

const getvideos = (generes) =>{
fetch(apiresult) 
	
.then(response => {
    console.log(response);
    if(!response.ok){

    }
    else{
        response.json()
        console.log(response)
        .then(function(data){

        })
    }
})
}



$.getJSON('https://api.rawg.io/api/games?key=80c529d7faab43a7a202e7d82091d705',function(data){
    console.log(data);

$.each(data,function(key,value){
    console.log(value);

    var name = value.games.name;
    var slug = value.games.slug;
    console.log(id);

    $('.first').text(id);
    $('.second').text(slug);
    $('.third').text(name);

    $('.result').append('<p class="ID">' + id + '</p><p class="name">'+ name + '</p> <p class="slug>' + slug + '</p>');
});
});



function getGame(searchTerm) {
     
    var resultquery = "https://rawg-video-games-database.p.rapidapi.com/games" + "?search=" + searchTerm + "&page_size=10&search_exact=true&platforms=pc&key=80c529d7faab43a7a202e7d82091d705" ;
  
    console.log(resultquery)
    return fetch(resultquery, {
        "method": "GET",
        "headers": {
           
            "x-rapidapi-key": "80c529d7faab43a7a202e7d82091d705",

            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
        }
    });
}
getGame(pc);