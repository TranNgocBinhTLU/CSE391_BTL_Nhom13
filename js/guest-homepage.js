let comment = /[A-Za-z0-9!-?]/g
let txtComment = document.getElementById('txtComment')
let commentError=document.getElementById('commentError')
let namePattern=/[A-Za-z]{2,20}/g
let txtName = document.getElementById('txtName')
let nameError=document.getElementById('nameError')
let emailPattern= /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}\b/i
let txtEmail = document.getElementById('txtEmail')
let emailError = document.getElementById('emailError')
let btnCheck =document.getElementById('btnCheck')

btnCheck.addEventListener('click',function(e){
    e.preventDefault();
    if(emailPattern.test(txtEmail.value)){
        emailError.textContent='Bạn có thể sử dụng email này'
        emailError.style.color='blue'
    }else{
        emailError.textContent='Email không hợp lệ'
        emailError.style.color='red'
    }
    if(namePattern.test(txtName.value)){
        nameError.textContent='Tên hợp lệ'
        nameError.style.color='blue'
    }else{
        nameError.textContent='Vui lòng nhập lại'
        nameError.style.color='red'
        }
    if(comment.test(txtComment.value)){
        commentError.textContent='Bạn đã bình luận'
        commentError.style.color='blue'
    }
})
// 
