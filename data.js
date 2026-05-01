// 初始化資料
if (!localStorage.getItem("menu")) {
  const menu = [
    { id: 1, name: "漢堡", price: 120, stockUse: { bread: 1, beef: 1, lettuce: 1 }},
    { id: 2, name: "薯條", price: 60, stockUse: { potato: 2 }},
    { id: 3, name: "可樂", price: 40, stockUse: { cola: 1 }}
  ];
  localStorage.setItem("menu", JSON.stringify(menu));
}

if (!localStorage.getItem("inventory")) {
  const inventory = {
    bread: 20,
    beef: 20,
    lettuce: 20,
    potato: 30,
    cola: 30
  };
  localStorage.setItem("inventory", JSON.stringify(inventory));
}

if (!localStorage.getItem("orders")) {
  localStorage.setItem("orders", JSON.stringify([]));
}