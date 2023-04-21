const { User } = require("../models")
const bcrypt = require('bcrypt');

const userController = {};

//PROFILE

userController.profile = async(req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findByPk(userId)

        return res.json(user);
    } catch (error) {
        return res.status(500).send(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        )
    }
}


//UPDATE Profile

userController.updateUser = async (req, res) => {
    try {
        const { name, password, surname, city, phone, email } = req.body;
        const userId = req.userId;

        let updateFields = {
            name: name,
            surname: surname,
            city: city,
            phone: phone,
            email: email,
        };

        if (password) {
            const encryptedPassword = bcrypt.hashSync(password, 10);
            updateFields.password = encryptedPassword;
        }

        const updateUser = await User.update(
            updateFields,
            {
                where: {
                    id: userId
                }
            }
        );

        if (!updateUser) {
            return res.send('User not updated')
        }

        return res.send('User updated')
    } catch (error) {
        return res.status(500).send(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        )
    }
};


//DELETE Profile


userController.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const deletedUser = await User.destroy({
        where: {
            id: userId
        },
    });

    if (!deletedUser) {
        return res.send("User not found");
    }

    return res.send("User deleted successfully");
    } catch (error) {
    console.error(error);
    return res.status(500).send(
        {
            success: false,
            message: "Somenthing went wrong",
            error_message: error.message
        }
    );
    }
};


module.exports = userController;