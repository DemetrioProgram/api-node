const User = require('../models/User');
const mongoose = require('mongoose');

module.exports = {

    /**
     * Salva um novo User
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async save(req, res) {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).send({ msg: 'Algum campo esta vazio' });
            return;
        }

        try {

            let user = { username, password };

            const newUser = new User(user);

            const createdUser = await newUser.save();

            res.send(createdUser);
            
        } catch (error) {
            console.log('ERRO', error);
            res.status(400).send({ msg: 'Ops, ocorreu um erro.' });
        }
    },

    /**
     * Atualiza um User
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async update(req, res) {
        const { id, username, password } = req.body;
        
        if (!id || !username || !password) {
            res.status(400).send({ msg: 'Algum campo esta vazio' });
            return;
        }

        try {

            const updatedUser = await User.findByIdAndUpdate(
                { _id: mongoose.Types.ObjectId(id) },
                { $set: { username, password } },
                { returnOriginal: false },
            );

            res.send(updatedUser);
            
        } catch (error) {
            console.log('ERRO', error);
            res.status(400).send({ msg: 'Ops, ocorreu um erro.' });
        }
    },

}