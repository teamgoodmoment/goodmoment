import {loadNewPage} from './modules.js';
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById("content");
    const homeBtn = document.getElementById('home-btn')
    const loginBtn = document.getElementById('login-btn')
    const registerBtn = document.getElementById('register-btn')
    const writeBtn = document.getElementById('write-btn')
    let id = localStorage.getItem("id")
    let moments = localStorage.getItem(`${id}moments`).length == 0 ? [] : JSON.parse(localStorage.getItem(`${id}moments`));

    form.addEventListener('submit', function(event){
        event.preventDefault()
        let currentLetters = moments.length
        const maxLetters = localStorage.getItem(`${id}maxLetters`);

        if (currentLetters < maxLetters){
            const date = form.elements['date'].value;
            const formData = {
                title: form.elements['title'].value,
                date: date,
                happiness: form.elements['emotion'].value,
                content: form.elements['content'].value
            }

            moments.push(formData)

            let id = localStorage.getItem("id")

            localStorage.setItem(`${id}moments`, JSON.stringify(moments));
            localStorage.setItem(`${id}currentLetters`, JSON.stringify(moments.length))
            alert("쪽지가 저장되었습니다.")
            window.location.href = "./main.html";

        } else{
            alert('유리병이 다 찼습니다.')
            window.location.href = "./main.html";
        }
        
    })
    homeBtn.addEventListener('click',()=>{
        loadNewPage('main')
    })
    loginBtn.addEventListener('click',()=>{
        loadNewPage('login')
    })
    registerBtn.addEventListener('click',()=>{
        loadNewPage('register')
    })
    writeBtn.addEventListener('click',()=>{
        loadNewPage('write')
    })
})



