let hide = document.querySelector(".hide");

function phase(evt, Id) {
    let box3 = document.querySelectorAll(".box3");
    document.getElementById(Id).classList.remove("d_none");
    hide.classList.add("d_none");
}

function show(evt, Id) {
    let box3 = document.querySelectorAll(".box3");
    document.getElementById(Id).classList.add("d_none");
    hide.classList.remove("d_none");
}

