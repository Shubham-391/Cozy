let hide = document.querySelector(".hide");
// preloader
const preloader = document.getElementById("preloader")
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
}, 2000)

function phase(evt, Id) {
    let box3 = document.querySelectorAll(".box3");
    document.getElementById(Id).classList.remove("d-none");
    hide.classList.add("d-none");
}

function show(evt, Id) {
    let box3 = document.querySelectorAll(".box3");
    document.getElementById(Id).classList.add("d-none");
    hide.classList.remove("d-none");
}

