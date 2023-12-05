const jsonQuery = {
    "query": [
      {
        "code": "Alue",
        "selection": {
          "filter": "item",
          "values": [
            "000000"
          ]
        }
      },
      {
        "code": "Puolue",
        "selection": {
          "filter": "item",
          "values": [
            "04",
            "02",
            "03",
            "01",
            "05",
            "06",
            "07",
            "08"
          ]
        }
      },
      {
        "code": "Puolueiden kannatus",
        "selection": {
          "filter": "item",
          "values": [
            "Sar2"
          ]
        }
      },
      {
        "code": "Sukupuoli",
        "selection": {
          "filter": "item",
          "values": [
            "S"
          ]
        }
      }
    ],
    "response": {
      "format": "json-stat2"
    }
  }

const getData = async () => {
    const url = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/evaa/020_evaa_2019_tau_120.px"

    const res = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(jsonQuery)
    })
    if(!res.ok) {
        return;
    }
    const data = await res.json()

    return data
}

const buildChart = async () => {
    const data = await getData()
    //console.log(data)

    const parties = Object.values(data.dimension.Puolue.category.label);
    const labels = Object.values(data.dimension.Vuosi.category.label);
    const values = data.value;
    
    //console.log(parties)
    //console.log(labels)
    //console.log(values)

    parties.forEach((party, index) => {
        let partySupport = []
        for(let i = 0; i < 10; i++) {
            partySupport.push(values[i * 8 + index])
        }
        parties[index] = {
            name: party,
            values: partySupport.reverse()
        }
    })

    console.log(parties)

    const chartData = {
        labels: labels,
        datasets: parties
    }

    const chart = new frappe.Chart("#chart", {
        title: "Finnish parliamentary elections",
        data: chartData,
        type: "line",
        height: 400,
        colors: ['#f54b4b', '#ffde55', '#006288', '#349a2b', '#61bf1a', '#f00a64', '#ffdd93', '#0135a5'],
        /*barOptions: {
            stacked: 1
        },*/
        lineOptions: {
            hideDots: 1,
            regionFill: 0
        }

    })



}

buildChart()