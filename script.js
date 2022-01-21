
//gamespot api key 2165c4fa945315e7cf407c110d7199db8bfa5119
//rawg api key = "80c529d7faab43a7a202e7d82091d705"
var searchBtn = document.getElementById("searchBar")
var textValue = document.getElementById("textVal").value

searchBtn.addEventListener("click", function () {
    textValue = document.getElementById("textVal").value
    console.log(textValue)

    var apiresult = "https://api.rawg.io/api/games?key=80c529d7faab43a7a202e7d82091d705&search_precise=true&search=" + textValue

    function gameSearch() {

        var proxyUrl = "https://bootcamp-proxy.herokuapp.com/"
        var baseUrl = "http://www.gamespot.com/api/games/?api_key=2165c4fa945315e7cf407c110d7199db8bfa5119&format=json&sort=release_date:desc&filter=name:"

        fetch(proxyUrl + baseUrl + textValue)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data)

                fetch(apiresult)

                    .then(function (responseR) {
                        return responseR.json();
                    }).then(function (dataR) {
                        console.log(dataR)


                    })
                //create the table 
                var searchResults = data.results
                var table = document.createElement('table');
                var tableHeaders = ["Image","title","about","Release_date","ESRB"]
                for (let i = 0; i <= 5; i++) {
                    var title = data.results[i].name
                    var image = data.results[i].image.square_tiny

                    var about = data.results[i].description
                    var release = data.results[i].release_date
                    console.log(image)
                    var table = document.createElement('table')


                    var indexTitleEL = document.getElementById("title" + i)
                    var indexImageEl = document.getElementById("image" + i)
                    var indexAboutEL = document.getElementById("about" + i)
                    var indexReleaseEL = document.getElementById("rd" + i)
                    console.log(document.getElementById("image" + i))

                    indexTitleEL.innerHTML = title
                    indexAboutEL.innerHTML = about
                    indexReleaseEL.innerHTML = release
                    indexImageEl.src = image

                }
            })





    }
    gameSearch()

})