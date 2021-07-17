/******************************************************************************************************* */
/*                                           Carrito                                                     */
/******************************************************************************************************* */

//Array para el carrito
let carritoArray = [];

//Paso a json y al local storage los productos comprados, los productos llegan aqui con un onclick desde el html
function carrito(compra){
    //1ero creo la tabla de compras
    crearTablaCompras(compra) 
    
    //2do hago un array.push + console.log
    carritoArray.push(compra);
    console.log(carritoArray); 
    console.log(carritoArray.length);

    //3ero itero con for of y llamo a metodos del constructor
    for (i of carritoArray){
        i.anunciaCompras(carritoArray)
        i.actualizoContador(carritoArray.length)
        i.sumoPrecios(carritoArray)
        }
   
    //4to guardo lo comprado en el storage
    const productosCarritoJSON = JSON.stringify(carritoArray);
    localStorage.setItem("productosCarritoJSON", productosCarritoJSON);
}
//Parseo el JSON con los productos almacenados
const carritoParseado = JSON.parse(localStorage.getItem("productosCarritoJSON"));
       
//Itero el carritoParseado. Solo salta error en la consola si no hay nada en el carrito
for (let cp of carritoParseado){
    carritoParseado.push(new Producto(cp));
    let x = carritoParseado;
    console.log(x);
    break;}

/******************************************************************************************************* */
/*                                           Tabla compras + vaciar carrito                              */
/******************************************************************************************************* */

//Creo las variables y la tabla de productos seleccionados para ser comprados con DOM y jQuery 
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
//Boton interactivo para vaciar el carrito hecho con Sweetalert. Si el usuario da "ok" Borra el json, vacia el array del carrito, oculta el formulario, oculta la tabla de compras y la vacia y reinicia el contador, sino, no vacia el carrito
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

 
 





    
    



    