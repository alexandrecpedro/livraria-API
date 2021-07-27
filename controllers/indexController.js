const { Livros } = require('../models');

const indexController = {
    index: async (req, res) => {
        const livros = await Livros.findAll();
        return res.status(200).json(livros);
    },
    mostraLivro: async (req, res) => {
        let { id } = req.params;
        const livro = await Livros.findByPk(id);
        return res.status(200).json(livro);
    },
    criarLivro: async (req, res) => {
        let {titulo, quantidade_paginas, autor, ano_lancamento, estoque} = req.body;
        const livro = await Livros.create({titulo, quantidade_paginas, autor, ano_lancamento, estoque})
        
        .then(res.status(200).json({
            status: 'OK',
            message: 'Cadastrado com sucesso!',
            livro: `${titulo}`
        }))
    },
    atualizarLivro: async (req, res) => {
        let { id } = req.params;
        let {titulo, quantidade_paginas, autor, ano_lancamento, estoque} = req.body;
        const livro = await Livros.update({titulo, quantidade_paginas, autor, ano_lancamento, estoque}, {where: {id}})
        
        .then(res.status(200).json({
            status: 'OK',
            message: 'Editado com sucesso!',
            livro: `${titulo}`
        }))
    },
    deletarLivro: async (req, res) => {
        let { id } = req.params;
        const livro = await Livros.destroy({where: {id}});
        return res.status(200).json(livro);
    }
}

module.exports = indexController