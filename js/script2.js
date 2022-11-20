const url = "https://rickandmortyapi.com/api/character";

const resultsContainer = document.querySelector(".results");

async function callApi() {
    
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
    
        resultsContainer.innerHTML = "";

        const results = json.results;

        results.forEach(function(characters) {
            resultsContainer.innerHTML += `<a href="details.html?id=${characters.id}" class="result">
            <div class="image" style="background-image: url(${characters.image});"></div>
            <span><li>Name: ${characters.name}</li></span>
            <span><li>Species: ${characters.species}</li></span>
            <span><li>Status: ${characters.status}</li></span>
            </a>`;
        });
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }

}

callApi();