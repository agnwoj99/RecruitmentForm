const firstName = document.getElementById('name')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const minValue = 3;
const letters = /[a-z]/i;

const showMsg = () => {
    if (firstName.value.length <= minValue && firstName.value.match(letters)) {
        firstName.style.color = "red";
            
    } else if (firstName.value.length > minValue) {
        firstName.style.color = ''
    }
}

const checkData = () => {
    if (firstName.value !== '') {
        showMsg()
    }
}

firstName.addEventListener('keyup', checkData)