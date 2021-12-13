function register() {
    event.preventDefault();
    let form = document.querySelectorAll("#form input")

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
        fetch("https://estagio.eficazmarketing.com/api/user",
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(userData)
        })
        .then(function(res){ document.location.reload(true); })
        .catch(function(err){ console.log(err) })
    }
}