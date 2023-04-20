const { Appointment, Client, Dressmaker, User} = require("../models");
const appointmentController = {};

//CREATE Appointments

appointmentController.createAppointments = async (req, res) => {
    try {
        const { date, dressmaker_id } = req.body;

        const client = await Client.findOne({where: {
            user_id : req.userId
        }})

        if (!client){
            return res.send("You are not a client");
        }

        const newAppointment = await Appointment.create({
            date: date,
            dressmaker_id: dressmaker_id,
            client_id: client.id
        });

    return res.json(newAppointment);
    } catch (error) {
    return res.status(500).send(error.message);
    }
};


//UPDATE Appointments


appointmentController.updateAppointments = async (req, res) => {
    try {
        const { date, dressmaker_id } = req.body;
        const appointmentId = req.params.id;

        let updateFields = {
            date: date,
            dressmaker_id: dressmaker_id
        }

        if (!appointmentId) {
            return res.send('Appointment not found');
        }

        const updatedAppointment = await Appointment.update(
            updateFields,
            {
                where: {
                    id: appointmentId
                }
            }
        );
        
        if (!updatedAppointment){
            return res.send("Appointment not updated")
        }
        return res.send("Appointment updated succesfuly");
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
};


//DELETE Appointments


appointmentController.deleteAppointments = async (req, res) => {
    try {
        const appointmentId = req.params.id;

        const deletedAppointment = await Appointment.destroy({
        where: {
            id: appointmentId
        },
    });

    if (!deletedAppointment) {
        return res.send("Appointment not found");
    }

    return res.send("Appointment deleted successfully");
    } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
    }
};


module.exports = appointmentController;