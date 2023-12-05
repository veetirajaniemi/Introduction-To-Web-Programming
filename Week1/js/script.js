createButtons();

function createButtons() {
    const printButton = document.getElementById("my-button")
    const header1 = document.getElementById("header1")
    const listButton = document.getElementById("add-data")

    printButton.addEventListener("click", function() {
        console.log("hello world")
        header1.innerText = "Moi maailma"
    })

    listButton.addEventListener("click", function() {
        const list = document.getElementById("my-list")
        let newItem = document.createElement("li")
        newItem.innerText = document.getElementById("text").value
        list.appendChild(newItem)
    })
}