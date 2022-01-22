var searchBtn = document.getElementById("searchBar")
var textValue = document.getElementById("textVal").value
var rawgApiData
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
                        console.log(dataR)
                        rawgApiData = dataR


                        //create the table 



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
                        var searchResults2 = rawgApiData.results

                        let tableBody = document.createElement('tbody')
                        table.append(tableBody)

                        dyTable.innerHTML = ""
                        dyTable.append(table)




                        for (let i = 0; i < data.results.length; i++) {
                            var title = data.results[i].name

                            if (data.results[i].image !== null) {

                                var image = data.results[i].image.original
                            }
                            else {
                                var image = "images/NPA.png"
                            }

                            var release = data.results[i].release_date
                            var about = data.results[i].description

                            if (rawgApiData.results[i].esrb_rating === null) { esrb = "" }
                            else { var esrb = rawgApiData.results[i].esrb_rating.name }
                            console.log(release)


                            let tableBodyRow = document.createElement('tr')
                            let imageElData = document.createElement('img')
                            imageElData.src = image
                            let titleData = document.createElement('td')
                            titleData.innerText = title
                            let aboutData = document.createElement('td')
                            aboutData.innerText = about
                            let releaseData = document.createElement('td')
                            releaseData.innerText = release
                            let esrbData = document.createElement('td')
                            esrbData.innerText = esrb

                            tableBodyRow.append(imageElData,
                                titleData, aboutData, releaseData, esrbData)

                            table.append(tableBodyRow)
                        }
                        
                        $(document).ready(function () {
                            $("tr:odd").css("background-color", "#b0c4de");
                            });
                    })
            })
    }
    gameSearch()

})