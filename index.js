// Crear una instancia de la clase "ProductManager"
const productManager = new ProductManager();

// Llamada a "getProducts" recién creada la instancia, debe devolver un arreglo vacío []
const products = productManager.getProducts();
console.log(products); // []

// Llamada a "addProduct" con los campos especificados
try {
  const newProduct = productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
  console.log(newProduct); // { title: "producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: "abc123", stock: 25, id: 123456 }
} catch (error) {
  console.error(error);
}

// Llamada a "getProducts" nuevamente, debe aparecer el producto recién agregado
const products2 = productManager.getProducts();
console.log(products2); // [{ title: "producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: "abc123", stock: 25, id: 123456 }]

// Llamada a "addProduct" con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
try {
  const newProduct2 = productManager.addProduct({
    title: "producto prueba 2",
    description: "Este es otro producto prueba",
    price: 150,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 30,
  });
  console.log(newProduct2);
} catch (error) {
  console.error(error); // Error: Product with same code already exists
}

// Llamada a "getProductById" para buscar el producto recién agregado por su id
try {
  const product = productManager.getProductById(123456);
  console.log(product); // { title: "producto prueba", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: "abc123", stock: 25, id: 123456 }
} catch (error) {
  console.error(error);
}

// Llamada a "getProductById" para buscar un producto que no existe por su id
try {
  const product = productManager.getProductById(987654);
  console.log(product);
} catch (error) {
  console.error(error); // Error: Product not found
}