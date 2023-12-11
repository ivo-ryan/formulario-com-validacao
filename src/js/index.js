const form = document.getElementById("form");
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    numberValidate();
    messageValidate();
})

const setError = (index) => {
    campos[index].style.borderColor = ' #e63636';
    spans[index].style.display = 'inline-block'
}

const setValid = (index) => {
    campos[index].style.borderColor = 'green '
    spans[index].style.display = 'none'
}

const nameValidate = () => {
    if (campos[0].value.length < 5 ) {
        setError(0);
    }else{
        setValid(0)
    }
}

const emailValidate = () => {
    if (!emailRegex.test(campos[1].value)) {
        setError(1)
    }else{
        setValid(1)
    }
}

const numberValidate = () => {
    if (campos[2].value !== typeof "number"  ) {
        setError(2)
    }

    if (campos[2].value.length >= 9) {
        setValid(2)
    }
    
    if(campos[2].value.length >= 12) {
        setError(2)
    }

}

const messageValidate = () => {
    if (campos[3].value.length < 50) {
        setError(3)
    } else {
        setValid(3)
    }
}


