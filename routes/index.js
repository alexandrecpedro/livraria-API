const express = require("express");
const indexController = require("../controllers/indexController");
const usuarioController = require("../controllers/usuarioController");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Listar Livros - http://localhost:3000/livros
router.get('/livros', indexController.index);

// Mostrar 1 Livro - http://localhost:3000/livros/:id
router.get('/livros/:id', indexController.mostraLivro);

// Novo registro - http://localhost:3000/livros/novo
router.post('/livros/novo', indexController.criarLivro);

// Atualiza Livro - http://localhost:3000/livros/:id
router.put('/livros/:id', indexController.atualizarLivro);

// Deleta Livro - http://localhost:3000/livros/:id
router.put('/livros/:id', indexController.deletarLivro);

// Buscar CEP - http://localhost:3000//usuario/buscar/:cep
router.get('/usuario/buscar/:cep', usuarioController.buscarCep);


module.exports = router;