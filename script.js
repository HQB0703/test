function moveNoButton() {
  const buttonNo = document.getElementById("no-button");
  
  // Lấy kích thước của nút "NO"
  const buttonWidth = buttonNo.offsetWidth;
  const buttonHeight = buttonNo.offsetHeight;

  // Tính toán phạm vi di chuyển dựa trên 75% chiều rộng và 65% chiều dài tính từ tâm màn hình
  const maxX = window.innerWidth * 0.75 - buttonWidth;
  const maxY = window.innerHeight * 0.25 - buttonHeight;
  
  // Tạo vị trí mới ngẫu nhiên cho nút "NO" trong phạm vi này
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  
  // Đặt vị trí mới cho nút "NO"
  buttonNo.style.left = newX + "px";
  buttonNo.style.top = newY + "px";
}
