let totalGeneral = 0;
let resumen = '';
let contratoEnvioDomicilio = false;
function calcularCantidad(nombreProducto, precio){
    let cantidad = 0;
    let totalProducto = 0;
    while(!cantidad || cantidad == 0){
        cantidad = parseInt(prompt(`Producto: ${nombreProducto} - Precio: $${precio}\n¿Cuántas desea comprar?`));
        if(cantidad){
            totalProducto = (precio * cantidad);
            totalGeneral += totalProducto;
            resumen += `- ${nombreProducto} x ${cantidad} ->  $${totalProducto}\n`;
            alert(`Producto agregado correctamente\nSaldo parcial: $${totalGeneral}`);
        }
        else {
            alert("Ha ingresado un dato incorrecto");
        }
    }
}
function elegirMedioDePago(){
    let totalMDP = 0;
    let nombreMDP = 0;
    let error = false;
    let interes = 0;
    let medioDePago = '';
    do {
        error = false;
        medioDePago = parseInt(prompt("Medio de pago:\n1- Efectivo/Transferencia (10% de descuento)\n2- Tarjeta: 3 Cuotas sin interés\n3- Tarjeta: 6 cuotas con interés (10%)\n4- Tarjeta: 12 cuotas con interés (20%)"));
        switch(medioDePago){
            case 1:
                interes = 0.9;
                nombreMDP = "Efectivo/Transferencia (10% de descuento)";
                break;
            case 2:
                interes = 1;
                nombreMDP = "Tarjeta: 3 Cuotas sin interés";
                break;
            case 3:
                interes = 1.1;
                nombreMDP = "Tarjeta: 6 cuotas con interés (10%)";
                break;
            case 4:
                interes = 1.2;
                nombreMDP = "Tarjeta: 12 cuotas con interés (20%)";
                break;
            default:
                alert("No ha seleccionado una opción correcta");
                error = true;
                break;
        }
    }
    while (error)
    totalGeneral = (totalGeneral * interes);
    resumen += `Medio de pago: ${nombreMDP}\n`;
    alert(`Elegiste el medio de pago ${nombreMDP}\nSaldo parcial: $${totalGeneral}`);
}
function envioDomicilio(){
    let totalEnvio = 700;
    let envioGratis = 70000
    let mensajeExtra = '';
    contratoEnvioDomicilio = true;
    if(totalGeneral >= envioGratis){
        totalEnvio = 0;
        mensajeExtra = `Cuenta con envío a domicilio gratuito por superar el monto de $${envioGratis}\n`;
    }
    totalGeneral += totalEnvio;
    alert(`${mensajeExtra}¡Envío a domicilio agregado!\nSaldo parcial: $${totalGeneral}`);
}
function agregarProcesador(){
    const producto = [
        dato = '',
        precio = 0,
        nombre = '',
        error = false,
    ];
    do {
        producto.error = false;
        producto.dato = parseInt(prompt("Microprocesador:\n1- Intel i3\n2- Intel i5\n3- Intel i7\n4- Intel i9\nAtención: Sólo números"));
        switch(producto.dato){
            case 1:
                producto.precio = 17000;
                producto.nombre = "Microprocesador Intel i3";
                calcularCantidad(producto.nombre, producto.precio);
                break;
            case 2:
                producto.precio = 25000;
                producto.nombre = "Microprocesador Intel i5";
                calcularCantidad(producto.nombre, producto.precio);
                break;
            case 3:
                producto.precio = 37000;
                producto.nombre = "Microprocesador Intel i7";
                calcularCantidad(producto.nombre, producto.precio);
                break;
            case 4:
                producto.precio = 50000;
                producto.nombre = "Microprocesador Intel i9";
                calcularCantidad(producto.nombre, producto.precio);
                break;
            default:
                alert("No ha seleccionado una opción correcta");
                producto.error = true;
                break;
        }
    }
    while (producto.error)
}
function agregarRam(){
    const producto = [
        dato = '',
        precio = 0,
        nombre = '',
        error = false,
    ];
    do {
        producto.error = false;
        producto.dato = parseInt(prompt("Memoria RAM:\n1- Hyper 4Gb DDR4\n2- Hyper 8Gb DDR4\n3- Hyper 16Gb DDR4\nAtención: Sólo números"));
        switch(producto.dato){
            case 1:
                producto.precio = 4000;
                producto.nombre = "Memoria ram Hyper 4Gb DDR4";
                calcularCantidad(producto.nombre, producto.precio);
                break;
            case 2:
                producto.precio = 7500;
                producto.nombre = "Memoria ram Hyper 8Gb DDR4";
                calcularCantidad(producto.nombre, producto.precio);
                break;
            case 3:
                producto.precio = 15000;
                producto.nombre = "Memoria ram Hyper 16Gb DDR4";
                calcularCantidad(producto.nombre, producto.precio);
                break;
            default:
                alert("No ha seleccionado una opción correcta");
                producto.error = true;
                break;
        }
    }
    while (producto.error)
}
function agregarDisco(){
    const producto = [
        dato = '',
        precio = 0,
        nombre = '',
        error = false,
    ];
    do {
        producto.error = false;
        producto.dato = parseInt(prompt("Disco interno:\n1- Disco rígido 1Tb\n2- Disco sólido 240Gb\n3- Disco sólido 480Gb\nAtención: Sólo números"));
        switch(producto.dato){
            case 1:
                producto.precio = 4000;
                producto.nombre = "Disco rígido 1Tb";
                calcularCantidad(producto.nombre, producto.precio);
                break;
            case 2:
                producto.precio = 6000;
                producto.nombre = "Disco sólido 240Gb";
                calcularCantidad(producto.nombre, producto.precio);
                break;
            case 3:
                producto.precio = 11000;
                producto.nombre = "Disco sólido 480Gb";
                calcularCantidad(producto.nombre, producto.precio);
                break;
            default:
                alert("No ha seleccionado una opción correcta");
                producto.error = true;
                break;
        }
    }
    while (producto.error)
}
function generarDetalle(){
    alert(`Se procesó el pedido correctamente\nEn los próximos días recibirá su pedido en el caso de haber contratado el servicio de envío a domicilio\nDetalle del pedido:\n${resumen}\nTotal: $${totalGeneral}`);
    document.write(`Detalle del pedido:<br>${resumen}<br>Total: $${totalGeneral}`);
}
function Inicio(){
    alert("Bienvenido a mundo PC\nVamos a armar tu PC\nPor favor elige los productos escribiendo solo números");
    /** Funciones que agregan los productos */
    agregarProcesador();
    agregarRam();
    agregarDisco();
    /** Proceso de medio de pago */
    alert("¡Perfecto! Ya armamos tu PC. El siguiente paso será elegir el medio de pago");
    elegirMedioDePago();
    /** Envío a domicilio */
    if(confirm("¿Desea contratar el servicio a domicilio?")){
        envioDomicilio();
    }
    resumen += `Envío a domicilio: `+(contratoEnvioDomicilio ? `Si` : `No`);
    /** Generamos detalle y terminamos proceso */
    generarDetalle();
}
Inicio();