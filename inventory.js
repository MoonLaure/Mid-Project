let inventory=JSON.parse(localStorage.getItem("inventory"));
const div=document.getElementById("inventoryList");

for(let item in inventory){
  div.innerHTML+=`
  <div class="card p-2 m-2">
    ${item}: ${inventory[item]}
    <button onclick="addStock('${item}')" class="btn btn-primary btn-sm">進貨</button>
  </div>`;
}

function addStock(item){
  inventory[item]+=5;
  localStorage.setItem("inventory",JSON.stringify(inventory));
  location.reload();
}