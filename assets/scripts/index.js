function invisible(ev) {
    let register = document.getElementById('register');
    let list = document.getElementById('list');
    
    toggleClass(register, "invisible");
    toggleClass(list, "invisible");

    disableButton(ev);
}

function toggleClass(element, className) {
    element.classList.toggle(className);
}

function disableButton(ev) {
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');

    toggleClass(btn1, "activated");
    toggleClass(btn2, "activated");

    if (ev == btn1) {
        btn1.setAttribute("disabled", true);
        btn2.removeAttribute("disabled");
    } else {
        btn2.setAttribute("disabled", true);
        btn1.removeAttribute("disabled");
    }
}