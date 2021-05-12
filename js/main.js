
//variables globales
var devolverConjunto = [];
var cate1, cate2;
var productos = [];
var productoAgregado=[];


//clase producto
class Producto {
    constructor(dato) {
        this.id = parseInt(dato.id);
        this.categoria1 = dato.categoria1;
        this.categoria2 = dato.categoria2;
        this.nombre = dato.nombre;
        this.talle = dato.talle;
        this.precio = parseFloat(dato.precio);
        this.cantidad = parseInt(dato.cantidad);
        this.img = dato.img;
        this.contador=1;
        
    }
    comprarProducto() {
        this.contador ++;
       //console.log(this.contador);
       return this.contador;
    }
    restarProducto(){
        if(this.contador>1){
            this.contador --;
        return this.contador;
        }
        
    }
}

//Se toman los datos del archivo datos.JSON y se hace el new de Producto para crear los objetos.
function crearProducto() {
    $.getJSON("data/datos.json",function(datos,estado){
        if(estado){
            for (let dato of datos) {
                productos.push(new Producto(dato));
            }
            if (traerUltimaCategoria() == null || traerUltimaCategoria().length == 0) { //si la funcion no me retorna nada quiere decir que usuario no habia filtrado antes.
                mostrarProductos(productos);
                btnAgregar();
                $("#valmen").click(function(e){
                    e.preventDefault();
                    menorPrecio(productos);
                    mostrarProductos(productos);
                    btnAgregar();
                })
                } else {//si la funcion me retorna algo quiere decir que el usuario ya utilizó el filtro para realizar una busqueda, asi que le devuelvo esa busqueda.
                    mostrarProductos(traerUltimaCategoria());
                    btnAgregar();
                    
                }
                
        }   
    })
   
}