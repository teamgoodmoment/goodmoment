document.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('content');

  form.addEventListener('submit', function(event){
    event.preventDefault();

    let id = document.querySelector('input[name="id"]').value;
    let password = document.querySelector('input[name="password"]').value;

    let storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && id === storedUserData.id && password === storedUserData.password) {
      window.location.href = './main.html';
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다. 다시 입력해주세요.');
    }
  });
});