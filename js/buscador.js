$('#btnBuscar').click(()=>{
    let buscar = $('#buscador').val();
    buscar = buscar.toLowerCase()

    switch (buscar) {
        case buscar = "samsung":
            buscaSamsung()
        break;

        case buscar = "motorola":
            buscaMotorola()
        break;

        case buscar = "iphone":
            buscaIphone()
        break;

        case buscar = "xiaomi":
            buscaXiaomi()
        break;

        case buscar = "lg":
            buscaLG()
        break;

        case buscar = "phillips":
            buscaPhillips()
        break;
 
        case buscar = "auricular":
        case buscar = "auriculares":
            buscaAuriculares()
        break;

        case buscar = "":
            buscaTodo()
        break;

        default:
            sinResultado(errorBuscadorMsg)
        break;
    }
})

function buscaSamsung(){
        $('.samsung-cards').show(),
        $('.motorola-cards').hide(),
        $('.iphone-cards').hide(),
        $('.xiaomi-cards').hide(),
        $('.lg-card').hide(),
        $('.phillips-cards').hide()
}

function buscaMotorola(){
        $('.motorola-cards').show(),
        $('#achicar-card').css('width', '21em'),
        $('.samsung-cards').hide(),
        $('.iphone-cards').hide(),
        $('.xiaomi-cards').hide(),
        $('.lg-card').hide(),
        $('.phillips-cards').hide()
    }
function buscaIphone(){
        $('.iphone-cards').show(),
        $('#oculto-xiaomi').css('display', 'none'),
        $('.samsung-cards').hide(),
        $('.motorola-cards').hide(),
        $('.xiaomi-cards').hide(),
        $('.lg-card').hide(),
        $('.phillips-cards').hide()
}

function buscaXiaomi(){
        $('.xiaomi-cards').show(),
        $('#oculto-xiaomi').css('display', 'none'),
        $('.samsung-cards').hide(),
        $('.motorola-cards').hide(),
        $('.iphone-cards').hide(),
        $('.lg-card').hide(),
        $('.phillips-cards').hide();
}

function buscaLG(){
        $('.lg-card').show(),
        $('#oculto-xiaomi').css('display', 'none'),
        $('.samsung-cards').hide(),
        $('.motorola-cards').hide(),
        $('.iphone-cards').hide(),
        $('.xiaomi-cards').hide(),
        $('.phillips-cards').hide();
}
function buscaPhillips(){
        $('.phillips-cards').show(),
        $('.samsung-cards').hide(),
        $('.motorola-cards').hide(),
        $('.iphone-cards').hide(),
        $('.xiaomi-cards').hide(),
        $('.lg-card').hide();
}

function buscaAuriculares(){
        $('.auricular-cards').show(),
        $('.phillips-cards').show(),
        $('.motorola-cards').show(),
        $('#oculto-celus-card').hide(),
        $('.samsung-cards').hide(),
        $('.iphone-cards').hide(),
        $('.xiaomi-cards').hide(),
        $('.lg-card').hide();
}

//Shows every brand
function buscaTodo(){
    $('.samsung-cards').show(),
    $('.motorola-cards').show(),
    $('.iphone-cards').show(),
    $('.xiaomi-cards').show(),
    $('.lg-card').show(),
    $('.phillips-cards').show();
}    

//Error message when the word was not found
sinResultado = () => {
    $('.section-cards').hide();  
    const errorBuscadorMsg = `<h1 align="center" style="color: black">Ups! No pudimos encontrar lo que buscaste.</h1>
    <h2 align="center" style="color: black">Probá de nuevo buscando solo el nombre de la marca 😉</h2>`
            
    $('.error-buscador').append(errorBuscador);
    $('.error-buscador').show();
    setTimeout(()=> 
        {
            $('.error-buscador').hide()
            buscaTodo()
            $('.section-cards').show('slow')
        }, 3000);
}



