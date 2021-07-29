const api = require('../config/default')

const usuarioController = {
    buscarCep: (req, res) => {
        const { cep } = req.params;

        if (cep.length !== 8) {
            return res.status(404).send('CEP inválido!');
        };

        api.get(`/ws/${cep}/json/`).then((response) => {
            if (response.data.erro !== undefined) {
                return res.status(400).send('Erro: CEP não encontrado!')
            }
            return res.json(response.data);
        }).catch((err) => {
            if (err) {
                return res.status(400).json({ message: 'Erro' })
            }
        });
    }
}

module.exports = usuarioController;