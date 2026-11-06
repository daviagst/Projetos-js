const user = [{
    email: "teste@gmail.com",
    password: "12345678"
}]

let email = document.getElementById('email')
let password = document.getElementById('password')
let info = document.getElementById('info-erro')
const btn = document.querySelector('button')

const validarUser = () => {
    for(let i = 0; i < user.length; i++){
        if(email.value !== user[i].email || password.value !== user[i].password){
            info.innerHTML = "<p>Email ou senha incorretos!</p>"
            return false
        }else{
            alert("email e senha correto")
            return true
        }
    }
}

