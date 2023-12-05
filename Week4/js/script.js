const submitButton = document.getElementById("submit-data")
const showContainer = document.getElementById("show-container")

submitButton.addEventListener("click", () => {
    event.preventDefault()
    while (showContainer.hasChildNodes()) {
        showContainer.removeChild(showContainer.childNodes[0])
    }
    getData()
})

async function getData() {


    const url = "https://api.tvmaze.com/search/shows?q="
    let inputText = document.getElementById("input-show").value
    let urlSearch = url + inputText
    let data = await fetch(urlSearch)
    let showDataObj = await data.json()
    
    shows = Object.values(showDataObj) // vals of each object
    createShowData(shows)
    

}

function createShowData(showData) {
    showData.forEach((show) => {
        
        showDiv = document.createElement("div")
        showDiv.className = "show-data"

        if (show.show.image && show.show.image.medium) {
            let image = show.show.image.medium
            let img = document.createElement("img")
            img.src = image
            showDiv.appendChild(img)
        }
        
        let div = document.createElement("div")
        div.className = "show-info"

        let h1 = document.createElement("h1")
        let showName = show.show.name
        h1.innerText = showName
        div.appendChild(h1)

        if (show.show.summary) {
            let p = document.createElement("p")
            let showSummary = show.show.summary 
            p.innerHTML = showSummary  // text already HTML with <p> tags
            div.appendChild(p)
        }

        showDiv.appendChild(div)
        showContainer.appendChild(showDiv)
        
    });
}

