function cepMask() {
    let cep = document.getElementById("cep");

    cep.value = cep.value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
}

function phoneMask() {
    let phone = document.getElementById("telefone");

    phone.value = phone.value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
}

function ufMask() {
    let uf = document.getElementById("uf");

    uf.value = uf.value
        .replace(/[^a-z]/ig, '')

}

function numberMask() {
    let number = document.getElementById("numero");

    number.value = number.value
        .replace(/\D/g, '')
}

function isValidEmail (str){
    return /\S+@\S+.\S+/.test(str)
}