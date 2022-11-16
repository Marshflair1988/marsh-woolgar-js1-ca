const breweryUrl = "https://api.openbrewerydb.org/breweries";
const corsEnabledUrl = "https://noroffcors.onrender.com/";

const corsFix = corsEnabledUrl + breweryUrl;

const resultsContainer = document.querySelector(".results");

async function callApi() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();

        console.log(results);

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", error);
    }
}

callApi();

