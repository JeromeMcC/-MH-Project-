//storing API key

var apikey = "80c529d7faab43a7a202e7d82091d705";
var searchBtn = document.getElementById("searchBar")
var textValue = document.getElementById("textVal").value

searchBtn.addEventListener("click", function () {
    textValue = document.getElementById("textVal").value
    console.log(textValue)


const apiresult = "https://api.rawg.io/api/games?key=80c529d7faab43a7a202e7d82091d705&search_precise=true&search="+ textValue
function gameSearch() { 
    fetch(apiresult)

        .then(function (responseR) {
            return responseR.json();
        }).then(function (dataR) {
            console.log(dataR)
        
           
            })
        }
    gameSearch()
    
})


