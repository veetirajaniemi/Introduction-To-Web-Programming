const dataButton = document.getElementById("submit-data")

dataButton.addEventListener("click", function() {
    event.preventDefault()
    console.log("jejeje")

    const table = document.getElementById("table")
    let userName = document.getElementById("input-username").value
    let email = document.getElementById("input-email").value
    let file = document.getElementById("input-image")
    


    let rows = table.rows.length
    let check = false
    for (let i = 1; i < rows ; i++) {
        let cell = table.rows[i].cells
        if (userName == cell[0].innerHTML) {
            cell[1].innerHTML = email
            checkAdmin(cell[2])
            cell[3].innerHTML = ""
            addImage(cell[3], file)
            check = true
            
        }
    }

    if (check === false) {
        let newRow = table.insertRow()
        let cell1 = newRow.insertCell()
        let cell2 = newRow.insertCell()
        let cell3 = newRow.insertCell()
        let cell4 = newRow.insertCell()
        cell1.innerHTML = userName
        cell2.innerHTML = email
        checkAdmin(cell3)
        addImage(cell4, file)
              
    }
    
    
})

function checkAdmin(cell) {
    if (document.getElementById("input-admin").checked) {
        cell.innerHTML = "X"
    } else {
        cell.innerHTML = "-"
    }
}

function addImage(cell, file) {
    let flen = file.files.length
    if (flen != 0) {
        let img = document.createElement("img")
        img.width = 64
        img.height = 64
        img.src = URL.createObjectURL(file.files[0])
        cell.appendChild(img)
    } 
    
}


const emptyButton = document.getElementById("empty-table")
emptyButton.addEventListener("click", function() {
    let rows = table.rows.length
    console.log(rows)
    for (let i = 1; i < rows; i++) {
        table.deleteRow(1)
    }
})






