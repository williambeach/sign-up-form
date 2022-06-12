const formInputs = document.querySelectorAll("input");
let numValid = 0;
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('keyup', () => {
        if (this.validity.valid) {
            numValid++;
        }
    });
}





