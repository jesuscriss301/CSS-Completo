
document.getElementById("registrar").onclick = function () {

    var email = document.getElementById('email').value;
    var nombre = document.getElementById('nombre').value;
    var clave = document.getElementById('password').value;
    var username = document.getElementById('usuario').value;




    var urlregister = 'https://ServidorTest.carlos-reneren7.repl.co/register';
    var data = {user: username, password: clave, name: nombre, email: email};

    fetch(urlregister, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }


    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
                        if(response.register){
                          console.log('Success:', response);
                          localStorage.setItem("user", response.user);
                          localStorage.setItem("name", response.name);
                          localStorage.setItem("email", response.email);
                          window.location.href="inicio.html";
                        }else{
                          alert("Los datos son invalidos");
                        }
                      }
         );

}
