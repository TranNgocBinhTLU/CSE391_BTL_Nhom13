let namePattern=/[admin]{2,20}/
let txtName = document.getElementById('txtName')
let nameError=document.getElementById('nameError')
let btnCheck =document.getElementById('btnCheck')
btnCheck.addEventListener('click',function(e){
    e.preventDefault();     
    if(namePattern.test(txtName.value)){
        nameError.textContent='Tên hợp lệ'
        nameError.style.color='blue'
    }else{
        nameError.textContent='Vui lòng nhập lại'
        nameError.style.color='red'
    }
     })

let passPattern= /[admin]{2,20}/
let txtPass = document.getElementById('txtPass')
let passError=document.getElementById('passError')
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
               
     