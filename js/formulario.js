/******************************************************************************************************* */
/*                                           FORMULARIO                                                  */
/********************************************************************************************************/

//Guardo datos en un JSON
function creaForm(){
  $('.ventana_formulario_completa').slideDown(1000)
} 

let nombre = $("#nombre")
let telefono = $("#telefono")
let direccion = $("#direccion")

//Datos de la tarjeta
let nroTarjeta = $('#nro_tarjeta')
let nombreTitular = $('#nombre_titular')
let expiracion = $('#expiracion')
let codigoSeguridad = $('#codigo_seguridad')
let datosPersona = {
  name: "", 
  phone: "", 
  adress: "", 
  cardNumber: "", 
  ownerName: "", 
  expiration:"", 
  securityCode:""
} //JSON

//Funcion que guarda los datos de la persona en un JSON y este en un localStorage. No puedo usar ajax porque no puedo guardar un usuario que varia en un json (al menos por ahora) 
const guardoDatosCargados = () => {
    datosPersona.name = nombre.val(); 
    datosPersona.phone = telefono.val();
    datosPersona.adress = direccion.val(); 
    datosPersona.cardNumber = nroTarjeta.val();
    datosPersona.ownerName = nombreTitular.val();
    datosPersona.expiration = expiracion.val();
    datosPersona.securityCode = codigoSeguridad.val();
    
    //Guardo los datos en el storage
    localStorage.datosPersona = JSON.stringify(datosPersona)   
}
//Convierto la data guardada en el localStorage en un objeto JS
const objetoJSPersona = JSON.parse(localStorage.getItem("datosPersona"))
 
//Metodo.change()
nombre.change(guardoDatosCargados),
telefono.change(guardoDatosCargados),
direccion.change(guardoDatosCargados),
nroTarjeta.change(guardoDatosCargados),
nombreTitular.change(guardoDatosCargados),
expiracion.change(guardoDatosCargados),
codigoSeguridad.change(guardoDatosCargados)

//Metodo.focus() 
nombre.focus(function(){
  nombre.css('background', 'lightblue')
}),
telefono.focus(function(){
  telefono.css('background', 'lightblue')
}),
direccion.focus(function(){
  direccion.css('background', 'lightblue')
});
nroTarjeta.focus(function(){
  nroTarjeta.css('background', '#D3D3D3')
}),
nombreTitular.focus(function(){
  nombreTitular.css('background', '#D3D3D3')
}),
expiracion.focus(function(){
  expiracion.css('background', '#D3D3D3')
}),
codigoSeguridad.focus(function(){
  codigoSeguridad.css('background', '#D3D3D3')
});

//Metodo.blur()
nombre.blur(function(){
  nombre.css("background", "#fff")
}),
telefono.blur(function(){
  telefono.css("background", "#fff")
}),
direccion.blur(function(){
  direccion.css("background", "#fff")
});

//Metodo.submit(). Llama a un metodo constructor    
$('#btnConfirmarCompra').click(()=>{
  for (let i of carritoArray){
    i.domCompraFinal()
  }
})

/**************************************************************************************************************** */
/*Este codigo que empieza ahora, de la linea 51 a la 92 no fue escrito por mi. Lo previo de la linea 1 a la 44 si, todo codeado por mi. 
Este bloque de codigo se encarga del dropdown del formulario para cambiar la targeta. 
Es el único bloque de codigo no escrito por mi en todo el proyecto con algunas propiedades de css que este formulario incluia*/
/****************************************************************************************************************** */
let cardDrop = $('#card-dropdown');
let activeDropdown;
cardDrop.click(function(){
  let node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})

let x = document.querySelector('.ventana_formulario_completa')
x.onclick = function(e) {
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}
