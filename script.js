//superhero api key

var searchBtn = document.getElementById("searchBar")
var textValue = document.getElementById("textVal").value

searchBtn.addEventListener("click", function () {
    textValue = document.getElementById("textVal").value
    console.log(textValue)

    //var superheroCall = 'https://superheroapi.com/api/10221409534092122/search/' + textValue

    function heroSearch() {

        var proxyUrl = "https://bootcamp-proxy.herokuapp.com/"
        var baseUrl = "https://superheroapi.com/api/10221409534092122/search/"

        fetch(proxyUrl + baseUrl + textValue)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data)
            })
        //  fetch(superheroCall)

        //  console.log(superheroCall)

        // .then(function (response) {

        //     console.log(response)
        //      return response.json()
        //  })
        //  .then(function(jsonResponse){
        //      console.log(jsonResponse)
        //  })
    }
    heroSearch()

})