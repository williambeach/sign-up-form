const formInputs = document.querySelectorAll("input");
const progressCircle = document.querySelector(".progress-circle");
const messageBox = document.querySelector(".message");


let numValid = 0;
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('change', () => {
        if (formInputs[i].validity.valid) {
            numValid++;
        } 
        if (formInputs[i].value == "") {
            numValid--;
            
        }
    
        if (numValid == 0) {
            progressCircle.className = 'progress-circle'
        } else if (numValid == 1) {
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


function check_pass() {
    if (document.getElementById('password').value ==
    document.getElementById('confirmPassword').value && 
    document.getElementById('password').value !== "" && 
    document.getElementById('confirmPassword').value !== "") {
        document.getElementById('button').disabled = false;
        messageBox.className = "passwords-ok";
    } else {
        document.getElementById('button').disabled = true;
        messageBox.className = "error-message";
    }
}


