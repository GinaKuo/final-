function addHoverEffect(elementId, hoverElementId1, hoverElementId2) {
    var element = document.getElementById(elementId);
    var hoverElement1 = document.getElementById(hoverElementId1);
    var hoverElement2 = document.getElementById(hoverElementId2);
  
    function handleMouseover() {
      if (window.innerWidth > 768) {
        hoverElement1.style.display = 'block';
        hoverElement2.style.display = 'block';
      }
    }
  
    function handleMouseout() {
      if (window.innerWidth > 768) {
        hoverElement1.style.display = 'none';
        hoverElement2.style.display = 'none';
      }
    }
  
    element.addEventListener('mouseover', handleMouseover);
    element.addEventListener('mouseout', handleMouseout);
  }
  
  addHoverEffect('about', 'aboutt', 'aboutp');
  addHoverEffect('diagnostic', 'diagnosist', 'diagnosisp');
  addHoverEffect('book', 'bookt', 'bookp');
  addHoverEffect('recruit', 'recruitt', 'recruitp');




  
  var aboutImage = document.getElementById("diagnostic");

  // 添加點擊事件處理器
  aboutImage.addEventListener("click", function() {
      // 在這裡使用 window.location.href 跳轉到目標網頁
      window.location.href = "choose index.html";
  });

  var aboutImage = document.getElementById("book");

  // 添加點擊事件處理器
  aboutImage.addEventListener("click", function() {
      // 在這裡使用 window.location.href 跳轉到目標網頁
      window.location.href = "role.html";
  });