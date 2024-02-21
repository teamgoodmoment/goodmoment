document.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('content');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      let nickname = document.querySelector('input[name="nickname"]').value;
      let id = document.querySelector('input[name="id"]').value;
      let password = document.querySelector('input[name="password"]').value;
      let retypePassword = document.querySelector('input[name="retype-password"]').value;

      if (nickname.length > 10) {
          alert('닉네임은 10자 이하여야 합니다.');
          return;
      }
      
      let idCheck = /^[a-z0-9]{4,20}$/;
      if (!idCheck.test(id)) {
          alert('ID는 영소문자와 숫자 4~20자 이하여야 합니다.');
          return;
      }

      if (password.length < 5) {
          alert('비밀번호는 6자 이상이어야 합니다.');
          return;
      }

      if (password !== retypePassword) {
          alert('비밀번호가 일치하지 않습니다.');
          return;
      }

      let userData = {
          nickname: nickname,
          id: id,
          password: password
      };

      localStorage.setItem(`${id}userData`, JSON.stringify(userData));

      alert('회원가입이 완료되었습니다!');

      window.location.href = "./login.html";
  });
});
