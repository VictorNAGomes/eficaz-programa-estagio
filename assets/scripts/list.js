function list() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://estagio.eficazmarketing.com/api/user')

    xhr.setRequestHeader('content-Type', 'application/json;charset=UTF-8');

    xhr.onload = () => {
        let res = JSON.parse(xhr.responseText);
        
        if (xhr.readyState == 4 && xhr.status == "200") {
            res.reverse();
            let tbody = document.getElementById('tableBody');

            res.forEach (resData => {
                let tr = document.createElement('tr');
                let userId = resData.id;
                tr.setAttribute("userId", userId);
                let userData = {
                    nome: '',
                    email: '',
                    endereco: '',
                    telefone: ''
                }
                for (const [key, value] of Object.entries(resData)) {
                    if (key == 'nome' || key == 'email' || key =='telefone'){
                        userData[key] = value;
                    }
                    if ( value != null && key == 'complemento' || value != null && key == 'bairro' || key == 'cep' || key == 'cidade') {
                        userData.endereco = `${userData.endereco}<br />${value}`;
                    } else if ( key == 'numero') {
                        userData.endereco = `${userData.endereco}, ${value}`;
                    } else if (key == 'rua') {
                        userData.endereco += value;
                    } else if (key == 'uf') {
                        userData.endereco += '-' + value;
                    }
                }

                for (const [key, value] of Object.entries(userData)) {
                    let td = document.createElement('td');
                    td.innerHTML = value;
                    if (key == 'nome')
                    td.classList.add('first');
                    tr.appendChild(td);
                }

                let div = document.createElement('div');
                let tdAction = document.createElement('td');
                let btn1 = document.createElement('button');
                let btn2 = document.createElement('button');
                tdAction.classList.add('last');

                btn1.innerHTML = 'Alterar';
                btn2.innerHTML = 'Excluir';
                
                btn1.classList.add('listBtn', 'update');
                btn2.classList.add('listBtn', 'delete');
                
                btn1.setAttribute("onclick", "updateUser(this)");
                btn1.setAttribute("userId", userId);
                btn2.setAttribute("onclick", "deleteUser(this)");
                btn2.setAttribute("userId", userId);

                div.classList.add('buttons', 'flex');

                div.appendChild(btn1);
                div.appendChild(btn2);
                tdAction.appendChild(div);
                tr.appendChild(tdAction);
                tbody.appendChild(tr);
            });
        } else {
            console.log(res);
        }
    }

    xhr.send();
}

list();