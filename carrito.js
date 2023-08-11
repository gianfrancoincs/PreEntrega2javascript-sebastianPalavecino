
// Definición de objetos : teléfonos celulares

const motorolaG52 = {
  modelo: "Motorola G52",
  propiedades: {
    memoriaRam: "6GB",
    memoriaInterna: "128GB",
    colores: ["negro", "gris", "verde"],
    tamanoPantalla: "6.55 pulgadas",
    bateria: "6.000 mAh",
    precio: 120000,
    ubicaciones: ["buenos aires", "mendoza"]
  }
};

const samsungA04 = {
  modelo: "Samsung A04",
  propiedades: {
    memoriaRam: "4GB",
    memoriaInterna: "128GB",
    colores: ["negro", "gris", "verde"],
    tamanoPantalla: "6.5 pulgadas",
    bateria: "5.000 mAh",
    precio: 80000,
    ubicaciones: ["buenos aires", "mendoza"]
  }
};

const xiaomiRedmi9 = {
  modelo: "Xiaomi Redmi 9",
  propiedades: {
    memoriaRam: "4GB",
    memoriaInterna: "128GB",
    colores: ["negro", "gris", "verde"],
    tamanoPantalla: "6.53 pulgadas",
    bateria: "4.500 mAh",
    precio: 75000,
    ubicaciones: ["buenos aires", "mendoza"]
  }
};

const iPhone11 = {
  modelo: "iPhone 11",
  propiedades: {
    memoriaRam: "4GB",
    memoriaInterna: "256GB",
    colores: ["negro", "gris", "verde"],
    tamanoPantalla: "6 pulgadas",
    bateria: "4.700 mAh",
    precio: 250000,
    ubicaciones: ["buenos aires", "mendoza"]
  }
};

// Array que simula el catálogo de productos
const catalogoProductos = [motorolaG52, samsungA04, xiaomiRedmi9, iPhone11];

// Array que simula el carrito de compras
const carritoCompras = [];

// Función para filtrar productos por ubicación y color
function filtrarProductos(ubicacion, color) {
  return catalogoProductos.filter(producto =>
    producto.propiedades.ubicaciones.includes(ubicacion.toLowerCase()) && producto.propiedades.colores.includes(color.toLowerCase())
  );
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
  let carritoMensaje = "Productos en el carrito:\n\n";
  for (let producto of carritoCompras) {
    carritoMensaje += `${producto.modelo} - Precio: $${producto.propiedades.precio}\n`;
  }
  alert(carritoMensaje);
}

// Mostrar modelos de productos y permitir al cliente seleccionar uno
let opciones = "";
for (let i = 0; i < catalogoProductos.length; i++) {
  opciones += `${i + 1}. ${catalogoProductos[i].modelo}\n`;
}

const seleccionModelo = parseInt(prompt(`Elija el número del modelo que desea:\n\n${opciones}`));

if (seleccionModelo >= 1 && seleccionModelo <= 4) {
  const modeloElegido = catalogoProductos[seleccionModelo - 1];
  alert(`Ha elegido el modelo "${modeloElegido.modelo}".`);

  const ubicacionElegida = prompt("Elija una ubicación (Mendoza o Buenos Aires):");
  const colorElegido = prompt("Elija un color (negro, gris, verde):");

  const productosFiltrados = filtrarProductos(ubicacionElegida, colorElegido);

  if (productosFiltrados.length > 0) {
    const productoEncontrado = productosFiltrados[0];
    const cantidad = parseInt(prompt(`Cantidad de "${productoEncontrado.modelo}" que desea agregar al carrito:`));

    if (!isNaN(cantidad) && cantidad > 0) {
      for (let i = 0; i < cantidad; i++) {
        carritoCompras.push(productoEncontrado);
      }
      alert(`${cantidad} "${productoEncontrado.modelo}" ha(n) sido agregado(s) al carrito.`);
    } else {
      alert("Cantidad inválida. Por favor, ingrese un número válido.");
    }
  } else {
    alert("No hay productos disponibles con esa ubicación y color.");
  }

  // Mostrar contenido del carrito y calcular total
  mostrarCarrito();
  let total = 0;
  for (let producto of carritoCompras) {
    total += producto.propiedades.precio;
  }
  alert(`Total del carrito: $${total}`);
} else {
  alert("Opción inválida. Gracias por visitarnos.");
}

const continuar = confirm("¿Desea agregar más productos al carrito?");
 while (continuar);


