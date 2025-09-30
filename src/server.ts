import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";


const port = 3000;
const app = express();
const prisma = new PrismaClient;

app.use(express.json());


app.get("/movies", async (_req, res) => {
  const movies = await prisma.movie.findMany({
    orderBy: { title: "asc"},
    include: {
      genres: true,
      languages: true
    }
  });
  res.json(movies);
});

app.post("/movies", async (req, res) => {

    const { title, release_date, genre_id, language_id, oscar_count } = req.body;

    try {

      const movieWithTheSameTitle = await prisma.movie.findFirst({
        where: { title: { equals: title, mode: "insensitive"}}
      });

      if (movieWithTheSameTitle) {
        return res.status(409).send({ message: "Já existe um filme com esse nome"});
      }
      
      await prisma.movie.create({
        data: {
          title,
          release_date: new Date(release_date),
          genre_id,
          language_id,
          oscar_count,
        }
      });
    } catch (error) {
      console.log(error);
     return res.status(500).send({message: "Falha ao cadastrar um filme"});
    }

    res.status(201).send();
});

app.put("/movies/:id", async (req, res) => {
  const id = Number(req.params.id);
  const data = {...req.body};

  try {
  const movie = await prisma.movie.findUnique({
    where: {id}
  });

  if (!movie) {
    return res.status(404).send({ message: "Filme nao encontrado."});
  }


    
    data.release_date = data.release_date ? new Date(data.release_date) : undefined;
    
    await prisma.movie.update({
      where: { id },
      data: data
    });
    
    return res.status(200).send({ messsage: "Dados atulizados com sucesso"});
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Falha ao registrar atualizaçao do filme"});
  }
});


app.delete("/movies/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const movie = await prisma.movie.findUnique({
      where: {id}
    });

    if(!movie) {
      return res.status(404).send({ message: "Filme nao encontrado"});
    }
     await prisma.movie.delete({
      where: {id}
    });

    return res.status(200).send({ message: "Filme deletado com sucesso"});

  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Erro ao tentar deletar um filme"});
  }

});

app.get("/movies/:genreName", async (req, res) => {
  
  const { genreName } = req.params;

  try {

    const filteredMovieByGenre = await prisma.movie.findMany({
      include: {
        genres: true,
        languages: true
      },
      where: {
        genres: {
          name: {equals: genreName, mode: "insensitive"}
        }
      }
    });
    return res.status(200).json(filteredMovieByGenre);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Falha ao filtrar o filme pelo genero"});
  }
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
  
});