const ordersDiv=document.getElementById("orders");
let orders=JSON.parse(localStorage.getItem("orders"));

orders.forEach((o,index)=>{
  ordersDiv.innerHTML+=`
  <div class="card p-3 m-2">
    <h4>訂單 ${index+1}</h4>
    <p>${o.items.map(i=>i.name).join(",")}</p>
    <button onclick="finish(${index})" class="btn btn-success">完成</button>
  </div>`;
});

function finish(i){
  orders[i].status="完成";
  localStorage.setItem("orders",JSON.stringify(orders));
  alert("完成!");
  location.reload();
}