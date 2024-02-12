document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById("content");

    form.addEventListener('submit', function(event){
        event.preventDefault()

        const date= form.elements['date'].value;

        const formData = {
            title: form.elements['title'].value,
            date: date,
            emotin: form.elements['emotion'].value,
            content: form.elements['content'].value
        }


        localStorage.setItem('formData_' + date, JSON.stringify(formData));
        alert("쪽지가 저장되었습니다")
    })

    form.addEventListener('reset', function(){
        const date= form.elements['date'].value;
        localStorage.removeItem(`formData_${date}`)
        alert("쪽지가 삭제되었습니다.")
    })

})



