    //Creo mi clase constructora.
    class Producto{
        constructor(tipo, marca, modelo, precio, id,){
            this.tipo = tipo;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.id = id;
        }  
        anunciaCompras(){ //Made with sweetalert library
            if (carritoArray.length === 1){
                swal({
                    title: `${this.tipo} ${this.marca} ${this.modelo} añadido al carrito!`,
                    text: "🤩",
                    button: false,
                    icon: "success",
                    timer: 1400,
                })
            }else{
                swal({
                title: `Descuento de IVA activado! ${this.tipo} ${this.marca} ${this.modelo} añadido al carrito`,
                text: "🤩",
                button: false,
                icon: "success",
                timer: 1800,
                })
            } 
        }
        actualizoContador(contador){
            $('#contador').html('')
            let almacenaContador = `
                <h3 style="color: black;">
                    Productos guardados en el carrito: ${contador}
                </h3>
            `;
            $('#contador').append(almacenaContador)
            $('#contador').show()
        }
        sumoPrecios(compra){
            let total = 0
            if (carritoArray.length === 1){
                for (let i of compra) {
                    total += Number(i.precio)
                }
                $('#h1_descuento').hide()
            }else{
                console.log("Por llevar dos o más productos te restamos el iva!")
                for (let i of compra) 
                    total += Number(i.precio)
                    total = total - (total * .21)
                $('#h1_descuento').show()
                $('#th_descuento').show()
            } 
            $('#precioTotal').html(""); 
            $('#precioTotal').append(`$${total}`);
            return total
        }
        domCompraFinal(){
            $('main').hide(), 
            $('header').hide(),
            $('footer').hide() ,
            $('.btn').hide(), 
            $('section').hide(),
            $('#div_show_shop').hide(),
            $('#div_show_form').hide(),
            $('#contador').hide(),
            $('#anuncia_compras').html("")
            $('body').css('background', 'var(--clr-violet)')
            if (carritoArray.length === 1){
                let text = `
                    <div style="padding: 1em; margin-left: 10%; margin-right: 10%; background: #8b0000; border-radius: 1em; border: 2px solid #fff" id="formis">
                        <h2>
                            Gracias ${nombre.val()} comprar en <strong style="font-family: var(--ff-h);">Celuloide</strong>! 
                            En breve llegará un delivery a ${direccion.val()} con su ${this.tipo} ${this.marca} ${this.modelo} 🤩
                        </h2>
                    </div>
                    <button>
                        <a href="index.html" class="nav__link nav__link--button" id="btn_transicion_lenta">
                            Volver
                        </a>
                    </button>
                `;
                $('#mostrar-una-compra').append(text)
                $('#mostrar-una-compra').fadeIn('slow')
            }else{
                let text2 =`
                    <div style="padding: 1em; margin-left: 10%; margin-right: 10%; background: #8b0000; border-radius: 1em; border: 2px solid #fff" id="formis">
                        <h2>
                            Gracias ${nombre.val()} por su compra y aprovechar nuestra promoción única  de <strong style="font-family: var(--ff-h);">Celuloide</strong>! En breve    llegará un delivery a ${direccion.val()} con su compra👇
                        </h2>
                    </div>
                `;
                let botonVolver = `
                    <button>
                        <a href="index.html" class="nav__link nav__link--button">
                            Volver
                        </a>
                    </button>
                `;
                let dosComprasOMas = `
                    <div style="padding: 1em; margin-left: 10%; margin-right: 10%; margin-top: 1em; background: #8b0000; color: #fff;  border-radius: 1em; border: 2px solid #fff">
                        <ul style="font-size: 2em">
                            <li>
                                🤩 ${this.tipo} ${this.marca} ${this.modelo}
                            </li>
                        </ul>
                    </div>
                    `;
                $('#mostrar-una-compra').html("")
                $('#mostrar-una-compra').append(text2);
                $('#mostrar-muchas-compras').append(botonVolver);
                $('#mostrar-muchas-compras').append(dosComprasOMas);
                $('#mostrar-una-compra').fadeIn('slow');
                $('#mostrar-muchas-compras').fadeIn('slow')
            }
        }
        buscador(b){
            for(i of b){
                buscador.tipo = this.tipo
                buscador.marca = this.marca
                buscador.modelo = this.modelo
                buscador.precio = this.precio
                buscador.id = this.id
            }
        } 
    }

    //Variables que instancian los objetos
    const samsung1 = new Producto("Celular","Samsung","A51", 45000, 100)
    const samsung2 = new Producto("Celular","Samsung","A02S", 40000, 2)
    const samsung3 = new Producto("Celular","Samsung","20FE", 38000, 3)
 
    const motorola1 = new Producto("Celular","Motorola","EDGEXT2063-3", 80000, 4)
    const motorola2 = new Producto("Celular","Motorola","ONE_FUSION XT2073-2", 75000, 5)
    const motorola3 = new Producto("Celular","Motorola","E6S XT2053-2", 45000, 6)
    const motorola4 = new Producto("Auricular","Motorola","Bluetooth ESCAPE-220", 5000, 7)
 
    const iphone1 = new Producto("Celular","Iphone","PRO 11", 250000, 8)
    const iphone2 = new Producto("Celular","Iphone","PRO 10", 220000, 9)
 
    const xiaomi1 = new Producto("Celular","Xiaomi","REDMI 9", 30000, 10)
    const xiaomi2 = new Producto("Celular","Xiaomi","MI 9T", 50000, 11)
    const xiaomi3 = new Producto("Celular","Xiaomi","REDMI 9S", 33000, 12)
 
    const lg1 = new Producto("Celular","LG","K50",20000, 13)
 
    const phillips1 = new Producto("Auricular","Phillips","OVER EAR Bluetooth BASS", 8000, 14)
    const phillips2 = new Producto("Auricular","Phillips","Bluetooth Kids", 4000, 15)
 
    //Los almaceno a todos en un array
    const almacenoProductos = [samsung1, samsung2, samsung3, motorola1, motorola2, motorola3, motorola4, iphone1, iphone2, xiaomi1, xiaomi2, xiaomi3, lg1, phillips1, phillips2]
