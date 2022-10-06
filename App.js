

const carrito = JSON.parse(localStorage.getItem('carrito'))|| [];


function pintarCards() {


    const mostrarCards = document.getElementById('card');

    productosStock.forEach((producto) => {

        let div = document.createElement('div');
        div.classList.add('row', 'py-3', 'mx-1', 'justify-content-center');

        div.innerHTML = `
            <div class="card col-sm-12 col-md-6 col-lg-4 mb-2 me-2" style="width:20rem">
               <img src="${producto.img}" class="mt-2 w-100 img-card" alt="producto 1 poncho hombre color azul talle L ">
                <div class="card-body">
                  <h3 class="card-title">${producto.nombre}</h3>
                  <p class="card-text">${producto.text}
                  <br>${producto.talle}</p>
                  <br>$${producto.precio}</p>
                 <button class="btn btn-color w-100" id="${producto.id}">Añadir al Carrito</button>
                </div>
            </div>
        `;


        mostrarCards.appendChild(div);


        //agrego evento al  boton carrito
        div.querySelector('button').addEventListener('click', () => {

            agregarAlCarrito(producto.id);

            Swal.fire({
                title: '¡Felicidades!',
                text: 'El producto se ah agregado con éxito.',
                imageUrl: `${producto.img}`,
                imageWidth: 300,
                imageHeight: 300,
                confirmButtonColor:'#87BBA2',
                imageAlt: 'Custom image'
              })
            

        })
       
    });
}
pintarCards();

function agregarAlCarrito(id) {
   

    let producto = productosStock.find(producto => producto.id === id);
    // console.log(producto);

    let productoEnCarrito = carrito.find(producto => producto.id === id );

    if (productoEnCarrito) {

        productoEnCarrito.cantidad++;

        console.log(carrito);

    } else {
        producto.cantidad = 1;

        carrito.push(producto);

        console.log(carrito);
    }

    pintarCarrito();
    calcularTotal();
    
}

function pintarCarrito() {

    let carritoCompra = document.querySelector('#carrito');

    carritoCompra.innerHTML = '';
    
    carrito.forEach((producto ,id)=> {

        let div = document.createElement('div');
        div.classList.add('row', 'py-3', 'mx-1', 'justify-content-center');

        div.innerHTML = `
            <div class="card col-sm-12 col-md-6 col-lg-4 mb-2 me-2" style="width:12rem">
               <img src="${producto.img}" class="mt-2 w-100 img-card" alt="producto 1 poncho hombre color azul talle L ">
                <div class="card-body">
                  <h3 class="card-title">${producto.nombre}</h3>
                  <p class="card-text">${producto.text}
                  <br>${producto.talle}</p>
                  <br>${producto.cantidad}
                  <br>$${producto.precio * producto.cantidad}</p>
                 <button class="btn btn-color w-100" id="${producto.id}">Eliminar Producto</button>
                </div>
            </div>
    `;
   

            div.querySelector('button').addEventListener('click', ()=>{

                Swal.fire({
                    title: 'Estas seguro?',
                    text: "¿Quieres eliminar el producto?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#87BBA2',
                    confirmButtonText: 'Eliminar'
                  }).then((result) => {
                    if (result.isConfirmed) {
    
                    eliminarProductoCarrito(id);
    
                      Swal.fire(
                        'Eliminado!',
                        'El producto se ah eliminado con exito'
                      )
                    }
                  })
                
        
            

            

         });
            carritoCompra.appendChild(div);
            calcularTotal();

            
    });     
   
};
pintarCarrito();

function eliminarProductoCarrito(id){
    carrito[id].cantidad--;

   carrito[id].cantidad === 0 && carrito.splice(id,1);



    //    alert('El producto fue eliminado con exito');

        // if(carrito[id].cantidad === 0){

        //     carrito.splice(id,1);
        //     alert('El producto fue eliminado con exito');
        // }

   
    pintarCarrito();
    calcularTotal();
}

function calcularTotal(){

    let total = 0;

    carrito.forEach((producto)=>{
    
        total += producto.precio * producto.cantidad;
    })

    // console.log(total);

    const t = document.getElementById('total');

    t.innerHTML = `<h5>El total de su compra es: $${total}</h5>`

    
 localStorage.setItem('carrito', JSON.stringify(carrito));
    

} 




