const elemID = "rki"
const cfgID = "cfg"
var counties = ["LK Wetteraukreis","LK Gießen","LK Lahn-Dill-Kreis"]

function displayTable() {
   var tbl = document.getElementById(elemID)
   var tbody = null
   if(!tbody) {
      tbl.createTBody()
      tbody = tbl.getElementsByTagName('tbody')[0]
   }
   tbody.innerHTML = null

   fetch('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=county,cases7_per_100k,cases7_per_100k_txt,BL&returnGeometry=false&returnDistinctValues=true&outSR=4326&f=json')
      .then(response => response.json())
      .then(rkiData => {
         var filteredRkiData = rkiData.features
            .filter(cur => counties.includes(cur.attributes.county))
            .forEach(curItem => {
               var newRow = tbody.insertRow()
               var cell1 = newRow.insertCell()
               var cell2 = newRow.insertCell()
               var cell3 = newRow.insertCell()

               newRow.className="table-success"
               if(curItem.attributes.cases7_per_100k>35) newRow.className="table-info"
               if(curItem.attributes.cases7_per_100k>50) newRow.className="table-warning"
               if(curItem.attributes.cases7_per_100k>100) newRow.className="table-danger"

               cell1.innerHTML = curItem.attributes.county
               cell2.innerHTML = curItem.attributes.BL
               cell3.innerHTML = curItem.attributes.cases7_per_100k_txt
            })
      })
      .catch(error => {
         console.error('Error:', error);
      })
}


var urlParams = new URLSearchParams(window.location.search);
var cfg = urlParams.get('cfg')
counties = cfg.split(",")

displayTable()
