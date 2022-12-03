const form = document.querySelector("form")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")


function showError (input , message) {
    const formControl = input.parentElement;
    formControl.className ='form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}   




function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control succes'
}

//check email is valid

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if  (re.test(input.value.trim())) {
        showSucces(input)
    } else{
        showError(input, 'Email is not invalid');
    }
}


// checkRequired fields 

function checkRequired (inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === ""){
            showError(input, `${getFieldName(input)}is required`);
        } else {
            showSucces(input)
        }
    });
}

//check input Length

function checkLength(input, min , max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)}must be at least ${min} characters` 
        );
    }  else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be les than ${max} characters`)
    } else {
        showSucces(input);
    }
}

// get FieldName

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// check passwords match 
function checkPasswordMatch (input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "passwords do not match");
    }
}

//Event Listeners


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkRequired([email, firstName , lastName , password]);
    checkLength(firstName, 3 , 20);
    checkLength(lastName, 3 , 20);
    checkLength(password, 6 ,25);
    checkEmail(email);
})  ;
