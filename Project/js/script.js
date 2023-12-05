// Veeti Rajaniemi 161023

// Query for fetching the election data
const jsonQuery = {
        "query": [
          {
            "code": "Alue",
            "selection": {
              "filter": "item",
              "values": [
                "000000",
                "010000",
                "011091",
                "020000",
                "021049",
                "021078",
                "021092",
                "021106",
                "021186",
                "021235",
                "021245",
                "021257",
                "021444",
                "021427",
                "021428",
                "021737",
                "021223",
                "021540",
                "021622",
                "021543",
                "021638",
                "021612",
                "021613",
                "021858",
                "022224",
                "022434",
                "022424",
                "022585",
                "022701",
                "022505",
                "022710",
                "022220",
                "022606",
                "022835",
                "022842",
                "022753",
                "022927",
                "023018",
                "023149",
                "023407",
                "023504",
                "023611",
                "023616",
                "023755",
                "030000",
                "031202",
                "031602",
                "031680",
                "031734",
                "031073",
                "031252",
                "031259",
                "031308",
                "031501",
                "031586",
                "031587",
                "031776",
                "031784",
                "031853",
                "032400",
                "032423",
                "032838",
                "032430",
                "032431",
                "032006",
                "032482",
                "032445",
                "032101",
                "032150",
                "032279",
                "032533",
                "032573",
                "032481",
                "032017",
                "032419",
                "032503",
                "032490",
                "032529",
                "032485",
                "032705",
                "032920",
                "032577",
                "032895",
                "032432",
                "032209",
                "033019",
                "033284",
                "033304",
                "033322",
                "033040",
                "033243",
                "033923",
                "033480",
                "033538",
                "033561",
                "033631",
                "033636",
                "033219",
                "033979",
                "033704",
                "033906",
                "033738",
                "033761",
                "033833",
                "033918",
                "040000",
                "041079",
                "041609",
                "041537",
                "041413",
                "041684",
                "041685",
                "041266",
                "041406",
                "042050",
                "042262",
                "042102",
                "042913",
                "042214",
                "042099",
                "042886",
                "042293",
                "043051",
                "043442",
                "043181",
                "043230",
                "043271",
                "043484",
                "043531",
                "043608",
                "043747",
                "043783",
                "043319",
                "060000",
                "061061",
                "061098",
                "061283",
                "061109",
                "061083",
                "061210",
                "061401",
                "061692",
                "061855",
                "061111",
                "061088",
                "061089",
                "061398",
                "061532",
                "061694",
                "062016",
                "062082",
                "062165",
                "062560",
                "062015",
                "063081",
                "063086",
                "063103",
                "063142",
                "063169",
                "063316",
                "063433",
                "063576",
                "063781",
                "063834",
                "063981",
                "070000",
                "071211",
                "071730",
                "071289",
                "071418",
                "071536",
                "071604",
                "071837",
                "071908",
                "071980",
                "071932",
                "071303",
                "072020",
                "072864",
                "072928",
                "072310",
                "072108",
                "072508",
                "072506",
                "072933",
                "072562",
                "072581",
                "072790",
                "072493",
                "072912",
                "072772",
                "072988",
                "072238",
                "072253",
                "072254",
                "073143",
                "073177",
                "073250",
                "073291",
                "073619",
                "073635",
                "073439",
                "073702",
                "073887",
                "073922",
                "073936",
                "080000",
                "810000",
                "820000",
                "081075",
                "081917",
                "081153",
                "081285",
                "081286",
                "081044",
                "081163",
                "081306",
                "081754",
                "081909",
                "081405",
                "081539",
                "081173",
                "081978",
                "081491",
                "081014",
                "081492",
                "081085",
                "081696",
                "081775",
                "081740",
                "081741",
                "081246",
                "081618",
                "082593",
                "082640",
                "082184",
                "082594",
                "082937",
                "083046",
                "083097",
                "083178",
                "083213",
                "083416",
                "083441",
                "083489",
                "083507",
                "083580",
                "083728",
                "083891",
                "083588",
                "083623",
                "083624",
                "083681",
                "083689",
                "083700",
                "083739",
                "083768",
                "083831",
                "083935",
                "090000",
                "910000",
                "920000",
                "091140",
                "091167",
                "091251",
                "091856",
                "091045",
                "091632",
                "091297",
                "091919",
                "091227",
                "091534",
                "091476",
                "091174",
                "091915",
                "091212",
                "092276",
                "092309",
                "092422",
                "092541",
                "092911",
                "092749",
                "092778",
                "093090",
                "093146",
                "093171",
                "093176",
                "093204",
                "093239",
                "093260",
                "093248",
                "093263",
                "093402",
                "093916",
                "093420",
                "093426",
                "093595",
                "093607",
                "093686",
                "093687",
                "093707",
                "093762",
                "093844",
                "093848",
                "093943",
                "093857",
                "093921",
                "093925",
                "100000",
                "101231",
                "101272",
                "101315",
                "101429",
                "101885",
                "101598",
                "101743",
                "101589",
                "101544",
                "101975",
                "101905",
                "101942",
                "102005",
                "102414",
                "102010",
                "102863",
                "102145",
                "102232",
                "102233",
                "102004",
                "102281",
                "102971",
                "102301",
                "102175",
                "102164",
                "102399",
                "102408",
                "102499",
                "103052",
                "103074",
                "103151",
                "103152",
                "103217",
                "103218",
                "103236",
                "103280",
                "103287",
                "103288",
                "103300",
                "103403",
                "103421",
                "103440",
                "103475",
                "103545",
                "103584",
                "103599",
                "103759",
                "103846",
                "103849",
                "103893",
                "103924",
                "103934",
                "103946",
                "103559",
                "103945",
                "103479",
                "103944",
                "103989",
                "110000",
                "111179",
                "111787",
                "111180",
                "111277",
                "112182",
                "112299",
                "112443",
                "112183",
                "112249",
                "112410",
                "112500",
                "112992",
                "112274",
                "112770",
                "112774",
                "113077",
                "113172",
                "113415",
                "113216",
                "113226",
                "113256",
                "113265",
                "113275",
                "113312",
                "113435",
                "113495",
                "113592",
                "113601",
                "113729",
                "113633",
                "113850",
                "113892",
                "113931",
                "120000",
                "121205",
                "121940",
                "121244",
                "121564",
                "121973",
                "121084",
                "121255",
                "121567",
                "121972",
                "121678",
                "121582",
                "121926",
                "122069",
                "122139",
                "122292",
                "122208",
                "122095",
                "122290",
                "122305",
                "122425",
                "122494",
                "122535",
                "122563",
                "122765",
                "122977",
                "123009",
                "123071",
                "123072",
                "123105",
                "123317",
                "123436",
                "123483",
                "123578",
                "123615",
                "123620",
                "123625",
                "123626",
                "123630",
                "123691",
                "123697",
                "123746",
                "123748",
                "123708",
                "123777",
                "123785",
                "123791",
                "123247",
                "123603",
                "123617",
                "123682",
                "123832",
                "123859",
                "123841",
                "123889",
                "130000",
                "131240",
                "131698",
                "131699",
                "131851",
                "132241",
                "132320",
                "132758",
                "133047",
                "133148",
                "133261",
                "133273",
                "133498",
                "133583",
                "133614",
                "133683",
                "133732",
                "133742",
                "133751",
                "133845",
                "133854",
                "133890",
                "133976",
                "050000",
                "051478",
                "053035",
                "053043",
                "053060",
                "053062",
                "053065",
                "053076",
                "053170",
                "053295",
                "053318",
                "053417",
                "053438",
                "053736",
                "053766",
                "053771",
                "053941"
              ]
            }
          },
          {
            "code": "Puolue",
            "selection": {
              "filter": "item",
              "values": [
                "03",
                "01",
                "04",
                "02",
                "05",
                "06",
                "07",
                "08"
              ]
            }
          },
          {
            "code": "Tiedot",
            "selection": {
              "filter": "item",
              "values": [
                "osuus_aanista",
                "lkm_val"

              ]
            }
          }
        ],
        "response": {
          "format": "json-stat2"
        }
      
  }


// Some values of the data to make index calculation simpler
const nYrs = 12
const nMuns = 496
const nParties = 8
const nCategories = 2
const nVals = nYrs*nMuns*nParties*nCategories
const valsPerYear = nVals / nYrs
const valsPerYearPerMun = valsPerYear / nMuns

// Object to contain basic information of parties'
const Parties = [
  {id: 0, name: "Kansallinen Kokoomus", abb: "KOK", color: "#006288"}, //
  {id: 1, name: "Suomen Sosialidemokraattinen Puolue", abb: "SDP", color: "#E11931"},
  {id: 2, name: "Suomen Keskusta", abb: "KES", color: "#01954B"},
  {id: 3, name: "Perussuomalaiset", abb: "PS", color: "#FFD500"},
  {id: 4, name: "Vihreä liitto", abb: "VIH", color: "#61BF1A"},
  {id: 5, name: "Vasemmistoliitto", abb: "VAS", color: "#BF1E24"},
  {id: 6, name: "Suomen ruotsalainen kansanpuolue", abb: "RKP", color: "#FFDD93"},
  {id: 7, name: "Suomen Kristillisdemokraatit", abb: "KD", color: "#2B67C9"}
]

// names from https://fi.wikipedia.org/wiki/Luettelo_Suomen_puolueista
// colors from https://fi.wikipedia.org/wiki/Malline:Suomen_puolueiden_metaohje

// Years of the datasets and their indexes
const Years = [
  {ind: 0, year: "1976"},
  {ind: 1, year: "1980"},
  {ind: 2, year: "1984"},
  {ind: 3, year: "1988"},
  {ind: 4, year: "1992"},
  {ind: 5, year: "1996"},
  {ind: 6, year: "2000"},
  {ind: 7, year: "2004"},
  {ind: 8, year: "2008"},
  {ind: 9, year: "2012"},
  {ind: 10, year: "2017"},
  {ind: 11, year: "2021"},
]

// Definitions of buttons and some other variables used
const submitButton = document.getElementById("submit-year")
const dataButton = document.getElementById("add-data")
const resetButton = document.getElementById("reset")

let map;
let osm;
let chart;

const chartData = {
  labels: null,
  datasets: null
};

let mapData;
let data;


// The function to fetch the map data and election data
const getData = async(year) => {

  // Fetching the map data
  const url = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326"
  const mapData_a = await fetch(url)
  mapData = await mapData_a.json()

  // Fetching the election data
  const url2 = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/kvaa/statfin_kvaa_pxt_12g3.px"
  const res = await fetch(url2, {
      method: "POST",
      body: JSON.stringify(jsonQuery)
  })
  if (!res.ok) {return}
  data = await res.json()

  createMap(year) // Creating the map
  buildChart() // Building the line chart
}

// The function to create the map and layers
const createMap = (year) => {

  // Creation of a Leaflet map 
  if (!map) {
      map = L.map('map', {
      minZoom: -3
    })
  }

  // Adding the open street map 
  if (!osm) {
      osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution: "© OpenStreetMap",
        weight: 2    
    }).addTo(map)
  }
  
  // Removing layers which will be updated 
  map.eachLayer((layer) => {
    if (layer != osm) {
      map.removeLayer(layer)
    }
  })

  // Adding geoJson data to the map
  let geoJson = L.geoJson(mapData, {
    onEachFeature: (feature, layer) => {
      getFeature(feature, layer, year) // Adding basic information and bar chart to each area 
    },
    style: (feature) => {
      return getStyle(feature, year) // Adding the color of the winning party
    }
  }).addTo(map)

  // Adjust the maps correctly  
  map.fitBounds(geoJson.getBounds())
}


// Function to get the highest percentage and number of electec councellors for certain area 
// and year
const getHighestVals = (munCode, year) => {

  // Finding the index of current year
  let yearVals = data.dimension.Vuosi.category.index
  let yearIndex = yearVals[year]

  // Finding the index of current municipality in election data
  let munCodes = data.dimension.Alue.category.label
  let longCode = Object.keys(munCodes).find(key => munCodes[key] === munCode)
  let munIndex = data.dimension.Alue.category.index[longCode]

  // If not index found, no data for the current area --> return
  if (!munIndex) {return}

  // Getting all current year's data values
  let startIndex = valsPerYear * yearIndex
  let endIndex = startIndex + valsPerYear
  let allValsPerYear = data.value.slice(startIndex, endIndex) 
  
  // Then updating indexes for the correct area and getting these values
  startIndex = valsPerYearPerMun * munIndex
  endIndex = startIndex + valsPerYearPerMun
  let allValsPerMun = allValsPerYear.slice(startIndex, endIndex)

  // Adding the percentages of votes for each party and number of councillors of each party elected
  // to the arrays
  let percentages = []
  let numOfElected = []
  for (let i = 0; i < allValsPerMun.length; i+=2) {
      percentages.push(allValsPerMun[i])
      numOfElected.push(allValsPerMun[i+1])
  }

  // Finding the highest percentage value, its' index and the number of councillors elected for
  // the party with the highest percentage value
  let maxPerc = Math.max(...percentages)
  let idPerc = percentages.indexOf(maxPerc)
  let electedC = numOfElected[idPerc]
  
  // Return nothing if no values found
  if (!maxPerc) {return}
  
  // Return all three values
  return [maxPerc, idPerc, electedC];
}

// Function to create the information for certain area
const getFeature = (feature, layer, year) => {

  // Finding the name of the municipality
  if (!feature.properties.name) return;
  let mun = feature.properties.name

  // Finding the area code of the municipality in GeoJson data
  let munCode = feature.properties.kunta + " " + mun

  // Getting the highest values 
  let vals = getHighestVals(munCode, year);
  
  // Stop if no values found
  if (!vals) {return}

  let maxPerc = vals[0]
  let idPerc = vals[1]
  let electedC = vals[2]

  // Defining the winner party based on the value index
  let winner = Parties.find(x => x.id === idPerc)
  let winnerParty = winner.name

  // Municipality name shown when hovering over the area
  layer.bindTooltip(mun)
  
  // Creating the content to show when clicking on the area: informatino and the charts
  let popupContent = document.createElement("div")
  popupContent.innerHTML = `<ul>
    <li> Municipality: ${mun}</li>
    <li> Winning Party: ${winnerParty} with ${maxPerc}% of votes in area and ${electedC} councillors elected</li>
    </ul>
    <ul id="no-bullet">
    <li> <div id="chart2"> </div> </li>
    </ul>`

  // This content to show when clicking
  layer.bindPopup(popupContent)

  // Defining the abbreviations and colors of parties to the arrays
  let abbs = []

  for (let i = 0; i < nParties; i++) {
    abbs.push(Parties[i].abb)
  }

  // Finding the index for the municipality in the election data - different than the index
  // in map data
  let munNames = data.dimension.Alue.category.label
  let curKey;
  for (let key in munNames) {
    let name = munNames[key]
    let curName = name.slice(-mun.length)
    if (curName === mun) {
      curKey = key
      break
    }
  }
  let munIndex = data.dimension.Alue.category.index[curKey]

  // Adding all percentage data values to the list - number of elected councillors data is skipped
  let percVals = []
  for (let i = 0; i < data.value.length; i+=2) {
    percVals.push(data.value[i])
  }

  // Finding the index of current year
  let yearVals = data.dimension.Vuosi.category.index
  let yearIndex = yearVals[year]

  // Defining the start index of the data for the correct municipality  
  let startIndex = yearIndex*valsPerYear/2 + munIndex*nParties

  // Adding the correct values
  let munVals = []

  for (let i = startIndex; i < startIndex + nParties; i++) {
    munVals.push(percVals[i])
  }


  // Defining data for the bar chart - abbreviations as labels and percentage values as dataset
  const chartData2 = {
    labels: null,
    datasets: null
  };
  let datasets = []
  datasets[0] = {values: munVals}
  chartData2.labels = abbs
  chartData2.datasets = datasets

  // Creating the bar chart when clicking on layer
  layer.on("click", () => {
    chartElement = document.getElementById("chart2")
    const chart = new frappe.Chart(chartElement, {
      title: "Parties votes in " + mun + " in " + year,
      data: chartData2,
      type: 'bar'
    })
  })
}

// Function to get the colour of the winning party
const getStyle = (feature, year) => {

  // Stop if no name
  if (!feature.properties.name){
    console.log(feature)
    return
  }

  // Define name and code for area
  let mun = feature.properties.name
  let munCode = feature.properties.kunta + " " + mun

  // Compute the values to get the id of winner party
  let vals = getHighestVals(munCode, year)
  if (!vals) {return}
  let idPerc = vals[1]

  // Finding the winner party and its' color
  let winner = Parties.find(x => x.id === idPerc)
  let winnerColor = winner.color

  // Returning the color
  return {
    color: winnerColor
  }
    
}

// Function to update the year of data when clicking on submit
submitButton.addEventListener("click", () => {
  event.preventDefault()

  // Checking which year is selected
  let mapYear = document.querySelector("input[name='year']:checked").value
  
  // Updating the map 
  createMap(mapYear) 
})

// Building the line chart
const buildChart = () => {

  // Defining the years
  let yearVals = Object.keys(data.dimension.Vuosi.category.index)
  
  // Adding perentage values to array - elected councillors skipped
  let percVals = []
  for (let i = 0; i < data.value.length; i+=2) {
    percVals.push(data.value[i])
  }

  // List to contain object of each party's information
  partyData = []

  // Object to contain the values of each party - first only empty lists
  values = {}
  for (let j = 0; j < nParties; j++) {
    values[j] = []
  }

  // Starting from 1976 - correct end index
  let end = nYrs*valsPerYear/2 
  
  // For each year, adding correct vote percentage values for each party
  for (let start = 0; start < end; start += valsPerYear/2) {
    for (let i = 0; i < nParties; i++) {
      values[i].push(percVals[start+i])
    }
  }

  // Adding parties' abbreviations and percentage values to list and colours to another one
  colorList = []
  for (let i = 0; i < nParties; i++) {
    partyData[i] = {name: Parties[i].abb, values: values[i]}
    colorList.push(Parties[i].color)
  }

  // Defining years as labels and other data as datasets for the chart
  chartData.labels = yearVals
  chartData.datasets = partyData

  // Creating the chart
  chart = new frappe.Chart("#chart", {
    title: "Support for parties (%) between 1976 - 2021 in Finland",
    data: chartData,
    type: "line",
    colors: colorList,
    height: 400
  })
}

// Function to add estimated data points when clicking on the button
dataButton.addEventListener("click", () => {
  event.preventDefault()

  // Defining current datasets and years of the chart
  let datasets = chartData.datasets
  let years = chartData.labels
  let nYears = years.length

  // Defining empty object and arrays for new values
  newValues = {}
  let colorList = []
  let partyData = []

  // Going through each party
  for (let i = 0; i < nParties; i++) {
    let values = (datasets[i].values) // Getting all values of a party
    let deltaSum = 0
    for (let j = 1; j < values.length; j++) {
      deltaSum += (values[j]-values[j-1]) // Summing the change of values between different years
    }
    let meanDelta = deltaSum / (values.length-1) // Mean of change
    let newVal = values[values.length-1] + meanDelta // New value: old value + mean of change of values
    if (newVal <= 0) { // Min value = 0 so the chart at least seems to be 3bit better :D 
      newVal = 0
    }
    values.push(newVal) // Add new value to list
    newValues[i] = values
    colorList.push(Parties[i].color) // Update color list
    partyData[i] = {name: Parties[i].abb, values: newValues[i]} // Update data of the party
  }

  // New year is 4 years from the previous one
  let newYear = parseInt(years[nYears-1]) + 4
  years.push(newYear.toString())

  // Update the data for the chart
  chartData.labels = years
  chartData.datasets = partyData
  chart.data = chartData

  // Update the chart with new values
  chart.update()
})

// Function to reset the line chart when pressing on reset button
resetButton.addEventListener("click", () => {
  
  // Building the line chart
  buildChart() 
})

// When loading the page, the newest data is shown
getData("2021")


