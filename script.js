function moveNoButton() {
  const buttonNo = document.getElementById("no-container");
  
  // Lấy kích thước của nút "NO"
  const buttonWidth = buttonNo.offsetWidth;
  const buttonHeight = buttonNo.offsetHeight;

  // Tính toán phạm vi di chuyển dựa trên 75% chiều rộng tính từ tâm màn hình và 65% chiều dài tính từ tâm màn hình
  const maxX = window.innerWidth * 0.75 - buttonWidth / 2;
  const maxY = window.innerHeight * 0.65 - buttonHeight / 2 +100; // Trừ đi 200px để cách đỉnh ít nhất 200px
  
  // Tạo vị trí mới ngẫu nhiên cho nút "NO" trong phạm vi này
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  
  // Đặt vị trí mới cho nút "NO"
  buttonNo.style.left = newX + "px";
  buttonNo.style.top = newY + "px";

  function moveNoButton() {
  const buttonNo = document.getElementById("no-container");
  
  // Lấy kích thước của nút "NO"
  const buttonWidth = buttonNo.offsetWidth;
  const buttonHeight = buttonNo.offsetHeight;

  // Tính toán phạm vi di chuyển dựa trên 75% chiều rộng tính từ tâm màn hình và 65% chiều dài tính từ tâm màn hình
  const maxX = window.innerWidth * 0.75 - buttonWidth / 2;
  const maxY = window.innerHeight * 0.65 - buttonHeight / 2 +100; // Trừ đi 200px để cách đỉnh ít nhất 200px
  
  // Tạo vị trí mới ngẫu nhiên cho nút "NO" trong phạm vi này
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  
  // Đặt vị trí mới cho nút "NO"
  buttonNo.style.left = newX + "px";
  buttonNo.style.top = newY + "px";

  
}


function getRandomPosition() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  return { x, y };
}

function moveSpark(spark) {
  const newPosition = getRandomPosition();
  spark.style.left = `${newPosition.x}px`;
  spark.style.top = `${newPosition.y}px`;

  setTimeout(() => moveSpark(spark), Math.random() * 3000); // Thay đổi vị trí ngẫu nhiên mỗi 3 giây
}

const sparks = document.querySelectorAll('.spark');
sparks.forEach(spark => moveSpark(spark));

function showPopup() {
  const popup = document.getElementById("popup");
  const link = document.getElementById("link");
  const countdown = document.getElementById("countdown");

  // Hiển thị popup và link
  popup.style.display = "block";
  link.style.display = "block";

  // Hiển thị đếm ngược
  countdown.style.display = "block";
  let timeLeft = 5;

  const countdownInterval = setInterval(function() {
      countdown.textContent = timeLeft;
      timeLeft--;

      if (timeLeft < 0) {
          clearInterval(countdownInterval);
          window.location.href = link.getAttribute("href");
      }
  }, 1000);
}

  
}
function getRandomPosition() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  return { x, y };
}

function moveSpark(spark) {
  const newPosition = getRandomPosition();
  spark.style.left = `${newPosition.x}px`;
  spark.style.top = `${newPosition.y}px`;

  setTimeout(() => moveSpark(spark), Math.random() * 3000); // Thay đổi vị trí ngẫu nhiên mỗi 3 giây
}

const sparks = document.querySelectorAll('.spark');
sparks.forEach(spark => moveSpark(spark));

function showPopup() {
  const popup = document.getElementById("popup");
  const link = document.getElementById("link");
  const countdown = document.getElementById("countdown");

  // Hiển thị popup và link
  popup.style.display = "block";
  link.style.display = "block";

  // Hiển thị đếm ngược
  countdown.style.display = "block";
  let timeLeft = 5;

  const countdownInterval = setInterval(function() {
      countdown.textContent = timeLeft;
      timeLeft--;

      if (timeLeft < 0) {
          clearInterval(countdownInterval);
          window.location.href = link.getAttribute("href");
      }
  }, 1000);
}