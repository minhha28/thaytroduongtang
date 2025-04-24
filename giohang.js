
  document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    // Lấy giỏ hàng từ localStorage (nếu có), nếu không thì khởi tạo rỗng
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
  
    // Cập nhật số lượng hiển thị trên icon
    function updateCartCount() {
  let total = 0;
  for (let id in cart) {
    total += Number(cart[id].quantity) || 0;
  }
  cartCount.textContent = total;
}

  // Gán sự kiện cho tất cả nút Thêm vào giỏ
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const name = button.dataset.name;
      const price = parseInt(button.dataset.price);

      if (cart[id]) {
        cart[id].quantity += 1;
      } else {
        cart[id] = { name, price, quantity: 1 };
      }
  
    // Lưu lại vào localStorage và cập nhật số lượng
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  });
});
  
    // Gọi khi load trang
    updateCartCount();
  });