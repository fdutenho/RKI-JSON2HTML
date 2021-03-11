var counties = ["LK Wetteraukreis","LK Gießen","LK Lahn-Dill-Kreis"]

function searchTable(tableID) {
  var input = document.getElementById("searchTableInput");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("counties");
  var trs = table.getElementsByTagName("tr");

  for (i = 0; i < trs.length; i++) {
    td = trs[i].getElementsByTagName("td")[0]
    if (td) {
      txtValue = td.textContent || td.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        trs[i].style.display = ""
      } else {
        trs[i].style.display = "none"
      }
    }
  }
}

function updateCountiesList(elem) {
   if(elem.checked) {
      //added to list
      counties.push(elem.value)
   } else {
      //removed from list
      counties = counties.filter(item => item !== elem.value)
   }
   document.getElementById("test").href = "./index.html?cfg=" + encodeURI(counties.join(","))
}

function displayCountySelector(selectTableID) {
   var tbl = document.getElementById(selectTableID)
   var tbody = tbl.getElementsByTagName('tbody')[0]
   if(!tbody) {
      tbl.createTBody()
      tbody = tbl.getElementsByTagName('tbody')[0]
   }

   fetch('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=county,cases7_per_100k,cases7_per_100k_txt,BL&returnGeometry=false&returnDistinctValues=true&outSR=4326&f=json')
      .then(response => response.json())
      .then(rkiData => {
         var filteredRkiData = rkiData.features
            .forEach(curItem => {
               var newRow = tbody.insertRow()
               var cell1 = newRow.insertCell()
               var cell2 = newRow.insertCell()
               var cell3 = newRow.insertCell()

               cell1.innerHTML = curItem.attributes.county
               cell2.innerHTML = curItem.attributes.BL
               var checked=""
               if(counties.includes(curItem.attributes.county)) checked="checked"
               cell3.innerHTML = "<input type=\"checkbox\" name=\"checkbox\" value=\""+curItem.attributes.county+"\" "+checked+" onclick=\"updateCountiesList(this)\" />"
            })
      })
      .catch(error => {
         console.error('Error:', error);
      })
}
