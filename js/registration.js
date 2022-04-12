let passPattern= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/
let txtPass = document.getElementById('txtPass')
let passError=document.getElementById('passError')
let btnCheck =document.getElementById('btnCheck')
btnCheck.addEventListener('click',function(e){
    e.preventDefault();     
    if(passPattern.test(txtPass.value)){
        passError.textContent='Mật khẩu hợp lệ'
        passError.style.color='blue'
    }else{
       passError.textContent='Vui lòng nhập lại'
       passError.style.color='red'
    }
    })

let firstPattern= /[a-zA-Z0-9_]{2,20}/
let firstName = document.getElementById('firstName')
let firstError=document.getElementById('firstError')
btnCheck.addEventListener('click',function(e){
    e.preventDefault();     
    if(firstPattern.test(firstName.value)){
        firstError.textContent='Tên hợp lệ'
        firstError.style.color='blue'
    }else{
       firstError.textContent='Vui lòng nhập lại'
       firstError.style.color='red'
    }
    })
let lastPattern= /[a-zA-Z0-9_]{2,20}/
let lastName = document.getElementById('lastName')
let lastError=document.getElementById('lastError')
btnCheck.addEventListener('click',function(e){
    e.preventDefault();     
    if(lastPattern.test(lastName.value)){
        lastError.textContent='Tên hợp lệ'
        lastError.style.color='blue'
    }else{
        lastError.textContent='Vui lòng nhập lại'
        lastError.style.color='red'
    }
    })
let emailPattern= /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}\b/i
let txtEmail = document.getElementById('txtEmail')
let emailError = document.getElementById('emailError')
btnCheck.addEventListener('click',function(e){
    e.preventDefault();
    if(emailPattern.test(txtEmail.value)){
        emailError.textContent='Bạn có thể sử dụng email này'
        emailError.style.color='blue'
    }else{
        emailError.textContent='Email không hợp lệ'
        emailError.style.color='red'
        }
    })

let phonePattern= /[0-9]{5,11}/
let phoneNumber = document.getElementById('phoneNumber')
let phoneError = document.getElementById('phoneError')
btnCheck.addEventListener('click',function(e){
    e.preventDefault();
    if(phonePattern.test(phoneNumber.value)){
        phoneError.textContent='Bạn có thể sử dụng số điện thoại này'
        phoneError.style.color='blue'
    }else{
        phoneError.textContent='số điện thoại không hợp lệ'
        phoneError.style.color='red'
        }
    })
    
        