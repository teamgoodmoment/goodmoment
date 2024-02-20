document.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('content');

  form.addEventListener('submit', function(event){
    event.preventDefault();

    let id = document.querySelector('input[name="id"]').value;
    let password = document.querySelector('input[name="password"]').value;

    localStorage.setItem("id", id)

    let storedUserData = JSON.parse(localStorage.getItem(`${id}userData`));

    console.log(localStorage)

    if (storedUserData && id === storedUserData.id && password === storedUserData.password) {
      //쪽지 가져오기
      //let currentLetters = localStorage.getItem('currentLetters');

      //쪽지 여부 확인해서 페이지 이동
      // if (currentLetters === null || parseInt(currentLetters) === 0){
      //   window.location.href = './settings.html';
      // } else {
      //   window.location.href = './main.html;
      // }

      
      //세팅 Date, time 가져오기
      let openingDate = localStorage.getItem(`${id}openingDate`);
      let openingTime = localStorage.getItem(`${id}openingTime`);

      if (openingDate === null || openingTime === null) {
          //세팅이 안 되어 있으면 세팅 페이지로 이동
          window.location.href = './settings.html';
          return; 
      }
      //세팅이 되어있으면 메인 페이지로 이동
     window.location.href = './main.html';
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다. 다시 입력해주세요.');
    }
  });
});