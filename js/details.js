const detailContainer = document.querySelector(".characters-details")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://rickandmortyapi.com/api/character/" + id;

detailContainer.innerHTML = "";

async function callApi() {
    
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }

}

callApi();

function createHtml(details) {
    detailContainer.innerHTML += `<div class="result2">
                                <h1>${details.name}</h1>
                                <h2>
                                ${details.gender}<br>
                                ${details.status}<br>
                                ${details.url}
                                </h2>
                                <div>`;
}


