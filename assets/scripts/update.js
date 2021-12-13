function updateUser (btn) {
    let id = btn.getAttribute("userId");
    let btn1 = document.getElementById("btn1");
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://estagio.eficazmarketing.com/api/user/' + id)

    xhr.setRequestHeader('content-Type', 'application/json;charset=UTF-8');

    xhr.onload = () => {
        let res = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            invisible(btn1);

            let form = document.querySelectorAll("#form input");
        
            form.forEach( input => {
                input.value = res[input.id];
            })

            let formBtn = document.getElementById("form-btn");
            formBtn.setAttribute("onclick", "update(this)");
            formBtn.setAttribute("userId", id);
            formBtn.innerHTML = "Editar";
        }else {
            console.log(res);
        }
    }

    xhr.send()
}

function update (btn) {
    event.preventDefault();
    let form = document.querySelectorAll("#form input")
    let id = btn.getAttribute("userId");

    let userData = {}

    let err = "";

    form.forEach( input => {
        userData[input.id] = input.value;
    })

    for (const [key, value] of Object.entries(userData)) {
        if (value == "" && key != 'bairro' && key != 'complemento'){
            err = `O campo ${key} deve ser preenchido! `;
            break;
        } else if (key == "email" && value != "" && !isValidEmail(value) || key == "seu_email" && value != "" && !isValidEmail(value)) {
            err = `Digite um email válido!`;
            break;
        }
    }

    if (err != "") {
        document.getElementById('err').innerHTML = err;
    } else {
        fetch("https://estagio.eficazmarketing.com/api/user/" + id,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(userData)
        })
        .then(function(res){ document.location.reload(true); })
        .catch(function(err){ console.log(err) })
    }
}