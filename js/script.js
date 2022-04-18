
if(localStorage.getItem("user")==null) {
  window.location.href="../index.html";
}


var data = localStorage.getItem('name');
document.getElementById('name').innerHTML = data;

document.getElementById("cerrar").onclick = function() {
  localStorage.removeItem('name');
  localStorage.removeItem('user');

  window.location.href="../index.html";
}