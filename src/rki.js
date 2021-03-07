const counties = ["LK Wetteraukreis", "LK Gießen"] //must be the same names than in RKI JSON, field
const elemID = "rki"

function displayTable() {
   var tbl = document.getElementById(elemID)

   fetch('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=county,cases7_per_100k,cases7_per_100k_txt,BL&returnGeometry=false&returnDistinctValues=true&outSR=4326&f=json')
      .then(response => response.json())
      .then(rkiData => {
         var filteredRkiData = rkiData.features
            .filter(cur => counties.includes(cur.attributes.county))
            .forEach(curItem => {
               var newRow = tbl.insertRow()
               var cell1 = newRow.insertCell()
               var cell2 = newRow.insertCell()
               var cell3 = newRow.insertCell()

               cell1.innerHTML = curItem.attributes.county
               cell2.innerHTML = curItem.attributes.BL
               cell3.innerHTML = curItem.attributes.cases7_per_100k_txt
            })
      })
      .catch(error => {
         console.error('Error:', error);
      })
}

displayTable()
