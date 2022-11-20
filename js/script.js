const url = "https://rickandmortyapi.com/api/character";

const loaderAnimation = document.querySelector(".loader")
const resultsContainer = document.querySelector(".results");
const url = "https://rickandmortyapi.com/api/character";

async function callApi() {
    
    try {
        const response = await fetch(url);

        const info = await response.json();

        const details = info.results;
    
        console.log(details);

        resultsContainer.innerHTML = "";

        for(let i = 0; i < details.length; i++) {
            console.log(details[i].name)
            if(i === 12) {
                break;
            }

            resultsContainer.innerHTML += `<a href="details.html?id=${info.id}" class="result">
            <span><li>Name: ${details[i].name}</li></span>
            <span><li>Species: ${details[i].species}</li></span>
            <span><li>Status: ${details[i].status}</li></span>
            </a>`;
        }
        

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", error);
    }
}

function alert(alertType="success", message = "") {
    return `<div class="alert ${alertType}">${message}</div>`;
}

callApi();