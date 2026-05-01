let cart=[];

const menu = JSON.parse(localStorage.getItem("menu"));
const menuDiv=document.getElementById("menuList");

menu.forEach(item=>{
  menuDiv.innerHTML += `
  <div class="col-3">
    <div class="card p-2 m-2">
      <h5>${item.name}</h5>
      <p>$${item.price}</p>
      <button class="btn btn-primary" onclick="addToCart(${item.id})">加入</button>
    </div>
  </div>`;
});

function addToCart(id){
  const item=menu.find(m=>m.id===id);
  cart.push(item);
  renderCart();
}

function renderCart(){
  const cartUl=document.getElementById("cart");
  cartUl.innerHTML="";
  cart.forEach(i=> cartUl.innerHTML+=`<li>${i.name}</li>`);
}

function submitOrder(){
  let orders=JSON.parse(localStorage.getItem("orders"));
  orders.push({items:cart,status:"製作中"});
  localStorage.setItem("orders",JSON.stringify(orders));
  alert("訂單送出！");
  location.reload();
}