const formInputs = document.querySelectorAll("input");
const progressCircle = document.querySelector(".progress-circle");
let numValid = 0;
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('change', () => {
        if (formInputs[i].validity.valid) {
            numValid++;
        }
        if (numValid == 1) {
            progressCircle.className = 'progress-one';
        } else if (numValid == 2) {
            progressCircle.className = 'progress-two';
        } else if (numValid == 3) {
            progressCircle.className = 'progress-three';
        } else if (numValid == 4) {
            progressCircle.className = 'progress-four';
        } else if (numValid == 5) {
            progressCircle.className = 'progress-five';
        } else if (numValid == 6) {
            progressCircle.className = 'progress-six';
        }
    });
}





