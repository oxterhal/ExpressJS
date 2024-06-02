import express from "express";

const app = express();

const PORT = 1000;

const MockUsers = [
  { id: 1, name: "aaron" },
  { id: 2, name: "monica" },
  { id: 3, name: "anastasia" },
  { id: 4, name: "sofia" },
  { id: 5, name: "battugs" },
  { id: 6, name: "magnolia" },
  { id: 7, name: "express" },
];
app.get("/", (request, response) => {
  response.status(201).send({ text: "Hello world!" });
});

app.get("/api/users", (request, response) => {
  console.log(request.query);

  const {
    query: { filter, value },
  } = request;

  if (filter && value)
    return response.send(
      MockUsers.filter((user) => user[filter].includes(value))
    );

  return response.send(MockUsers);
});

app.get("/api/users/:id", (request, response) => {
  console.log(request.params);
  const parsedId = parseInt(request.params.id);
  console.log(parsedId);
  if (isNaN(parsedId)) {
    return response.status(400).send({ msg: "Bad request. Invalid ID" });
  }
  const findUser = MockUsers.find((user) => user.id === parsedId);

  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
});

app.get("/api/products", (request, response) => {
  response.send([
    { product_id: 101, product_name: "Fridge", product_price: "9.99$" },
    { product_id: 102, product_name: "Microwave", product_price: "9.99$" },
    { product_id: 103, product_name: "Chicken breast", product_price: "9.99$" },
    { product_id: 104, product_name: "Sofa", product_price: "9.99$" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
