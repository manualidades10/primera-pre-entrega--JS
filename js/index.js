//Precios y nombres de los pructos.
const PRUDUCTO1 = 'mate imperial';
const PRUDUCTO2 = 'mate camionero';
const PRUDUCTO3 = 'mate torpedo';
const PRUDUCTO4 = 'mate de metal';
const PRECIO1 = 2000;
const PRECIO2 = 3000;
const PRECIO3 = 1500;
const PRECIO4 = 1000;

//----------------------

//Funcion para inicar sesion.
function inicioSesion() {
    let usuario;
    let contraseña;

    do{
        alert('porfavor ingrese los datos para acceder');
        usuario = prompt('su usuario');
        contraseña = prompt('su contraseña');
        if ((usuario !== 'admin') || (contraseña !== '1234')){
            alert('error, vuelva a intentar')
        }
    } 
    while((usuario !== 'admin') || (contraseña !== '1234')); 

    alert('sesion iniciada');
    console.log('fin inicio sesion');
}

//----------------------

//Funcion para ver los productos de la tienda.
function vistaProductos() {
    let verProductos = prompt('bienvenido a nuestra tienda, \nle interesa saber cuales son nuestros productos? (si/no)').toLowerCase();
    while(verProductos === 'si'){
        alert('Escriba el nombre del mate que desea ver a continuacion:');
        let mate = prompt('imperial - camionero - torpedo - metal').toLowerCase();
        switch(mate){
            case 'imperial':
                alert('producto seleccionado: ' + PRUDUCTO1 + ' ' + PRECIO1 + '$');
                break;
        
            case 'camionero':
                alert('Producto seleccionado: ' + PRUDUCTO2 + ' ' + PRECIO2 + '$');
                break;
        
            case 'torpedo':
                alert('Producto seleccionado: ' + PRUDUCTO3 + ' ' + PRECIO3 + '$');
                break;    

            case 'metal':
                alert('Producto seleccionado: ' + PRUDUCTO4 + ' ' + PRECIO4 + '$');
                break;    
        
            default:
                alert('SELECCION INVALIDA');
        }
        verProductos = prompt('Desea volver a intenatrlo o ver otro producto? (si/no)').toLowerCase();
    }
    console.log('fin ver precios');
}


function comprarProductos() {
    let sumaProductos = 0;
    let compra = prompt('Desea adquier alguno de nuestros \n productos? (si/no)').toLowerCase();
    while(compra === 'si'){
        alert('ingrese que producto/s le gustaria adquirir...');
        let compraMate = prompt('imperial - camionero - torpedo - metal').toLowerCase();
        switch (compraMate) {
            case 'imperial':
                alert('Se sumara el precio del mate IMPERIAL ' + PRECIO1 + '$' + ' al carrito');
                sumaProductos += PRECIO1;
                break;
           
            case 'camionero':
                alert('Se sumara el precio del mate CAMIONERO ' + PRECIO2 + '$' + ' al carrito');
                sumaProductos += PRECIO2;
                break;
            
            case 'torpedo':
                alert('Se sumara el precio del mate TORPEDO ' + PRECIO3 + '$' + ' al carrito');
                sumaProductos += PRECIO3;
                break;    
    
            case 'metal':
                alert('Se sumara el precio del mate METAL' + PRECIO4 + '$' + ' al carrito');
                sumaProductos += PRECIO4;
                break;
        
            default:
                alert('OPCION INVALIDA');
        
        }
        compra = prompt('Desea volver a intenatrlo o ver agregar producto a su carrito? (si/no)').toLowerCase();
    }
    alert('El total de su compra seria de: ' + sumaProductos + '$');
}







inicioSesion();
vistaProductos();

// alert('si desea volver a ver los productos pulse S, de lo contrario \npulse cualquier tecla')
// let otraVez = prompt();
// if (otraVez == 's' || otraVez == 'S'){
//     vistaProductos()
//  }
// else{
//     alert('Usted selecciono no volver a ver los productos');
// }

comprarProductos();
alert('GRACIAS POR ELEGIRNOS');