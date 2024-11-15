document.addEventListener("DOMContentLoaded", () => {
    fetch("productos.json")
        .then(response => response.json())
        .then(data => mostrarProductos(data))
        .catch(error => console.error('Error al cargar los productos:', error));
});

let carrito = [];

function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos');
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img class="img-card" src="${producto.imagen}" alt="${producto.nombre}" 
                 style="width: ${producto.ancho}; height: ${producto.alto};" />
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Stock: ${producto.stock}</p>
            <p class="price">$${producto.precio}</p>
            <button class="agregar-carrito" data-id="${producto.nombre}" data-precio="${producto.precio}" data-nombre="${producto.nombre}">Agregar al Carrito</button>
        `;
        contenedor.appendChild(card);
    });

    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });
}

function agregarAlCarrito(event) {
    const producto = {
        nombre: event.target.dataset.nombre,
        precio: parseFloat(event.target.dataset.precio),
        cantidad: 1
    };

    const productoExistente = carrito.find(p => p.nombre === producto.nombre);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push(producto);
    }

    actualizarCarrito();
    mostrarModalCarrito();
}

function actualizarCarrito() {
    const productosCarrito = document.getElementById('productosCarrito');
    const totalElement = document.getElementById('total');

    productosCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const itemCarrito = document.createElement('div');
        itemCarrito.classList.add('carrito-item');
        itemCarrito.innerHTML = `
            <div class="producto-detalle">
                <p class="producto-nombre">${producto.nombre} - $${producto.precio}</p>
                <div class="cantidad-control">
                    <button class="restar-cantidad" data-nombre="${producto.nombre}">-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button class="sumar-cantidad" data-nombre="${producto.nombre}">+</button>
                </div>
            </div>
        `;
        productosCarrito.appendChild(itemCarrito);
    });

    const total = carrito.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0);
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function mostrarModalCarrito() {
    const modal = document.getElementById('carritoModal');
    modal.style.display = 'block';

    const botonesSumar = document.querySelectorAll('.sumar-cantidad');
    botonesSumar.forEach(boton => {
        boton.addEventListener('click', sumarCantidad);
    });

    const botonesRestar = document.querySelectorAll('.restar-cantidad');
    botonesRestar.forEach(boton => {
        boton.addEventListener('click', restarCantidad);
    });
}

function sumarCantidad(event) {
    const nombreProducto = event.target.dataset.nombre;
    const producto = carrito.find(p => p.nombre === nombreProducto);
    if (producto) {
        producto.cantidad++;
        actualizarCarrito();
    }
}

function restarCantidad(event) {
    const nombreProducto = event.target.dataset.nombre;
    const producto = carrito.find(p => p.nombre === nombreProducto);
    if (producto) {
        producto.cantidad--;
        if (producto.cantidad === 0) {
            carrito = carrito.filter(p => p.nombre !== nombreProducto); // Eliminar producto si la cantidad es cero
        }
        actualizarCarrito();
    }
}

document.getElementById('seleccionarMas').addEventListener('click', () => {
    const modal = document.getElementById('carritoModal');
    modal.style.display = 'none';
});

document.getElementById('procederPago').addEventListener('click', () => {
    mostrarModalPago();
});

function mostrarModalPago() {
    const modal = document.getElementById('pagoModal');
    modal.style.display = 'block';
}

document.getElementById('closeModal').addEventListener('click', () => {
    const modal = document.getElementById('carritoModal');
    modal.style.display = 'none';
});

document.getElementById('closePagoModal').addEventListener('click', () => {
    const modal = document.getElementById('pagoModal');
    modal.style.display = 'none';
});

document.getElementById('formPago').addEventListener('submit', (event) => {
    event.preventDefault();

    const nombreTarjeta = document.getElementById('nombreTarjeta').value;
    const numeroTarjeta = document.getElementById('numeroTarjeta').value;
    const fechaExpiracion = document.getElementById('fechaExpiracion').value;
    const cvv = document.getElementById('cvv').value;

    console.log('Datos de pago:', { nombreTarjeta, numeroTarjeta, fechaExpiracion, cvv });

    alert('Pago realizado con éxito');
    carrito = [];
    actualizarCarrito();
    document.getElementById('pagoModal').style.display = 'none';
});

