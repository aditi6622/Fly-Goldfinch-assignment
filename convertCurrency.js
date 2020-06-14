function displayConverted(data,value){
    output.innerText = data[Object.keys(data)[0]]*value;
}
function callConvertAPI(from,to,value){
    multiplier = value;
    let request = new XMLHttpRequest();
     request.open("GET", `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`);
     request.send();
     request.onload = () => {
       if (request.status === 200) {
        displayConverted(JSON.parse(request.response),value);
       } else {
         console.log(`error ${request.status} ${request.statusText}`);
       }
     };
}
let toDropDown = document.getElementById("to");
let fromDropDown = document.getElementById("from");
let inputField = document.getElementById("input");
let submitButton = document.getElementById("submit");
let output= document.getElementById("output");
let possibilities = [{"currency":"XCD","name":"East Caribbean dollar","symbol":"$"},{"currency":"EUR","name":"European euro","symbol":"€"},{"currency":"GEL","name":"Georgian lari","symbol":"₾"},{"currency":"XCD","name":"East Caribbean dollar","symbol":"$"},{"currency":"HTG","name":"Haitian gourde","symbol":"G"},{"currency":"INR","name":"Indian rupee","symbol":"₹"},{"currency":"ILS","name":"Israeli new sheqel","symbol":"₪"},{"currency":"KZT","name":"Kazakhstani tenge","symbol":"лв"},{"currency":"KWD","name":"Kuwaiti dinar","symbol":"د.ك"},{"currency":"LSL","name":"Lesotho loti","symbol":"L"},{ "currency": "INR", "name": "Indian rupee", "symbol": "₹"},{"currency":"USD","name":"U.S. Dollar","symbol":"$"}]
possibilities.forEach((data)=>{
    toDropDown.add(new Option(data.name,data.currency));
    fromDropDown.add(new Option(data.name,data.currency));
});
submitButton.onclick = ()=>{
    let value = Number(inputField.value) ;
    if(isNaN(value)) output.innerText = "Not A Valid Amount, Pleas Enter A valid Amt";
    else callConvertAPI(fromDropDown.value,toDropDown.value,value);
}

