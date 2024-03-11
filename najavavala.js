//이벤트 함수 1 - 빈 공간을 클릭하면 하트 생성
let p;
let heart_number = 0;
        //1) 클릭-> clicking 함수 실행
function heart() {
    p = document.addEventListener("click", clicking);
}
        //2) 클릭-> 마우스 위치에 따라 하트 이미지 생성
function clicking(e) {
    var img = document.createElement("img");
    img.src = "glassheart.png";
    img.style.position = "absolute";
    img.style.width = "30px";
    img.style.height = "30px"; 
    img.style.left = (e.clientX -10 ) + "px";
    img.style.top = (e.clientY -10 ) + "px";
    img.style.left = (e.clientX - 10) + "px";
    img.style.top = (e.clientY + window.scrollY - 10) + "px";
    document.body.appendChild(img);
        //클릭-> 하트 개수 증가
    heart_number += 1;
    heart_num();
}
        //3) 하트 개수를 출력하는 함수
let h;
function heart_num() {
    h = document.getElementById("number");
    h.innerHTML = heart_number;
}

//이벤트 함수 2 - 덩어리에 mousever, mouseout시 색상 바뀌기
let w;
function init(){
    w = document.getElementsByClassName("divSt");

    for (let i = 0; i < w.length; i++) {
        w[i].addEventListener("mouseover", over);
        w[i].addEventListener("mouseout", out);
      }
}
function over(){
    this.style.background = "linear-gradient(to bottom, rgba(99, 127, 178, 0.373), rgba(230, 243, 255, 0.274))";
    }
function out(){
    this.style.background = "linear-gradient(to bottom, rgba(154, 193, 245, 0.373), rgba(230, 243, 255, 0.274))";
}

//이벤트 함수 3 - glow버튼 누르면 glow 효과 발생시키기
  //1) glow 버튼 클릭 시 함수 실행 (jquery)
$('#glow').on('click', function() {
  var element = $('.target');
  fadeOutAndIn(element);
  }
);
      
  //2) fadein, fadeout 2초 간격으로 반복 실행
function fadeOutAndIn(elements) {
  setInterval(
    function () {
      elements.fadeOut('slow', function () {
        elements.fadeIn('slow');
        }
      );
    }, 2000);
}
        
//이벤트 함수 4 - star 버튼 누르면 별 100개 생성
  //1) star 버튼 클릭 시 함수 실행 (jquery)
$('#star').on('click', function() {
  var elements = $('.target');
  makeStar(elements);
  }
);
  //2) 별 100개가 body 태그 내에 랜덤부여됨
function makeStar(elements) {
  for (let i = 0; i < 100; i++) {
    let div = $("<div class='target'></div>");
    let xPos = Math.random() * ($(document).width() - 100);
    let yPos = Math.random() * ($(document).height() - 100);
    div.css({ position: 'absolute', left: xPos, top: yPos });
    $('body').append(div);
  }
}



//순수함수 1 - <p>태그 안의 글자수 세기
function countingStr(pTag) {
  const text = pTag.textContent;
  return text.length;
}
const pTag = document.querySelector('p');
const chaCount = countingStr(pTag);
console.log('글자 수:', chaCount);

//순수함수 2 - 글자를 자르는 함수
function sliceStringFive (str) {
  return str.substring(0, 5);
};
const str = 'Hello, My name is Minhye';
sliceStringFive(str);

console.log(str);
console.log(sliceStringFive(str));

//순수함수 3 - 전화번호 뒷자리를 출력하는 함수
phoneNumber = ["010","6830","8380"];
function printArr(arr) {
  return arr[2];
}
console.log(printArr(phoneNumber));


//이벤트 함수 - 다음 버튼 누르면 다음 사진으로 가는 함수
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function scrollToNext() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
    carouselContainer.style.transition = 'none';
    carouselContainer.style.transform = `translateX(0)`;
    setTimeout(() => {
      carouselContainer.style.transition = 'transform 0.3s ease-in-out';
    }, 0);
  } else {
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}