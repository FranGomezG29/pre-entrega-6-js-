// pre entrega 6
const productos = [
  { nombre: "Cuaderno A4", precio: 1500, stock: 20, categoria: "Papeleria" },
  { nombre: "Lapicera azul", precio: 400, stock: 50, categoria: "Escritura" },
  { nombre: "Resaltador", precio: 800, stock: 15, categoria: "Escritura" },
  { nombre: "Calculadora", precio: 12000, stock: 5, categoria: "Tecnologia" },
  {nombre: "Mochila escolar", precio: 25000, stock: 3, categoria: "Accesorios",},
  { nombre: "Cartuchera", precio: 3500, stock: 10, categoria: "Accesorios" },
];

let continuar = true;

console.table(productos);

while (continuar) {
  let opcion = Number(
    prompt(
      "¿Qué querés hacer?" +
        "\n1. Buscar producto por nombre" +
        "\n2. Filtrar productos por rango de precio" +
        "\n3. Ver valor total del inventario" +
        "\n0. Salir",
    ),
  );

  switch (opcion) {
    case 1:
      let productoABuscar = prompt("que producto necesitas?");

      let productoEncontrado = productos.find(
        (producto) =>
          producto.nombre.toUpperCase().trim() ==
          productoABuscar.toUpperCase().trim(),
      );

      if (productoEncontrado) {
        console.log(
          "El precio de ese producto es " + productoEncontrado.precio,
        );
      } else {
        console.log("producto no disponible");
      }
      break;
    case 2:

    let precioMinimo = Number(prompt("Ingrese el precio minimo"));
    let precioMaximo = Number(prompt("Ingrese el precio máximo"));

    const productosFiltrados = productos.filter(
        (el) => el.precio >= precioMinimo && el.precio <= precioMaximo,
    );
    console.log(productosFiltrados);
    break;
    case 3:

     const precioTotal = productos.reduce((total, prod) => total + prod.precio * prod.stock, 0);
     console.log(precioTotal);




      break;
    case 0:
      continuar = false;
      break;
    default:
      console.log("Opción inválida");
  }
}
