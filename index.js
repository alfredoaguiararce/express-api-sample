// traemos a express
const express = require("express");

// creamos una aplicación
const app = express();

//le decimos el puerto en que queremos que corra la aplicación
const port = 3000;

//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get ("/", (req, res) => {
  res.send("hola mi server en express");
});

/* The code is defining a new route in the Express application. When a GET request is made to the
'/nueva-ruta' endpoint, the server will respond with the message 'Hola, soy una nueva ruta'. This
allows clients to access this specific route and receive the specified response. */
app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
});

/* The code is defining a new route in the Express application. When a GET request is made to the
'/products' endpoint, the server will respond with a JSON object containing the name 'alfredo' and
the price 1000. This route is specifically designed to provide information about a product named
'alfredo' with a price of 1000 when accessed by clients. */
app.get('/products', (res, req) => {
    req.json([
        {
            name: 'alfredo',
            price: 1000
        },
        {
            name: 'alfredo',
            price: 1000
        },
        {
            name: 'alfredo',
            price: 1000
        },
        {
            name: 'alfredo',
            price: 1000
        },
        {
            name: 'alfredo',
            price: 1000
        },
        {
            name: 'alfredo',
            price: 1000
        },
        {
            name: 'alfredo',
            price: 1000
        },
        {
            name: 'alfredo',
            price: 1000
        },
    ]);
});

/* This code snippet defines a route in the Express application that expects a GET request to a path
like '/products/:id', where ':id' is a dynamic parameter that can be any value. When a request is
made to this route, the server will extract the value of the 'id' parameter from the request
parameters using `req.params`, and then respond with a JSON object containing the name 'Product 1',
a price of 1000, and the extracted 'id' value. This route is useful for retrieving specific product
information based on the provided 'id' parameter. */
app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    res.json({
        name: 'Product 1',
        price: 1000,
        id: id
    })
});

/* This code snippet defines a route in the Express application that expects a GET request to a path
like '/categories/:categoryId/products/:productId'. This route is structured to handle requests for
specific product information within a particular category. */
app.get('/categories/:categoryId/products/:productId', (req, res) => {
    const {categoryId, productId} = req.params;
    res.json({
        name: 'Product 1',
        price: 1000,
        ProductId: productId,
        CategoryId: categoryId
    })
});

//le decimos a la aplicación en que puesto escuchar
// además creamos un callback que nos avisará cuando esté corriendo
app.listen(port, () => {
  console.log("mi port" + port);
});