var i = 0

function navigate(page) {
    location.replace(page)
}
function increment() {
    document.getElementById("counter").innerHTML = i++ + 1;
}
function decrement() {
    document.getElementById("counter").innerHTML = i-- - 1;
}
function getAPIRequest(){
	 let request = new XMLHttpRequest();
      request.open("GET", "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole");
      request.send();
      request.onload = () => {
        document.getElementById("loading").style = "display:none"
        console.log(request);
        if (request.status === 200) {
          var firstName;
          var lastName;
          var json=JSON.parse(request.response);
          var tableData = "";
          tableData+=("<div align='center'>");
          tableData+=("<table border='1' width=100 >");
          tableData+=("<tr><th>Firstname</th><th>Lastname</th></tr>");

          for(var j in json){
            console.log(json[j]);
            firstName = json[j]["first"];
            lastName =json[j]["last"];
            tableData+=("<tr><td>"+firstName+"</td><td>"+lastName+"</td></tr>");

          }
           tableData+=("</table>")
          tableData+=("</div>");
          document.getElementById("table").innerHTML = tableData;

        } else {
          console.log(`error ${request.status} ${request.statusText}`);
        }
      };
}



