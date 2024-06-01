import express from "express";

const app = express();

const PORT = 1000;

app.get("/", (request, response) => {
  response.status(201).send({ text: "Hello world!" });
});

app.get("/api/users", (request, response) => {
  response.send([
    { id: 1, name: "Aaron" },
    { id: 2, name: "Monica" },
    { id: 3, name: "Anastasia" },
    { id: 4, name: "Sofia" },
  ]);
});

app.get("/api/products", (request, response) => {
  response.send([
    { product_id: 1, product_name: "Fridge", product_price: "9.99$" },
    { product_id: 2, product_name: "Microwave", product_price: "9.99$" },
    { product_id: 3, product_name: "Chicken breast", product_price: "9.99$" },
    { product_id: 4, product_name: "Sofa", product_price: "9.99$" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
