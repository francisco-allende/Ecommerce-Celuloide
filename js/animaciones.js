window.onload = () =>{$('body').fadeIn(0800)}

//cart button
const transicionLentaCarrito = (ubicacion, velocidad) => {
    $('.divCompras').show('fast'), 
    $('#contador').show('fast')
    creaForm()
    $('html, body').animate({
       scrollTop: $(`#${ubicacion}`).offset().top
    }, velocidad)
}
$('#btnTablaCarrito').click(()=> {transicionLentaCarrito("contador", 1000)})

// "contactanos" button
const transicionLenta = (ubicacion, velocidad) => {
    $('html, body').animate({
       scrollTop: $(`#${ubicacion}`).offset().top
    }, velocidad)
}
$('#btn_transicion_lenta').click(()=> {transicionLenta("footer", 1500)})

$(function bailar(){
    //al presionar el muñequito de android se pone a bailar
    $("#animar").click(function(){
        //animate cambia los valores de css. Contenedor es el div con la bola negra
        $("#logo_empresa").animate({
            marginLeft: '15em',
        }, 0600).animate({  
            marginLeft: '0',
        }, 0600).animate({
            marginLeft: '15em',
        }, 0600).animate({
            marginLeft: '0',
        }, 0600).animate({  
            marginLeft: '15em',
        }, 0600).animate({ 
            marginLeft: '0',
        }, 0600)
    }); 
}) 

const infoIva =()=>{
    swal("Descuento del IVA", "LLEVANDO DOS PRODUCTOS O MÁS o más de cualquier marca, CELULOIDE TE RESTA EL IVA (21% DE DESCUENTO). La promo la activamos nosotros, VOS NO TENES QUE TRAMITAR NADA. En la tabla de compras se te informa si está activado el descuento y el importe con descuento ¡Asi de grandes son nuestros BENEFICIOS PARA NUESTROS CLIENTES");
}
