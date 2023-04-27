const { Dressmaker, User } = require("../models");
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
