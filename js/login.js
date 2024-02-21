document.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('content');

  form.addEventListener('submit', function(event){
    event.preventDefault();

    let id = document.querySelector('input[name="id"]').value;
    let password = document.querySelector('input[name="password"]').value;

    localStorage.setItem("id", id)

    let storedUserData = JSON.parse(localStorage.getItem(`${id}userData`));

    console.log(localStorage)

    if (storedUserData) {
      //가입 한 적이 있는 경우
      if (id === storedUserData.id && password === storedUserData.password) {
        //로그인 성공 시 해당 유저로 세팅정보 Date, time 가져오기
        let openingDate = localStorage.getItem(`${id}openingDate`);
        let openingTime = localStorage.getItem(`${id}openingTime`);

        if (openingDate === null || openingTime === null) {
          //세팅을 안했으면 세팅 페이지로 이동
          window.location.href = './settings.html';
          return; 
        } else {
          //세팅이 되어있으면 메인 페이지로 이동
          window.location.href = './main.html';
        }
      } else {
        //유저 로그인 정보 검사
        alert('아이디 또는 비밀번호가 잘못되었습니다. 다시 입력해주세요.');
      }
    } else {
      //가입한 적이 없는 경우
      if(confirm('가입하지 않은 계정입니다. 회원가입 페이지로 이동하시겠습니까?')) {
        window.location.href = './register.html'
      } else {
        //유저가 취소한 경우
      }
    }
  });
});