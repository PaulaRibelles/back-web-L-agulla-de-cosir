const { User, Client } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
                role_id: 2
            }
        )
        const newClient = await Client.create(
            {
                user_id: newUser.id
            }
        )

        return res.json(
            {
                success: true,
                message: "Register successfully",
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        )
    }
}


//LOGIN 


authController.login = async (req, res) => {
    try{
        
        const { email, password } = req.body;

        const user = await User.findOne(
            {
                where: {email: email}
            }
        );

        if(!user){
            return res.send('This email is wrong')
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch){
            return res.send('This password is wrong')
        }

        const token = jwt.sign(
        {
            userId: user.id,
            email: user.email,
            roleId: user.role_id
        },
        process.env.JWT_SECRET,
        {expiresIn: '90h'}
    );

    return res.json(
        {
            success: true,
            message: "Login successfully",
            token: token
        }
    )

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        )
    }
}


module.exports = authController;