const { User, Dressmaker } = require("../models");
const adminController = {};

//CREATE Dressmakers

adminController.createDressmakers = async (req, res) => {
    try {

    const { speciality, image_url, user_id } = req.body;

    const newDressmaker = await Dressmaker.create({
        speciality: speciality,
        image_url: image_url,
        user_id: user_id,
    });

        return res.json({
            success: true,
            message: "New Dressmaker created successfully",
            data: newDressmaker,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Somenthing went wrong",
            error_message: error.message,
        });
    }
};

module.exports = adminController;


//UPDATE Dressmaker

adminController.updateDressmakers = async (req, res) => {
    try {
        const { speciality, image_url, user_id } = req.body;
        const dressmakersId = req.params.id;

        let updateFields = {
            speciality: speciality,
            image_url: image_url,
            user_id: user_id,
        };

        const updateDressmakers = await Dressmaker.update(
            updateFields,
            {
                where: {
                    id: dressmakersId
                }
            }
        );

        if (!updateDressmakers) {
            return res.send('Dressmaker not updated')
        }

        return res.send('Dressmaker updated')
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


//DELETE Dressmaker

adminController.deleteDressmakers = async (req, res) => {
    try {
        const dressmakersId = req.params.id;
        const deleteDressmakers = await Dressmaker.destroy({
            where: {
                id: dressmakersId
            },
        });

        if (!deleteDressmakers) {
            return res.send('Dressmaker not deleted')
        }

        return res.send('Dressmaker deleted successfully')
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


//GET Dressmakers
adminController.getDressmakers = async (req, res) => {
    try {
        const allDressmakers = await Dressmaker.findAll ({
            include: [
                {
                    model: User,
                    attributes:
                    { 
                    exclude: ["createdAt", "updatedAt"] 
                    },
                }
            ],
        });

        return res.json(allDressmakers);
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


