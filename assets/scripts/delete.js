function deleteUser (btn) {
    let xhr = new XMLHttpRequest();
    let id = btn.getAttribute("userId");

    xhr.open("DELETE", 'https://estagio.eficazmarketing.com/api/user/' + id, true);

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.send();
    
    let tbody = document.getElementById('tableBody');

    tbody.innerHTML = '';
    
    list()
}