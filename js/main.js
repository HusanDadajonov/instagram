let elSearchInp = document.querySelector(".form__search-inp");
let elSearchIcon = document.querySelector(".form__search-icon");
let elFormCloseBtn = document.querySelector(".form__close-btn");
let elFormLoadingGif = document.querySelector(".form__loading-gif");
let elSeeVideoBtn = document.querySelector(".header__btn--see-video");
let elFormPrev = document.querySelector(".form__prev");
let elForm = document.querySelector(".form");
let elAccountsList = document.querySelector(".accounts__list");
let elSliderRightBtn = document.querySelector(".accounts__slider-btn--right");
let elSliderLeftBtn = document.querySelector(".accounts__slider-btn--left");
let elSuggestionsList = document.querySelector(".suggestions__list");
let elPostList = document.querySelector(".post__list");
let count = 0;
let sum = 0;
let responsive = window.matchMedia("(max-width: 560px)");

function slider(val){

    if(val)sum++;
    else sum--;
    let items = document.querySelectorAll(".accounts__item");
    items.forEach(item => {
        item.style.transform = `translateX(-${sum * 380}%)`;
        if(!val && item.style.transform == "translateX(0%)"){
            elSliderRightBtn.style.display = "flex";
            elSliderLeftBtn.style.display = "none";
        }
        if(responsive.matches)item.style.transform = `translateX(-${sum * 125}%)`;
    })

    if(val && !responsive.matches)count+=3;
    else if(!val && !responsive.matches) count-=3;
    else if(val && responsive.matches) count+=1;
    else if(!val && responsive.matches) count-=1;

    if(val && count >= items.length - 6 && !responsive.matches){
        elSliderRightBtn.style.display = "none";
        elSliderLeftBtn.style.display = "flex"
    }
    else if(count >= items.length - 5 && responsive.matches){
        console.log(count);
        elSliderRightBtn.style.display = "none";
        elSliderLeftBtn.style.display = "flex";
    }
}
for(let i = 0; i < 7; i++){
    elPostList.innerHTML = elPostList.innerHTML + `  <li class="post__item">
    <div class="post__account">
      <div class="post__account-box">
        <button class="post__account-btn accounts__btn"><img class="post__account-img" src="${accountInfoArr[i + 2].img}" alt="me-img"></button>
        <div class="post__texts">
          <a class="post__account-name" href="#">${accountInfoArr[i+2].accName}</a>
          <a class="post__tags" href="#">${postArr[i].tag}</a>
        </div>
      </div>
      <button class="post__btn"><svg aria-label="Дополнительно" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></button>
    </div>
    <div class="post__slider">
      <div class="post__slider-item">
        <img class="post__like-gif" src="img/like-gif.gif" alt="like-gif">
        <img class="post__slider-img" src="${postArr[i].img}" alt="post__slider-img">
      </div>
    </div>
    <div class="post__btns">
      <div class="post__btns-box">
        <button class="post__btn-bottom post__btn-bottom--like"><svg aria-label="Нравится" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></button>
        <button class="post__btn-bottom post__btn-bottom--comment"><svg aria-label="Комментировать" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg></button>
        <button class="post__btn-bottom post__btn-bottom--share"><svg aria-label="Поделиться публикацией" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg></button>
      </div>
      <button class="post__btn-save"><svg aria-label="Сохранить" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></button>
    </div>
    <div class="post__likes">
      <p class="post__like-count"><span>343</span>likes</p>
      <div class="post__texts-box">
        <div class="row middle-xs">
          <a class="post__like-name" href="#">${accountInfoArr[i+2].accName}</a>
          <p class="post__desc">Imperdiet in sit rhoncus, eleifend daw tellus augue lectus potenti pellentesque</p>
        </div>
        <button class="post__desc-more">more</button>
      </div>
      <button class="post__view-comments">View all 100 comments</button>
      <time class="post__time">1 hour ago</time>
      <form class="post__form" action="https://echo.htmlacademy.ru/" method="post">
        <button class="post__smile-btn"><svg aria-label="Смайлик" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg></button>
        <label class="post__label" for="comment">
          <input class="post__inp" type="text" name="comment" id="comment" placeholder="Add a comment..." autocomplete="off">
        </label>
        <button class="post__send-comment-btn">post</button>
      </form>
    </div>
  </li>`
}

for(let i = 2; i <= 6; i++){elSuggestionsList.innerHTML = elSuggestionsList.innerHTML + `<li class="suggestions__item"><button class="suggestions__btn"><img class="suggestions__img" src="${accountInfoArr[i].img}" alt="me-img"></button><div class="suggestions__texts-box2"><a class="suggestions__user-name" href="#">${accountInfoArr[i].accName}</a><p class="suggestions__followed">${accountInfoArr[i].followed}</p></div><button class="suggestions__follow-btn">follow</button></li>`}

accountInfoArr.forEach(item => elAccountsList.innerHTML = elAccountsList.innerHTML + `<li class="accounts__item"><button class="accounts__btn"><img src="${item.img}" alt=""></button><p class="accounts__name">${item.accName}</p></li>`);

elForm.addEventListener("submit", e => e.preventDefault());
document.querySelector(".post__form").addEventListener("submit", e=> e.preventDefault())

elSeeVideoBtn.addEventListener("click", ()=> elForm.style.transform = "translateY(0%)");

elFormPrev.addEventListener("click", ()=> elForm.style.transform = "translateY(-150%)");

elSearchInp.addEventListener("focus", ()=> {
    elSearchIcon.style.display = "none";
    elFormCloseBtn.style.display = "flex";
});

elSearchInp.addEventListener("blur", ()=> {
    elSearchIcon.style.display = "flex";
    elFormCloseBtn.style.display = "none";
    elSearchInp.value = "";
});

elSearchInp.addEventListener("keyup", () => {
    if(elSearchInp.value != ""){
        elFormLoadingGif.style.opacity = "1";
        elFormCloseBtn.style.opacity = "0";
        
        setTimeout(()=> {
            elFormLoadingGif.style.opacity = "0";
            elFormCloseBtn.style.opacity = "1";
        },700)
    }
});

document.querySelectorAll(".post__inp").forEach(item => {
    item.addEventListener("keyup", (e)=> {
        if(e.target.value != "")e.target.parentElement.parentElement.querySelector(".post__send-comment-btn").style.opacity = "1";
        else if(e.target.value == "")e.target.parentElement.parentElement.querySelector(".post__send-comment-btn").style.opacity = "0.3";
    })
})



document.querySelectorAll(".post__slider-item").forEach(item => {
    item.addEventListener("dblclick", e =>{
        e.target.parentElement.querySelector(".post__like-gif").style.visibility = "visible";
        setTimeout(()=> {
            e.target.parentElement.querySelector(".post__like-gif").style.visibility = "hidden";
        }, 2000)
        like(e.target.parentElement.parentElement.parentElement);
    })
})

function like(item){
    item.querySelector(".post__btn-bottom--like").innerHTML = `<svg aria-label="Не нравится" class="_8-yf5 " color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`;
    let elLikeCount = Number(item.querySelector(".post__like-count span").textContent);
    elLikeCount +=1;
    item.querySelector(".post__like-count span").textContent = elLikeCount; 
}


document.querySelector(".header__btn--account").addEventListener("click", ()=> {
  document.querySelector(".contents").style.display = "none";
  document.querySelector(".content-post").style.display = "block";
  document.querySelector(".header__btn--home").innerHTML = `<svg aria-label="Главная страница" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>`;
})

document.querySelector(".header__btn--home").addEventListener("click", ()=> {
  document.querySelector(".contents").style.display = "block";
  document.querySelector(".content-post").style.display = "none";
  document.querySelector(".header__btn--home").innerHTML = `<svg aria-label="Главная страница" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path></svg>`;
})









