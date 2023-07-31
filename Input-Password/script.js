const $ = document
const eye = $.querySelector('.fa-eye')
const inputPassword = $.querySelector('.input_password')
const label = $.querySelector('.label')
const container = $.querySelector('.container')

eye.addEventListener('click', function () {
    if (inputPassword.type === "password") {
        eye.classList.remove('fa-eye')
        eye.classList.add('fa-eye-slash')
        inputPassword.type = 'text'
    } else {
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
        inputPassword.type = 'password'
        
    }
})

inputPassword.addEventListener('click',function(){
    label.style.top = '27px'
    label.style.left = '27px'
})
