let carritoArray = [];

function carrito(compra){
    crearTablaCompras(compra) 
    
    //Adding products to cart
    carritoArray.push(compra);
    console.log(carritoArray); 
    console.log(carritoArray.length);

    //Calling constructor methods
    for (i of carritoArray){
        i.anunciaCompras(carritoArray)
        i.actualizoContador(carritoArray.length)
        i.sumoPrecios(carritoArray)
        }
   
    //Saving on localstorage
    const productosCarritoJSON = JSON.stringify(carritoArray);
    localStorage.setItem("productosCarritoJSON", productosCarritoJSON);
}
const carritoParseado = JSON.parse(localStorage.getItem("productosCarritoJSON"));
       
//If the cart is empty, an error will be shown on the console.
for (let cp of carritoParseado){
    carritoParseado.push(new Producto(cp));
    let x = carritoParseado;
    console.log(x);
    break;}

/******************************************************************************************************* */
/*                                           DOM.                                                        */
/******************************************************************************************************* */

function crearTablaCompras(i){
    $('#vaciarCarrito').show();
    creaForm() 
    let divCompras = $(".divCompras");
    let th = $("#thProducto");
    let th2 = $("#thImporte");
    $('.divCompras').show(0000);
    th.html(""); 
    th2.html(""); 
    th.append(`Producto`).css('font-size', 'large'); 
    th2.append (`Importe`).css('font-size', 'large').css('text-align', 'center');

    let c = [i];
    for(i of c){               
        $("#tablaCompras").fadeIn(1000).append(
                                `<tr class="estilo">
                                    <td class="column__left">${i.tipo} ${i.marca} ${i.modelo}</td>
                                    <td style="text-align: center">${i.precio}</td>
                                </tr>`)
        divCompras += $("#tablaCompras")
    }
}

$("#vaciarCarrito").click(function(){
    swal({
        title: "Estas seguro de vaciar el carrito?",
        text: "Todas los productos añadidos al carrito seran borrados",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Carrito vaciado! Podes volver a llenarlo con los productos que más quieras", {
            icon: "success",   
          });  
          vaciar()
        } else {
          swal("Lo sabiamos😊! Para confirmar tu compra solo rellena el formulario");
        }
    });
});
let vaciar = () =>{
    localStorage.removeItem("productosCarritoJSON"); 
    carritoArray = [];
    $('.ventana_formulario_completa').fadeOut('slow');
    $(".divCompras").fadeOut('slow');
    $("#tablaCompras").html("");
    $('#contador').fadeOut('slow')
    $('#vaciarCarrito').fadeOut('slow')
}

 
 





    
    



    