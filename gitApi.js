const btn = document.querySelector('.btn')
const userImg = document.querySelector('.userImg')
const userName = document.querySelector('.userName')
const userDate = document.querySelector('.userDate')

const fetchData = function() {
    const xhr = new XMLHttpRequest();
    
  
    xhr.open("GET", "https://api.github.com/users/ringcoa", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const json = JSON.parse(xhr.response)
        
        userImg.innerHTML = `<img src="${json.avatar_url}" alt="">`
        userName.innerHTML = `유저 이름 - ${json.login}`
        userDate.innerHTML = `생성날짜 - ${json.created_at}`
      }
    };
    xhr.send();
  }

  btn.addEventListener('click',fetchData)