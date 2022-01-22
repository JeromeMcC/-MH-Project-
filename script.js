var searchBtn = document.getElementById("searchBar")
var textValue = document.getElementById("textVal").value

    searchBtn.addEventListener("click", function () {
    textValue = document.getElementById("textVal").value
   
    var apiresult = "https://api.rawg.io/api/games?key=80c529d7faab43a7a202e7d82091d705&search_precise=true&search=" + textValue

    function gameSearch() {

        var proxyUrl = "https://bootcamp-proxy.herokuapp.com/"
        var baseUrl = "http://www.gamespot.com/api/games/?api_key=2165c4fa945315e7cf407c110d7199db8bfa5119&format=json&sort=release_date:desc&filter=name:"

        fetch(proxyUrl + baseUrl + textValue)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                    fetch(apiresult)
                    .then(function (responseR) {
                        return responseR.json();
                    })
                    .then(function (dataR) {
                    })
                //create the table dynamically
                var dyTable = document.querySelector("div.dyTable")
                let tableHeaders = ["Image", "Title", "About", "Release date", "ESRB"]
                let table = document.createElement('table');
                let tableHead = document.createElement("thead")
                let tableHeadRow = document.createElement("tr")
                tableHeaders.forEach(function (header) {
                    let infoHeader = document.createElement('th')
                    infoHeader.innerText = header
                    tableHeadRow.append(infoHeader)
                })
                tableHead.append(tableHeadRow)
                table.append(tableHead)

                var searchResults = data.results
                //var searchResults2 = dataR.results
                
                let tableBody = document.createElement('tbody')
                table.append(tableBody)

                dyTable.append(table)
                for (let i = 0; i < data.results.length; i++) {
                    var title = data.results[i].name
                    var image = data.results[i].image.original
                    var release = data.results[i].release_date
                    var about = data.results[i].description
                    //var esrb = dataR.results[i].esrb_rating
                   
                    let tableBodyRow = document.createElement('tr')
                    let imageElData = document.createElement('img')
                    imageElData.src = image
                    let titleData = document.createElement('td')
                    titleData.innerText = title
                    let aboutData = document.createElement('td')
                    aboutData.innerText = about
                    let releaseData = document.createElement('td')
                    releaseData.innerText = release

                    tableBodyRow.append(imageElData,
                        titleData, aboutData, releaseData)

                    table.append(tableBodyRow)

                    tableBodyRow.append(imageElData,titleData, aboutData, releaseData)
                //Radhikagit
                    table.append(tableBodyRow)
                    $(document).ready(function () {
                        $("tr:odd").css("background-color", "#b0c4de");
                        });

                }
            })
    }
    gameSearch()

})