function getCountry() {
    var name = document.querySelector("#cnme").value;
    var request = new XMLHttpRequest()
    request.open("get", `https://restcountries.eu/rest/v2/name/${name}`)

    request.send()
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if ((request.status >= 200) & (request.status < 300)) {
                var data = JSON.parse(request.responseText)

                let c_name = data[0].name;
                let flag = data[0].flag;
                let populat = data[0].population;
                let curr = data[0].currencies[0].name;
                console.log(data);

                var htmll = ""
                htmll += `
                <div class="card" style="width: 18rem;">
  <img src="${flag}" class="card-img-top" alt="n0-imge">
  <div class="card-body">
    <p class="card-text"> <h3>country namr: ${c_name} </h3>
    <h3>population: ${populat} </h3>
    <h3>currency: ${curr} </h3>
    </p>
  </div>
</div>`
                document.querySelector("#res").innerHTML = htmll;


            }
            else{
                alert("erreor")
            }
        }
        
    }
}