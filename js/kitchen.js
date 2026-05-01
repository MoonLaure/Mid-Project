const ordersDiv = document.getElementById("orders");
let orders = JSON.parse(localStorage.getItem("orders"));
let inventory = JSON.parse(localStorage.getItem("inventory"));
let menu = JSON.parse(localStorage.getItem("menu"));

orders.forEach((o, index) => {
  ordersDiv.innerHTML += `
  <div class="card p-3 m-2">
    <h4>訂單 ${index + 1}</h4>
    <p>${o.items.map(i => i.name).join(", ")}</p>
    <p>狀態：${o.status}</p>
    <button onclick="finish(${index})" class="btn btn-success">完成</button>
  </div>`;
});

function finish(orderIndex) {

  const order = orders[orderIndex];

  // ⭐ 1. 扣除庫存
  order.items.forEach(item => {

    // 找到菜單資料
    const menuItem = menu.find(m => m.id === item.id);

    // 找出需要的食材
    const ingredients = menuItem.stockUse;

    // 扣除每一個食材
    for (let ing in ingredients) {
      inventory[ing] -= ingredients[ing];
    }
  });

  // ⭐ 2. 更新訂單狀態
  orders[orderIndex].status = "完成";

  // ⭐ 3. 存回資料庫
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("inventory", JSON.stringify(inventory));

  alert("訂單完成 + 已扣庫存！");
  location.reload();
}