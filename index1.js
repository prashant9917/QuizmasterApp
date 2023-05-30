const a = document.getElementById("nm");
const b = document.getElementsByClassName("b1");

function UserName() {
    b.value = prompt("Enetr Your Costum/Nick Name");
    a.innerHTML = b.value;

}