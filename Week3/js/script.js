const tbody = document.getElementById("tbody")

function emplRate(empl, pop) {
    let emplPercentage = (empl/pop*100).toFixed(2)
    return emplPercentage
}

async function getData() {
    const url = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff"
    const url2 = "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065" 


    const data = await fetch(url)
    const municData = await data.json()

    const data2 = await fetch(url2)
    const empData = await data2.json()

    mun = municData.dataset.dimension.Alue.category.label

    
    munics = Object.values(mun)
    vals = municData.dataset.value
    emp = empData.dataset.value

    allData = [];
    for (let i = 0; i < munics.length; i++) {
        allData.push([munics[i], vals[i], emp[i]])
    }
    
    let i = 1;
    allData.forEach((data) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        let municipality = data[0]
        let population = data[1]
        let employmentAmount = data[2]
        let employRate = emplRate(employmentAmount, population)

        td.innerText = municipality
        td2.innerText = population
        td3.innerText = employmentAmount
        td4.innerText = employRate + "%"


        if (employRate > 45) {
            tr.className = "over45"
        } else if (employRate < 25) {
            tr.className = "under25"
        } else if (i % 2 == 0) {
            tr.className = "even"
        } else {
            tr.className = "noteven"
        }
        i++

        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tbody.appendChild(tr)
    });
}

getData()