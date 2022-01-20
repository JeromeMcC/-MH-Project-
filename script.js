
//gamespot api key 2165c4fa945315e7cf407c110d7199db8bfa5119
var searchBtn = document.getElementById("searchBar")
var textValue = document.getElementById("textVal").value

searchBtn.addEventListener("click", function () {
    textValue = document.getElementById("textVal").value
    console.log(textValue)


    function gameSearch() {

        var proxyUrl = "https://bootcamp-proxy.herokuapp.com/"
        var baseUrl = "http://www.gamespot.com/api/games/?api_key=2165c4fa945315e7cf407c110d7199db8bfa5119&format=json&sort=release_date:desc&filter=name:"

        fetch(proxyUrl + baseUrl + textValue)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data)
                //title
                //about
                //releasedate
                //website
                var searchResults = data.results
                for (let i = 0; i <= 6; i++) {
                    var title = data.results[i].name
                    
                    var about = data.results[i].description
                    var release = data.results[i].release_date
                    console.log(release)


                    var indexTitleEL = document.getElementById("title" + i)
                    
                    var indexAboutEL = document.getElementById("about" + i)
                    var indexReleaseEL = document.getElementById("rd" + i)
                    console.log(indexReleaseEL)

                    indexTitleEL.innerHTML = title
                    indexAboutEL.innerHTML = about
                    indexReleaseEL.innerHTML = release
                    
                }
            })


        


    }
    gameSearch()

})