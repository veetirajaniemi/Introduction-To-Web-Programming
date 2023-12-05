

async function getData() {
    const url = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326"
    const data_a = await fetch(url)
    const data = await data_a.json()

    const url2 = "https://statfin.stat.fi/PxWeb/sq/4bb2c735-1dc3-4c5e-bde7-2165df85e65f"
    const pm = await fetch(url2)
    const data2 = await pm.json()

    const url3 = "https://statfin.stat.fi/PxWeb/sq/944493ca-ea4d-4fd9-a75c-4975192f7b6e"
    const nm = await fetch(url3)
    const data3 = await nm.json()


    createMap(data, data2, data3)
};

const createMap = (data, data2, data3) => {
    let map = L.map('map', { // create map
        minZoom: -3
    })

    let geoJson = L.geoJson(data, {
        onEachFeature: (feature, layer) => {
            getFeature(feature, layer, data2, data3)
        },
        style: (feature) => {
            return getStyle(feature, data2, data3)
        }
    }).addTo(map) 

    

    let osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution: "© OpenStreetMap",
        weight: 2
    }).addTo(map);

    map.fitBounds(geoJson.getBounds())

}

const getFeature = (feature, layer, pmdata, nmdata) => {
    if (!feature.properties.name) return;
    mun = feature.properties.name
    layer.bindTooltip(mun)
    kuntaindex = "KU" + feature.properties.kunta
    console.log(kuntaindex)

    index = (pmdata.dataset.dimension.Tuloalue.category.index[kuntaindex])
    posMig = pmdata.dataset.value[index]
    negMig = nmdata.dataset.value[index]

    layer.bindPopup(
        `<ul>
            <li>Name: ${mun}</li>
            <li>Positive migration: ${posMig}</li>
            <li>Negative migration: ${negMig}</li>
        </ul>`
    )

}

const getHue = (posMig, negMig) => {
    const max = 120;
    const hue = (posMig/negMig)**3*60
    if (hue <= max) {
        return hue
    } else {
        return max
    }
}

const getStyle = (feature, pmdata, nmdata) => {
    if (!feature.properties.name) return;
    kuntaindex = "KU" + feature.properties.kunta

    index = (pmdata.dataset.dimension.Tuloalue.category.index[kuntaindex])
    posMig = pmdata.dataset.value[index]
    negMig = nmdata.dataset.value[index]

    hue = getHue(posMig, negMig)
    return {
        color: `hsl(${hue}, 75%, 50%)`
    }
}


getData()

