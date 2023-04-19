const { User, Client } = require('../models');
const bcrypt = require('bcrypt');

const authController = {};

//REGISTER 

authController.register = async (req, res) => {
    try {
        const { name, surname, dni, city, phone, email, password } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        const newUser = await User.create(
            {
                name: name,
                surname: surname,
                dni: dni,
                city: city,
                phone: phone,
                email: email,
                password: encryptedPassword,
                role_id: 1
            }
        )
        const newClient = await Client.create(
            {
                user_id: newUser.id
            }
        )

        return res.json(newUser)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = authController;