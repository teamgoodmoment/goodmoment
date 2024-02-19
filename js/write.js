document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById("content");
    let moments = JSON.parse(localStorage.getItem('moments')) || [];

    form.addEventListener('submit', function(event){
        event.preventDefault()
        let currentLetters = moments.length
        const maxLetters = localStorage.getItem("maxLetters");

        if (currentLetters < maxLetters){
            const date = form.elements['date'].value;
            const formData = {
                title: form.elements['title'].value,
                date: date,
                happiness: form.elements['emotion'].value,
                content: form.elements['content'].value
            }

            moments.push(formData)

            localStorage.setItem('moments', JSON.stringify(moments));
            localStorage.setItem('currentLetters', JSON.stringify(moments.length))
            alert("쪽지가 저장되었습니다.")
            window.location.href = "./main.html";

        } else{
            alert('유리병이 다 찼습니다.')
            window.location.href = "./main.html";
        }
        
    })

})



