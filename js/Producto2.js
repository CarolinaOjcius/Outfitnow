/*
* Producto2.js
* Carolina Ojcius
*
* El siguiente programa devuelve un arreglo de objetos de productos
* de acuerdo a la combinación de filtros día-noche/formal-informal que elige el usuario a través
* de botones.
* Se guarda el ultimo filtro que utilizó el usuario
* Con los botones de agregar se guardan los productos en un arreglo de objetos productoAgregado.
* 
* 
*/

//Muestra los productos filtrados por html
function mostrarProductos(listaProdu) {
    let padre = document.getElementById("Sec1");
    padre.innerHTML = ``;
    for (const producto of listaProdu) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div class="flex-container">
        <div class="img-thumbnail  m-4">
        <h4 class="text-center">${producto.nombre}</h4>
        <img class="img-fluid outfits" src="${producto.img}" alt="">
        <div class="caption">
        <ul class="text-center">
        <p>${producto.categoria1 + " " + producto.categoria2}</p>
        <li>${producto.precio}</li>
        </ul>
        <button type="button" class="btn btn-default btnCaro" id=${producto.id} role="button">Agregar
        </button>
        </div>
        </div>
        </div>
        `;
        padre.appendChild(contenedor);
    }
    //console.log(listaProdu.length);
    //padre.append(`<h2>${listaProdu[0].nombre}</h2>`);
}

//Devuelve segun categoria 1 y 2 lista de productos
function devolverBusqueda() {
    if (cate1 == "DIA" && cate2 == "INFORMAL") {
        devolverConjunto = productos.filter(elemento => elemento.categoria1 == cate1 && elemento.categoria2 == cate2); // se pregunta por ==cate1 y cate2 porque si entra en el if tiene que valer lo de la condición.
        mostrarProductos(devolverConjunto);

    } else if (cate1 == "DIA" && cate2 == "FORMAL") {
        devolverConjunto = productos.filter(elemento => elemento.categoria1 == cate1 && elemento.categoria2 == cate2);
        mostrarProductos(devolverConjunto);

    } else if (cate1 == "NOCHE" && cate2 == "INFORMAL") {
        devolverConjunto = productos.filter(elemento => elemento.categoria1 == cate1 && elemento.categoria2 == cate2);
        mostrarProductos(devolverConjunto);

    } else if (cate1 == "NOCHE" && cate2 == "FORMAL") {
        devolverConjunto = productos.filter(elemento => elemento.categoria1 == cate1 && elemento.categoria2 == cate2);
        mostrarProductos(devolverConjunto);

    } else {
        alert("HUBO UN ERROR AL INGRESAR LAS CATEGORIAS VUELVA A INTENTARLO");
        console.log(cate1, cate2);
        devolverBusqueda();

    }
}

//Guarda en ultimaBusqueda lo que tenga la variable devolverConjunto
function guardarUltimaCategoria() {
    //console.log(JSON.stringify(devolverConjunto)); para verificar que tipo de valor devuelve devolverConjunto con stringinify
    localStorage.setItem("ultimaBusqueda", JSON.stringify(devolverConjunto));

}
function eliminarUltimaCategoria() {
    localStorage.removeItem("ultimaBusqueda");
}

//Trae lo que tenga en la clave ultimaBusqueda del storage
function traerUltimaCategoria() {
    const ultimaCat = JSON.parse(localStorage.getItem("ultimaBusqueda"));//me transforma el JSON en un arreglo objetos.
    //console.log(ultimaCat);
    //console.log(typeof ultimaCat);
    return ultimaCat; //necesito retornar el resultado para utilizarlo posteriormente en devolverUltimaCategoria.
}

//Consulta si el usuario filtró. Si no filtró nunca le trae todos los productos de lo contrario le trae lo último que filtró.
function devolverUltimaCategoria() {
    crearProducto();//Aca se crea el arreglo de objetos productos
}


//Ordena por menor precio
function menorPrecio(p) {
    p.sort(function (a, b) {
        if (a.precio > b.precio) {
            return 1;
        }
        if (a.precio < b.precio) {
            return -1;
        }
        return 0;
    });

    /*for (const producto of p) {
        console.log(Object.values(producto));
        
    }*/

}


//Eventos de botones asignan a cate1, cate2 valores, además se queda con opacidad 1.0 el botón activo.


//Boton día informal
let btdi = document.getElementById("btdi");
btdi.addEventListener("click", function () {
    if ($(this).hasClass('opa')) {
        cate1 = "DIA";
        cate2 = "INFORMAL";
        $("#btnf").removeClass("opa1").addClass("opa");
        $("#btni").removeClass("opa1").addClass("opa");
        $("#btdf").removeClass("opa1").addClass("opa");
        $(this).addClass('opa1');
        $(this).toggleClass('opa');
        devolverBusqueda();
        guardarUltimaCategoria();
        btnAgregar();
        $("#valmen").click(function (e) {
            e.preventDefault();
            menorPrecio(devolverConjunto);
            mostrarProductos(devolverConjunto);
            btnAgregar();

        })
    } else {
        $("#btdi").removeClass("opa1").addClass("opa");
        $("#btnf").removeClass("opa1").addClass("opa");
        $("#btni").removeClass("opa1").addClass("opa");
        $("#btdf").removeClass("opa1").addClass("opa");
        mostrarProductos(productos);
        eliminarUltimaCategoria();
        btnAgregar();
        $("#valmen").click(function (e) {
            e.preventDefault();
            menorPrecio(productos);
            mostrarProductos(productos);
            btnAgregar();

        })
    }
});
//Boton día formal
let btdf = document.getElementById("btdf");
btdf.addEventListener("click", function () {
    if ($(this).hasClass('opa')) {
        cate1 = "DIA";
        cate2 = "FORMAL";
        $("#btnf").removeClass("opa1").addClass("opa");
        $("#btni").removeClass("opa1").addClass("opa");
        $("#btdi").removeClass("opa1").addClass("opa");
        $(this).addClass('opa1');
        $(this).toggleClass('opa');
        devolverBusqueda();
        guardarUltimaCategoria();
        btnAgregar();
        $("#valmen").click(function (e) {
            e.preventDefault();
            menorPrecio(devolverConjunto);
            mostrarProductos(devolverConjunto);
            btnAgregar();
        })
    } else {
        $("#btdf").removeClass("opa1").addClass("opa");
        $("#btnf").removeClass("opa1").addClass("opa");
        $("#btni").removeClass("opa1").addClass("opa");
        $("#btdi").removeClass("opa1").addClass("opa");
        mostrarProductos(productos);
        eliminarUltimaCategoria();
        btnAgregar();
        $("#valmen").click(function (e) {
            e.preventDefault();
            menorPrecio(productos);
            mostrarProductos(productos);
            btnAgregar();
        })
    }
})
//Boton noche informal
let btni = document.getElementById("btni");
btni.addEventListener("click", function () {
    if ($(this).hasClass('opa')) {
        cate1 = "NOCHE";
        cate2 = "INFORMAL";
        $("#btnf").removeClass("opa1").addClass("opa");
        $("#btdf").removeClass("opa1").addClass("opa");
        $("#btdi").removeClass("opa1").addClass("opa");
        $(this).addClass('opa1');
        $(this).toggleClass('opa');
        devolverBusqueda();
        guardarUltimaCategoria();
        btnAgregar();
        $("#valmen").click(function (e) {
            e.preventDefault();
            menorPrecio(devolverConjunto);
            mostrarProductos(devolverConjunto);
            btnAgregar();
        })
    } else {
        $("#btni").removeClass("opa1").addClass("opa");
        $("#btnf").removeClass("opa1").addClass("opa");
        $("#btdf").removeClass("opa1").addClass("opa");
        $("#btdi").removeClass("opa1").addClass("opa");
        mostrarProductos(productos);
        eliminarUltimaCategoria();
        btnAgregar();
        $("#valmen").click(function (e) {
            e.preventDefault();
            menorPrecio(productos);
            mostrarProductos(productos);
            btnAgregar();
        })
    }
})
//Boton noche formal
let btnf = document.getElementById("btnf");
btnf.addEventListener("click", function () {
    if ($(this).hasClass('opa')) {
        cate1 = "NOCHE";
        cate2 = "FORMAL";
        $("#btdf").removeClass("opa1").addClass("opa");
        $("#btni").removeClass("opa1").addClass("opa");
        $("#btdi").removeClass("opa1").addClass("opa");
        $(this).addClass('opa1');
        $(this).toggleClass('opa');
        devolverBusqueda();
        guardarUltimaCategoria();
        btnAgregar();
        $("#valmen").click(function (e) {
            e.preventDefault();
            menorPrecio(devolverConjunto);
            mostrarProductos(devolverConjunto);
            btnAgregar();
        })
    } else {
        $("#btnf").removeClass("opa1").addClass("opa");
        $("#btni").removeClass("opa1").addClass("opa");
        $("#btdf").removeClass("opa1").addClass("opa");
        $("#btdi").removeClass("opa1").addClass("opa");
        mostrarProductos(productos);
        eliminarUltimaCategoria();
        btnAgregar();
        $("#valmen").click(function (e) {
            e.preventDefault();
            menorPrecio(productos);
            mostrarProductos(productos);
            btnAgregar();
        })
    }
})

//Boton de agregar
function btnAgregar() {
    let botones = document.getElementsByClassName("btnCaro");
    for (const boton of botones) {
        boton.onclick = agregarProd;
        console.log("hola viste");
    }
}


//Busca el producto por el id que encuentra en datos con find y lo guarda en productoAgregado
function agregarProd(evento) {
    let activarAviso = false;
    let cantProd = productoAgregado.find(elemento => elemento.id == evento.target.id);
    if (cantProd === undefined) {
        $.getJSON("data/datos.json", function (datos, estado) {
            if (estado) {
                let productoid = datos.find(elemento => elemento.id == evento.target.id);
                productoAgregado.push(new Producto(productoid));
                listaCarrito(productoAgregado);//actualiza html de carrito
                quitarProd();
                confirmarCompra();
                mas(productoAgregado);
                menos(productoAgregado);
            }
        })
        activarAviso = true;
    } else {
        if (cantProd.contador < cantProd.cantidad) {
            console.log(cantProd.contador + " " + cantProd.cantidad);
            cantProd.comprarProducto();
            activarAviso = true;


        }

        listaCarrito(productoAgregado);//actualiza html de carrito
        quitarProd();
        confirmarCompra();
        mas(productoAgregado);
        menos(productoAgregado);
    }
    if (activarAviso) {
        aviso();
    }

}

//Popup que indica que se agregó un producto al carrito
function aviso() {
    $('#myModal').modal('show');
    setTimeout(function () { $('#myModal').modal('hide') }, 2000);
}

//Suma el total a pagar
function sumar(lista) {
    let suma = 0;
    for (const list of lista) {
        suma = suma + (list.precio * list.contador);
    }
    return suma;

}

//Actualiza el html del carrito
function listaCarrito(lista) {

    let carritoPadre = document.getElementById("carritoList");
    carritoPadre.innerHTML = `<div class="text-center"><h2 class="carrito2 pt-4 titulo">Carrito de compras</h2>
    <button type="button" class="close pr-2" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span></div>
    <div class="d-flex justify-content-between p-4"><h3 class="titulo">Producto</h3><h3 class="text-right titulo">Subtotal</h3></div>
   `;

    for (const prodA of lista) {
        let carritoDiv = document.createElement("div");
        carritoDiv.innerHTML = `<ul class="p-4 ulPadre">
        <li class="pl-2"><img class="display"src="${prodA.img}"  width="100" height="100">
        <h6 class="titulo display">${prodA.nombre}</h6>
        <p class="titulo display">${prodA.categoria1 + " " + prodA.categoria2}</p>
        <p class="titulo display">${"Talle " + prodA.talle}</p>
        <p class="titulo display">${"Precio $ " + prodA.precio}</p>
        <div class="d-flex justify-content-between pt-4">
        <div class="pt-4">
        <button class="btnCount" id="menos${prodA.id}">-</button>
        <p class="titulo" id="cant${prodA.id}" style="display:inline;">${"Cantidad " + prodA.contador}</p>
        <button class="btnCount mas" id="mas${prodA.id}">+</button>
        </div>
        <button class="fa fa-trash titulo quitarProd" id="${prodA.nombre}"><p id="M${prodA.nombre}" class="pt-4 titulo" style="display:none">¿Seguro que quieres eliminar este producto?</p></button>
        <p class="text-right titulo" id="subto${prodA.id}">${"$ " + prodA.precio * prodA.contador}</p></div>
        </li><hr class="division"></ul>`;
        carritoPadre.appendChild(carritoDiv);
        sumar(lista);
    }
    carritoPadre.innerHTML = carritoPadre.innerHTML + (`<div class="d-flex justify-content-between p-4 btnfinal"><button type="button" id="btnCompraFin"class="btn btn-default btnCompra">comprar</button><p class="text-right titulo" id="sum" style="display:inline-block">${"$ " + sumar(lista)}</p></div>`);

}
//Funcion que elimina los productos y tiene animaciones encadenadas.
function quitarProd() {

    $(".quitarProd").hover(function () {
        //$(this).closest(".mensajeE").show("slow");
        $("#M" + this.id).fadeToggle("slow");

        $(this).click(function () {
            let nombre = this.id;
            //filter devuelve un arreglo nuevo con los elementos que encuentra
            productoAgregado = productoAgregado.filter(elemento => elemento.nombre != nombre);

            $(this).closest('.ulPadre').fadeOut("slow", function () {
                $(this).remove();

                /* elimina pero con relación al boton en vez de con el array de objetos
                if (!$('.quitarProd').length){
                    $(".btnfinal").empty();
                    }*/
                if (productoAgregado.length <= 0) {
                    $(".btnfinal").empty();
                }

            })
            $("#sum").empty();
            $("#sum").append(sumar(productoAgregado));
            mas(productoAgregado);
            menos(productoAgregado);


            //console.log(sumar(productoAgregado));
            //console.log(productoAgregado);

        })


    })

}

function confirmarCompra() {

    $("#btnCompraFin").click(function () {

        $("#carritoList").empty();
        $("#carritoList").append(`<div class="text-center"><h2 class="carrito2 pt-4 titulo">Complete sus datos para finalizar la compra</h2>
             <button type="button" class="close pr-2" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span></div>
            <form class="px-4">
            <div class="form-group">
              <label for="formGroupExampleInput">Ingrese nombre</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nombre" required>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Ingrese apellido</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Apellido" required>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Ingrese email</label>
              <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Email" required>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Ingrese dirección</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Dirección" required>
            </div>
            <fieldset class="form-group">
    <div class="row pl-3">
      <legend class="col-form-label pt-2 pd-2">Metodos de Pago</legend>
      <div class="col-sm-10" style="display:inline-flex; padding-left:0;">
        <div class="form-check pr-2">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            Tarjeta de débito
          </label>
        </div>
        <div class="form-check pr-2">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Tarjeta de crédito
          </label>
        </div>
        <div class="form-check pr-2">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
          <label class="form-check-label" for="gridRadios3">
            Mercadopago
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <button type="submit" class="btn btn-default btnConfirmar">Confirmar</button>
          </form>
          <div class="d-flex justify-content-between p-4"><h3 class="titulo">Producto</h3><h3 class="text-right titulo">Subtotal</h3></div><div><div id="contProd">
          </div>`);

        //console.log(productoAgregado.length);
        for (const c of productoAgregado) {
            $.post('https://jsonplaceholder.typicode.com/posts', c, function (data, estado) {
                if (estado) {
                    //console.log(typeof (data));
                    //console.log(data);
                    let carritoDiv = document.createElement("div");
                    carritoDiv.innerHTML = (`<div><ul class="p-4 ulPadre">
                    <li class="pl-2"><img class="display"src="${data.img}"  width="100" height="100">
                    <h6 class="titulo display">${data.nombre}</h6>
                    <p class="titulo display">${data.categoria1 + " " + data.categoria2}</p>
                    <p class="titulo display">${"Talle " + data.talle}</p>
                    <p class="titulo display">${"Precio $ " + data.precio}</p>
                    <div class="d-flex justify-content-between pt-4">
                    <p class="titulo">${"Cantidad " + data.contador}</p>
                    <p class="text-right titulo">${"$ " + data.precio * data.contador}</p></div>
                    </li></ul></div>`);
                    $("#contProd").append(carritoDiv);
                }
                console.log(estado);

            })
        }
        $("#carritoList").append(`<p class="text-right titulo p-4" id="sum" >${"$ " + sumar(productoAgregado)}</p>`);
        // ($("#carritoList").last()).append(`<p class="text-right titulo" id="sum" >${"$ " + sumar(productoAgregado)}</p>`) ;
    })


}

function mas(prod) {
    for (const p of prod) {
        $("#mas" + p.id).click(function () {
            if (p.contador < p.cantidad) {
                p.comprarProducto();
                console.log(p.contador);
                $("#cant" + p.id).empty();
                // $("#cant"+p.id).fadeOut("fast");

                $("#cant" + p.id).append(`${"Cantidad " + p.contador}`);
                $("#cant" + p.id).fadeIn("fast");
                $("#sum").empty();
                $("#sum").append(sumar(prod));
                $("#subto" + p.id).empty();
                $("#subto" + p.id).append(`${"$ " + p.precio * p.contador}`);
            }
        })
    }
}
function menos(prod) {
    for (const p of prod) {
        $("#menos" + p.id).click(function () {
            p.restarProducto();
            console.log(p.contador);
            $("#cant" + p.id).empty();
            $("#cant" + p.id).append(`${"Cantidad " + p.contador}`);
            $("#cant" + p.id).fadeIn("fast");
            $("#sum").empty();
            $("#sum").append(sumar(prod));
            $("#subto" + p.id).empty();
            $("#subto" + p.id).append(`${"$ " + p.precio * p.contador}`);
        })
    }
}

//Se ejecuta el programa
$(document).ready(function () {
    devolverUltimaCategoria();

})



