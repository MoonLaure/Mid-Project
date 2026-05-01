function login(){
  const role = document.getElementById("role").value;
  localStorage.setItem("role", role);

  if(role==="waiter") location.href="order.html";
  if(role==="kitchen") location.href="kitchen.html";
  if(role==="manager") location.href="inventory.html";
}