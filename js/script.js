const breweryUrl = "https://api.openbrewerydb.org/breweries";
const corsEnabledUrl = "https://noroffcors.onrender.com/";

const corsFix = corsEnabledUrl + breweryUrl;

const loaderAnimation = document.querySelector(".loader")
const resultsContainer = document.querySelector(".results");

async function callApi() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();


        resultsContainer.innerHTML = "";

        for(let i = 0; i < results.length; i++) {
            console.log(results[i].name)
            if(i === 12) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result">
            <span><li>Name: ${results[i].name}</li></span>
            <span><li>Location: ${results[i].state}</li></span>
            <span><li>Type: ${results[i].brewery_type}</li></span>
            </div>`;
        }
        

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", error);
    }
}

callApi();