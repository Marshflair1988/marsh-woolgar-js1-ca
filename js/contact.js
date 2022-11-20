const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#streetError");
const town = document.querySelector("#town");
const townError = document.querySelector("#townError");
const postCode = document.querySelector("#postcode");
const postCodeError = document.querySelector("#postcodeError");
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");


function validateForm() {
    event.preventDefault();


    if(checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if(checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if(checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(checkLength(email.value, 3) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLength(address.value, 25) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if(checkLength(town.value, 0) === true) {
        townError.style.display = "none";
    } else {
        townError.style.display = "block";
    }

    if(checkLength(postCode.value, 3) === true) {
        postCodeError.style.display = "none";
    } else {
        postCodeError.style.display = "block";
    }

    if(checkLength(country.value, 0) === true) {
        countryError.style.display = "none";
    } else {
        countryError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    
    console.log("hello");
}


form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }

}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}