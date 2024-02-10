import {loadNewPage} from './modules.js';
const main = document.querySelector('main')

// (test용) write한 moments를 localstorage에 저장한 것
// let moments = [{ title: "title 1!", happiness: "😃", date: "2024. 01. 20", time: "12:35am", content: "my happy moment today...my happy moment today...my happy moment today..."},
// { title: "title 2!", happiness: "😃", date: "2024. 01. 20", time: "12:35am", content: "my happy moment today...my happy moment today...my happy moment today..."},
// { title: "title 3!", happiness: "😃", date: "2024. 01. 23", time: "12:35am", content: "my happy moment today...my happy moment today...my happy moment today..."},
// { title: "title 4!", happiness: "😃", date: "2024. 01. 21", time: "12:35am", content: "my happy moment today...my happy moment today...my happy moment today..."},
// { title: "title 5!", happiness: "😃", date: "2024. 01. 25", time: "12:35am", content: "국회에서 의결된 법률안은 정부에 이송되어 15일 이내에 대통령이 공포한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 대통령의 임기는 5년으로 하며, 중임할 수 없다. 대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다. 타인의 범죄행위로 인하여 생명·신체에 대한 피해를 받은 국민은 법률이 정하는 바에 의하여 국가로부터 구조를 받을 수 있다. 국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다. 국가는 여자의 복지와 권익의 향상을 위하여 노력하여야 한다. 대통령은 취임에 즈음하여 다음의 선서를 한다. 공무원의 직무상 불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여 국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이 경우 공무원 자신의 책임은 면제되지 아니한다. 탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다. 모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. 혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다. 국군의 조직과 편성은 법률로 정한다."}]
// localStorage.setItem("moments", JSON.stringify(moments))
const moments = JSON.parse(localStorage.getItem("moments"))

moments.forEach(moment => {
    const wrapper = document.createElement('div') // div : wrapper(text-title, text-cnt, text-datetime)
    const textTitle = document.createElement('div') // text-title
    const textCnt = document.createElement('div') // text-cnt
    const textDateTime = document.createElement('div') // text-datetime : wrapper(happiness, date, time)
    const happiness = document.createElement('span') // happiness
    const textDate = document.createElement('span') // text-date
    const textTime = document.createElement('span') // text-time
    main.append(wrapper)
    wrapper.append(textTitle, textCnt, textDateTime)
    textDateTime.append(happiness, textDate, textTime)
    textTitle.classList.add('text-title')
    textCnt.classList.add('text-cnt')
    textDateTime.classList.add('text-datetime')
    textDate.classList.add('text-date')
    textTime.classList.add('text-time')
    textTitle.textContent = moment.title
    happiness.textContent = moment.happiness+' '
    textDate.textContent = moment.date+' '
    textTime.textContent = moment.time
    textCnt.textContent = moment.content
});

const homeBtn = document.getElementById('home-btn')
const loginBtn = document.getElementById('login-btn')
const registerBtn = document.getElementById('register-btn')
const writeBtn = document.getElementById('write-btn')
const backBtn = document.getElementById('back-btn')

homeBtn.addEventListener('click',()=>{
    loadNewPage('settings')
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
backBtn.addEventListener('click',()=>{
    loadNewPage('main')
})