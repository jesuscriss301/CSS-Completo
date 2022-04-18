function loginFunc(e)
{
    //event.preventDefault();

    var username = document.getElementById('usuario').value;
    var clave = document.getElementById('password').value;


    var urllogin = 'https://ServidorTest.carlos-reneren7.repl.co/login';
    var data = {user: username, password: clave};
    
    fetch(urllogin, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    //var mostrar = document.getElementById('mostrar');
  /*
  
    var user = localStorage.getItem(user);
    var data = JSON.parse(user);
    console.log(data);

    if(username == null)
    {
        mostrar.innerHTML = 'Ingrese los datos de usuario';
    }else if(username == data.usuario && clave == data.clave){
        mostrar.innerHTML = 'Logeado';
    }else{
        mostrar.innerHTML = 'Usuario o contraseña incorrecta';
    }
  */
}


if(localStorage.getItem("user")!=null) {
  window.location.href="html/dashboard.html";
}


document.getElementById("ingresar").onclick = function () {


    var username = document.getElementById('usuario').value;
    var clave = document.getElementById('password').value;


    var urllogin = 'https://ServidorTest.carlos-reneren7.repl.co/login';
    var data = {user: username, password: clave};
    
    fetch(urllogin, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }

      
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
                        if(response.login){
                          console.log('Success:', response);
                          localStorage.setItem("user", response.user);
                          localStorage.setItem("name", response.name);
                          window.location.href="html/dashboard.html";
                        }else{
                          alert("Los datos son invalidos");
                        }
                      }
         );

    
  
    //var mostrar = document.getElementById('mostrar');
  /*
  
    var user = localStorage.getItem(user);
    var data = JSON.parse(user);
    console.log(data);

    if(username == null)
    {
        mostrar.innerHTML = 'Ingrese los datos de usuario';
    }else if(username == data.usuario && clave == data.clave){
        mostrar.innerHTML = 'Logeado';
    }else{
        mostrar.innerHTML = 'Usuario o contraseña incorrecta';
    }

  */
}