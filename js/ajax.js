let todosLosProductos = []
const URLJSON = "json/JSON.json"

$('.btn').click(() => { 
    $.get(URLJSON, function (respuesta, status) {
        if (status === "success"){
            let contenido = respuesta; //Declaro variable local que almacena el valor del parametro "respuesta".
            todosLosProductos = contenido   //Guardo en array
            console.log('$.get() de ajax con JSON y JS exitosa')
        } else {
            msjError()
        }
    });
});
function msjError(){
    const error = `<h1 align="center" style="color: black">Ups! Sucedio un error 😥 Parece que no se pudo establecer la conexión 🔌</h1>
        <h2 align="center" style="color: black">Espere unos segundos e intentelo de nuevo`

    $('main').hide(), 
    $('header').hide(), 
    $('footer').hide(),
    $('.btn').hide(), 
    $('section').hide(), 
    $('#anuncia_compras').hide(),
    $('#error').append(error).fadeIn('slow') 
}









