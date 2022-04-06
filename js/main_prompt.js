let agregarPedido = false;
let indice = 0;
const pedidos = [];
class Pedido{
    constructor(nroPedido, resumenPedido, totalPedido, envioDomicilio){
        this.nroPedido = nroPedido;
        this.resumenPedido = resumenPedido;
        this.totalPedido = totalPedido;
        this.envioDomicilio = envioDomicilio;
    }
    calcularCantidad(nombreProducto, precio){
        let cantidad = 0;
        let totalProducto = 0;
        while(!cantidad || cantidad == 0){
            cantidad = parseInt(prompt(`Producto: ${nombreProducto} - Precio: $${precio}\n¿Cuántas desea comprar?`));
            if(cantidad){
                totalProducto = (precio * cantidad);
                this.totalPedido += totalProducto;
                this.resumenPedido += `- ${nombreProducto} x ${cantidad} ->  $${totalProducto}\n`;
                alert(`Producto agregado correctamente\nSaldo parcial: $${this.totalPedido}`);
            }
            else {
                alert("Ha ingresado un dato incorrecto");
            }
        }
    }
    elegirMedioDePago(){
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
        this.totalPedido = (pedidos[indice].totalPedido * interes);
        this.resumenPedido += `Medio de pago: ${nombreMDP}\n`;
        alert(`Elegiste el medio de pago ${nombreMDP}\nSaldo parcial: $${this.totalPedido}`);
    }
    agregarEnvioDomicilio(){
        let totalEnvio = 700;
        let envioGratis = 70000
        let mensajeExtra = '';
        this.envioDomicilio = true;
        if(this.totalPedido >= envioGratis){
            totalEnvio = 0;
            mensajeExtra = `Cuenta con envío a domicilio gratuito por superar el monto de $${envioGratis}\n`;
        }
        this.totalPedido += totalEnvio;
        alert(`${mensajeExtra}¡Envío a domicilio agregado!\nSaldo parcial: $${this.totalPedido}`);
    }
    agregarProcesador(){
        const producto = [];
        do {
            producto.error = false;
            producto.dato = parseInt(prompt("Microprocesador:\n1- Intel i3\n2- Intel i5\n3- Intel i7\n4- Intel i9\nAtención: Sólo números"));
            switch(producto.dato){
                case 1:
                    producto.precio = 17000;
                    producto.nombre = "Microprocesador Intel i3";
                    this.calcularCantidad(producto.nombre, producto.precio);
                    break;
                case 2:
                    producto.precio = 25000;
                    producto.nombre = "Microprocesador Intel i5";
                    this.calcularCantidad(producto.nombre, producto.precio);
                    break;
                case 3:
                    producto.precio = 37000;
                    producto.nombre = "Microprocesador Intel i7";
                    this.calcularCantidad(producto.nombre, producto.precio);
                    break;
                case 4:
                    producto.precio = 50000;
                    producto.nombre = "Microprocesador Intel i9";
                    this.calcularCantidad(producto.nombre, producto.precio);
                    break;
                default:
                    alert("No ha seleccionado una opción correcta");
                    producto.error = true;
                    break;
            }
        }
        while (producto.error)
    }
    agregarRam(){
        const producto = [];
        do {
            producto.error = false;
            producto.dato = parseInt(prompt("Memoria RAM:\n1- Hyperx 4Gb DDR4\n2- Hyperx 8Gb DDR4\n3- Hyperx 16Gb DDR4\nAtención: Sólo números"));
            switch(producto.dato){
                case 1:
                    producto.precio = 4000;
                    producto.nombre = "Memoria ram Hyperx 4Gb DDR4";
                    this.calcularCantidad(producto.nombre, producto.precio);
                    break;
                case 2:
                    producto.precio = 7500;
                    producto.nombre = "Memoria ram Hyperx 8Gb DDR4";
                    this.calcularCantidad(producto.nombre, producto.precio);
                    break;
                case 3:
                    producto.precio = 15000;
                    producto.nombre = "Memoria ram Hyperx 16Gb DDR4";
                    this.calcularCantidad(producto.nombre, producto.precio);
                    break;
                default:
                    alert("No ha seleccionado una opción correcta");
                    producto.error = true;
                    break;
            }
        }
        while (producto.error)
    }
    agregarDisco(){
        const producto = [];
        do {
            producto.error = false;
            producto.dato = parseInt(prompt("Disco interno:\n1- Disco rígido 1Tb\n2- Disco sólido 240Gb\n3- Disco sólido 480Gb\nAtención: Sólo números"));
            switch(producto.dato){
                case 1:
                    producto.precio = 4000;
                    producto.nombre = "Disco rígido 1Tb";
                    this.calcularCantidad(producto.nombre, producto.precio);
                    break;
                case 2:
                    producto.precio = 6000;
                    producto.nombre = "Disco sólido 240Gb";
                    this.calcularCantidad(producto.nombre, producto.precio);
                    break;
                case 3:
                    producto.precio = 11000;
                    producto.nombre = "Disco sólido 480Gb";
                    this.calcularCantidad(producto.nombre, producto.precio);
                    break;
                default:
                    alert("No ha seleccionado una opción correcta");
                    producto.error = true;
                    break;
            }
        }
        while (producto.error)
    }
}
function generarDetalle(){
    alert(`Se procesó el pedido correctamente\nEn los próximos días recibirá su/s pedido en el caso que corresponda\nA continuación se mostrará el detalle de cada pedido.`);
    console.log('pedidos', pedidos);
    for(const registro of pedidos){
        console.log(registro);
        alert(`Pedido N°${registro.nroPedido}\nResumen:\n${registro.resumenPedido}`);
    }
    // document.write(`Detalle del pedido:<br>${resumen}<br>Total: $${pedidos[indice].totalPedido}`);
}
function Inicio(){
    alert("Bienvenido a mundo PC\nVamos a armar tu PC\nPor favor elige los productos escribiendo solo números");
    do {
        /** agregamos el pedido, luego lo vamos a modificar */
        pedidos.push(new Pedido((indice+1), '', 0, false));
        // console.log(pedidos);
        /** Funciones que agregan los productos */
        pedidos[indice].agregarProcesador();
        pedidos[indice].agregarRam();
        pedidos[indice].agregarDisco();
        /** Proceso de medio de pago */
        alert("¡Perfecto! Ya armamos tu PC. El siguiente paso será elegir el medio de pago");
        pedidos[indice].elegirMedioDePago();
        /** Envío a domicilio */
        if(confirm("¿Desea contratar el servicio a domicilio?")){
            pedidos[indice].agregarEnvioDomicilio();
        }
        pedidos[indice].resumenPedido += `Envío a domicilio: `+(pedidos[indice].envioDomicilio ? `Si\n` : `No\n`); 
        pedidos[indice].resumenPedido += `Total: $${pedidos[indice].totalPedido}`;
        agregarPedido = confirm("¡Pedido realizado! ¿Desea agregar otro pedido?")
        indice++;
    } while(agregarPedido);
    /** Generamos detalle y terminamos proceso */
    generarDetalle();
}
Inicio();