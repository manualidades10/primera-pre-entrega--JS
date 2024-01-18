//CODIGO TERCERA PRE-ENTREGA

//Objeto constructor de productos.
class Productos{
    constructor(id, nombre, precio, imagen){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen
    }
}

//Productos.
const PRODUCTO1 = new Productos(1, 'Mate Imperial', 2000, './assets/img/imperial.jpg');
const PRODUCTO2 = new Productos(2, 'Mate Camionero', 3000, './assets/img/camionero.jpg');
const PRODUCTO3 = new Productos(3, 'Mate Torpedo', 1500, './assets/img/torpedo.jpg');
const PRODUCTO4 = new Productos(4, 'Mate De Metal', 1000, './assets/img/metal.jpg');

//Array productos.
const ARRAYPROD = [PRODUCTO1, PRODUCTO2, PRODUCTO3, PRODUCTO4];

//Array carrito.
let carrito = obtenerCarrito() || [];

//Funcion que muestra los productos disponibles en la tienda en forma de "card".

function generarCards() {
    const SECCION_PRODUCTOS = document.getElementById('tienda')
    SECCION_PRODUCTOS.innerHTML = '<h2 class="tituloTienda">TIENDA</h2>';

    ARRAYPROD.forEach(mate => {
        const CARD_PROD = document.createElement('div');
        CARD_PROD.classList.add('card');
        CARD_PROD.innerHTML = `
            <img class="cardImagen" src="${mate.imagen}" alt="No hay imagen">
            <h3>${mate.nombre}</h3>
            <p> $ ${mate.precio}</p>
            <button onclick="sumarCarrito(${mate.id})">AGREGAR</button>
        `;
        SECCION_PRODUCTOS.appendChild(CARD_PROD);
    })
}

//Funcion para sumar productos al carrito.

function sumarCarrito(idProd){
    carrito = obtenerCarrito() || [];//
    
    const PRODUCTO_SELECCIONADO = ARRAYPROD.find(producto => producto.id === idProd )
    
    if (PRODUCTO_SELECCIONADO) {
        carrito.push(PRODUCTO_SELECCIONADO);
        console.log(`${PRODUCTO_SELECCIONADO.nombre} agregado al carrito`);
        console.log('carrito actual', carrito);
        carritoLocalStorage(carrito);
        actualizarCarrito();
        totalCarrito();
    }
}

//Eliminar producto del carrito.

function eliminarProducto(index){
    carrito.splice(index, 1);

    carritoLocalStorage(carrito);

    actualizarCarrito();

    totalCarrito();
}

//Guardar carrito en Local Storage.

function carritoLocalStorage(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

//Llamar al carrito desde Local Storage.

function obtenerCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : null;
}

//Funcion que actualiza el carrito y permite visualizarlo.

function actualizarCarrito() {
    const SECCION_CARRITO = document.getElementById('carrito');
    SECCION_CARRITO.innerHTML = '';
    SECCION_CARRITO.innerHTML = `
        <h2> SU CARRITO </h2>
    `;
    carrito.forEach((mateAgregado, index) => {
        const CARD_CARRO = document.createElement('div')
        CARD_CARRO.classList.add('card');
        CARD_CARRO.innerHTML = `
            <img class="cardImagen" src="${mateAgregado.imagen}" alt="No hay imagen">
            <h3>${mateAgregado.nombre}</h3>
            <p> $ ${mateAgregado.precio}</p>    
            <button onclick="eliminarProducto(${index})"> ELIMINAR</button>
            `;
        SECCION_CARRITO.appendChild(CARD_CARRO);
    })
}

//Total del carrito.

function totalCarrito() {
    const SECCION_TOTAL = document.getElementById('total');
    const TOTAL_PRECIO = carrito.reduce((acc, producto) => acc +producto.precio, 0);
    SECCION_TOTAL.innerText = `Total de su compra ${TOTAL_PRECIO}`;
}

generarCards();
actualizarCarrito();
totalCarrito();

//-----------------------------------------

//CODIGO SEGUNDA PRE-ENTREGA

// //Funcion para inicar sesion.
// function inicioSesion() {
//     let usuario;
//     let contraseña;

//     do{
//         alert('porfavor ingrese los datos para acceder');
//         usuario = prompt('su usuario');
//         contraseña = prompt('su contraseña');
//         if ((usuario !== 'admin') || (contraseña !== '1234')){
//             alert('error, vuelva a intentar')
//         }
//     } 
//     while((usuario !== 'admin') || (contraseña !== '1234')); 

//     alert('sesion iniciada');
//     console.log('fin inicio sesion');
// }

// //Objeto constructor de productos.
// class Productos{
//     constructor(codigo, nombre, precio){
//         this.codigo = codigo,
//         this.nombre = nombre,
//         this.precio = precio
//     }
// }

// //Productos.
// const PRODUCTO1 = new Productos('123', 'Mate Imperial', 2000);
// const PRODUCTO2 = new Productos('321', 'Mate Camionero', 3000);
// const PRODUCTO3 = new Productos('456', 'Mate Torpedo', 1500);
// const PRODUCTO4 = new Productos('654', 'Mate De Metal', 1000);

//Array productos.
// const ARRAYPROD = [PRODUCTO1, PRODUCTO2, PRODUCTO3, PRODUCTO4];

//Array carrito.
// let carritoDeCompras = [];

//Funcion para ver los productos de la tienda y agregarlos al carrito.
// function verYAgregarProductos() {
//     let verProductos = prompt('bienvenido a nuestra tienda, \nle interesa saber cuales son nuestros productos? (si/no)').toLowerCase();
//     while(verProductos === 'si'){
//         alert('A continuacion se mostraran los productos con su precios...');
//         for (const MATE of ARRAYPROD) {
//             //alert(`El ${MATE.nombre} tiene un valor de ${MATE.precio}`);
//             let adquirir = prompt(`El ${MATE.nombre} tiene un valor de $${MATE.precio}, \nle interesa adquirir este producto? (si/no)`).toLowerCase();
//             if (adquirir === 'si'){
//                 carritoDeCompras.push(MATE);
//                 alert('LIST0!!, producto agregado.');
//             } else{
//                 alert('El producto no se agregara al carrito \nde compras.');
//             } 
//         }
//         verProductos = prompt('Desea agregar mas productos? (si/no)').toLocaleLowerCase();
//     }
//     alert('PASAREMOS A MOSTRARLE SU CARRITO DE COMPRAS...');
//     console.log('fin ver y agregar');
// }

//Funcion para mostrar productos del carrito.
// function mostrarProductos(producto){
//     alert(`Producto: ${producto.nombre} - Valor: $${producto.precio} - Codigo: (${producto.codigo})`);
// }

// //Funcion para calcular valor total del carrito.
// let precioTotal = 0;
// function totalCarrito(){
//     alert('SE MOSTRARA EL TOTAL DE SU COMPRA...');
//     for (const VALOR of carritoDeCompras) {
//         precioTotal += VALOR.precio;
//     }
//     alert(`El precio total es $${precioTotal}`);
// }

// //Funcion para interactuar con el carrito.
// function accionesCarrito() {
//     alert('SU CARRITO:');
//     carritoDeCompras.forEach(mostrarProductos);
//     let mantenerCarrito = prompt('Desea MODFICAR algun \nproducto del carrito? (si/no)').toLocaleLowerCase();
//     while (mantenerCarrito === 'si') {
//         let modificacion = prompt('Ingrese "primero" para eliminar el primer producto o "ultimo" \npara eliminar el ultimo producto. (primero - ultimo)').toLocaleLowerCase();
//         switch(modificacion){
//             case 'primero':
//                 alert('Se eliminara el producto en la primera posicion de su carrito.');
//                 carritoDeCompras.shift();
//                 break; 
            
//             case 'ultimo':
//                 alert('Se eliminara el producto que esta en la ultima posicion de su carrito.');
//                 carritoDeCompras.pop();
//                 break;
            
//             default:
//                 alert('OPCION INVALIDA');
//                 //modificacion = prompt('primero - ultimo');
//         }
//         alert('CARRITO:');
//         carritoDeCompras.forEach(mostrarProductos);
//         //mantenerCarrito = prompt('Volver a intentar modificacion del carrito? (si/no)').toLocaleLowerCase();
//         mantenerCarrito = prompt('Desea eliminar otro producto o intentarlo otra vez? (si/no)').toLocaleLowerCase();
//     }
//     let volverAVer = prompt('Ver carrito final? (si/no)').toLocaleLowerCase();
//     if (volverAVer === 'si'){
//         carritoDeCompras.forEach(mostrarProductos);
//     } else{
//         alert('GENIAL');
//     }
//     totalCarrito();

// }

//Llamado a funciones.
//verYAgregarProductos();
//accionesCarrito();
//alert('GRACIAS POR ELEGIRNOS!!');

//-----------------------------------------

//CODIGO PRIMERA PRE-ENTREGA

//Precios y nombres de los pructos.
// const PRUDUCTO1 = 'mate imperial';
// const PRUDUCTO2 = 'mate camionero';
// const PRUDUCTO3 = 'mate torpedo';
// const PRUDUCTO4 = 'mate de metal';
// const PRECIO1 = 2000;
// const PRECIO2 = 3000;
// const PRECIO3 = 1500;
// const PRECIO4 = 1000;

//----------------------

//Funcion para inicar sesion.
// function inicioSesion() {
//     let usuario;
//     let contraseña;

//     do{
//         alert('porfavor ingrese los datos para acceder');
//         usuario = prompt('su usuario');
//         contraseña = prompt('su contraseña');
//         if ((usuario !== 'admin') || (contraseña !== '1234')){
//             alert('error, vuelva a intentar')
//         }
//     } 
//     while((usuario !== 'admin') || (contraseña !== '1234')); 

//     alert('sesion iniciada');
//     console.log('fin inicio sesion');
// }

//----------------------

//Funcion para ver los productos de la tienda.
// function vistaProductos() {
//     let verProductos = prompt('bienvenido a nuestra tienda, \nle interesa saber cuales son nuestros productos? (si/no)').toLowerCase();
//     while(verProductos === 'si'){
//         alert('Escriba el nombre del mate que desea ver a continuacion:');
//         let mate = prompt('imperial - camionero - torpedo - metal').toLowerCase();
//         switch(mate){
//             case 'imperial':
//                 alert('producto seleccionado: ' + PRUDUCTO1 + ' ' + PRECIO1 + '$');
//                 break;
        
//             case 'camionero':
//                 alert('Producto seleccionado: ' + PRUDUCTO2 + ' ' + PRECIO2 + '$');
//                 break;
        
//             case 'torpedo':
//                 alert('Producto seleccionado: ' + PRUDUCTO3 + ' ' + PRECIO3 + '$');
//                 break;    

//             case 'metal':
//                 alert('Producto seleccionado: ' + PRUDUCTO4 + ' ' + PRECIO4 + '$');
//                 break;    
        
//             default:
//                 alert('SELECCION INVALIDA');
//         }
//         verProductos = prompt('Desea volver a intenatrlo o ver otro producto? (si/no)').toLowerCase();
//     }
//     console.log('fin ver precios');
// }

//Funcion para agregar productos al carrito.

// function comprarProductos() {
//     let sumaProductos = 0;
//     let compra = prompt('Desea adquier alguno de nuestros \n productos? (si/no)').toLowerCase();
//     while(compra === 'si'){
//         alert('ingrese que producto/s le gustaria adquirir...');
//         let compraMate = prompt('imperial - camionero - torpedo - metal').toLowerCase();
//         switch (compraMate) {
//             case 'imperial':
//                 alert('Se sumara el precio del mate IMPERIAL ' + PRECIO1 + '$' + ' al carrito');
//                 sumaProductos += PRECIO1;
//                 break;
           
//             case 'camionero':
//                 alert('Se sumara el precio del mate CAMIONERO ' + PRECIO2 + '$' + ' al carrito');
//                 sumaProductos += PRECIO2;
//                 break;
            
//             case 'torpedo':
//                 alert('Se sumara el precio del mate TORPEDO ' + PRECIO3 + '$' + ' al carrito');
//                 sumaProductos += PRECIO3;
//                 break;    
    
//             case 'metal':
//                 alert('Se sumara el precio del mate METAL' + PRECIO4 + '$' + ' al carrito');
//                 sumaProductos += PRECIO4;
//                 break;
        
//             default:
//                 alert('OPCION INVALIDA');
        
//         }
//         compra = prompt('Desea volver a intenatrlo o ver agregar producto a su carrito? (si/no)').toLowerCase();
//     }
//     alert('El total de su compra seria de: ' + sumaProductos + '$');
// }

// inicioSesion();
// vistaProductos();

// // alert('si desea volver a ver los productos pulse S, de lo contrario \npulse cualquier tecla')
// // let otraVez = prompt();
// // if (otraVez == 's' || otraVez == 'S'){
// //     vistaProductos()
// //  }
// // else{
// //     alert('Usted selecciono no volver a ver los productos');
// // }

// comprarProductos();
