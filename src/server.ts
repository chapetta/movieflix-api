import express from "express";


const port = 3000;
const app = express();


app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
  
});