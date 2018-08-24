tally = 0;

function operate() {
    document.getElementById("expression").value =
        eval(document.getElementById("expression").value);
}

function input(e) {
    if (this.id !== "cle" && this.id !== "equ") {
        document.getElementById("expression").value =
            document.getElementById("expression").value + this.value;
    } else if (this.id === "cle" &&
        document.getElementById("expression").value !== '') {
            document.getElementById("expression").value = '';
    } else if (this.id === "cle") {
        tally = 0;
    } else if (this.id === "equ") {
        operate();
    }
}

var buttons = document.getElementsByClassName("press");
var operators = document.getElementsByClassName("op");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', input);
}