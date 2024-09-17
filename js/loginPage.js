const eyeLogin = document.getElementById('eyes')

const controlPass = document.getElementById('password')

function showPassword() {
    if (controlPass.attributes[0].value == 'password') {
        controlPass.setAttribute('type', 'text')
        eyeLogin.className = 'bx bx-show'
        
    }else{
        controlPass.setAttribute('type', 'password')
        eyeLogin.className = 'bx bx-low-vision'
    }
}
