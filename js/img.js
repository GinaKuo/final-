let currentIndex = 0;

function changeSlide(direction) {
  const carousel = document.getElementById('carousel');
  const totalSlides = document.querySelectorAll('#carousel img').length;
  const slideWidth = document.getElementById('carousel-container').offsetWidth;

  // 計算下一個索引
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  // 設定transform屬性以移動跑馬燈
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

var aboutImage = document.getElementById("m1");

  // 添加點擊事件處理器
  aboutImage.addEventListener("click", function() {
    // 在這裡使用 window.location.href 跳轉到目標網頁
    window.location.href = "introduction.html";
});

  var aboutImage = document.getElementById("m2");

  // 添加點擊事件處理器
  aboutImage.addEventListener("click", function() {
    // 在這裡使用 window.location.href 跳轉到目標網頁
    window.location.href = "introduction 2.html";
});
  var aboutImage = document.getElementById("m3");

  // 添加點擊事件處理器
  aboutImage.addEventListener("click", function() {
    // 在這裡使用 window.location.href 跳轉到目標網頁
    window.location.href = "introduction 3.html";
});