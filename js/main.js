//url 복사
const btnShare = document.querySelector('.btn_share button');
const currentUrl=window.location.href;

btnShare.addEventListener('click', function (){
  console.log('a');
  window.navigator.clipboard.writeText(currentUrl).then(() => {
    alert(`현재 URL ${currentUrl} 클립보드에 저장되었습니다.`);
  });
})

const letterList = document.querySelectorAll('.btn_letter');
const letterCount = letterList.length;
const letterCountText = document.querySelector('.sub_title span');

// 행복 갯수 카운팅
letterCountText.innerText = letterCount;

//행복 갯수 초과 알림
if(letterCount > 7) {
  alert('추가할 수 있는 쪽지의 갯수를 초과했습니다.');
}
