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
        return res.status(500).send(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        );
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
            return res.status(500).send(
                {
                    success: false,
                    message: "Somenthing went wrong",
                    error_message: error.message
                }
            );
    }
};


// //DELETE Appointments


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
        return res.status(500).send(
            {
            success: false,
            message: "Somenthing went wrong",
            error_message: error.message
            }
        );
    }
};


// //GET Client Appointment


appointmentController.getClientAppointments = async (req, res) => {
    try{

        const client = await Client.findOne({where: {user_id: req.userId}})

        if(!client){
            return res.send("You are not a client")
        }

        const clientAppointment = await Appointment.findAll({
            where: {client_id: client.id},
            include: [
                {
                    model: Client,
                    attributes:
                    {
                        exclude: ["id","user_id","client_id", "adress","createdAt", "updatedAt"]
                    }
                },
                {
                    model: Dressmaker,
                    attributes: 
                    {
                        exclude: ["id","user_id", "dressmaker_id", "createdAt", "updatedAt"]
                    },
                        include:
                        {
                            model: User,
                            attributes: {
                                exclude: ["id","password", "role_id", "user_id", "city", "dni", "createdAt", "updatedAt"]
                            }
                        }
                },
            ],
            attributes: {
                exclude: ["role_id", "client_id", "dressmaker_id", "createdAt", "updatedAt"]
            }
        });

    return res.json(clientAppointment);
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


// //GET Dressmaker Appointment 


appointmentController.getDressmakerAppointments = async (req, res) => {
    try {

        const dressmaker = await Dressmaker.findOne({where: {user_id: req.userId}})

        if(!dressmaker){
            return res.send("You are not a dressmaker")
        }
        console.log(dressmaker);
        const appointments = await Appointment.findAll({
            where: { dressmaker_id: dressmaker.id },
            include: [
                {
                    model: Client,
                    attributes:
                    { 
                        exclude: ["id","user_id","client_id", "adress","createdAt", "updatedAt"]
                    },
                        include:
                        {
                            model: User,
                            attributes: { 
                                exclude: ["id","user_id", "role_id", "adress","password", "createdAt", "updatedAt"]
                            }
                        }
                },
                {
                    model: Dressmaker,
                    attributes:
                    { 
                        exclude: ["id","user_id", "dressmaker_id", "createdAt", "updatedAt"]
                    },
                        include: 
                        {
                            model: User,
                            attributes: { 
                                exclude: ["id","password", "role_id", "user_id", "city", "dni", "createdAt", "updatedAt"]
                            }
                        }
                },
            ],
            attributes: {
                exclude: ["role_id", "client_id", "dressmaker_id", "createdAt", "updatedAt"]
            }
    });

    return res.json(appointments);
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


// //GET All Appointments


appointmentController.getAllAppointments = async (req, res) => {
    try{
        const appointments = await Appointment.findAll({
            include: [
                {
                    model: Client,
                    attributes: 
                    { 
                    exclude: ["createdAt", "updatedAt"] 
                    },
                        include: 
                        {
                            model: User,
                            attributes: { 
                                exclude: ["password", "createdAt", "updatedAt"] 
                            },
                        },
                },
                {
                    model: Dressmaker,
                    attributes:
                    { 
                    exclude: ["user_id", "createdAt", "updatedAt"] 
                    },
                        include: 
                        {
                            model: User,
                            attributes: { 
                                exclude: ["password", "createdAt", "updatedAt"] 
                            },
                        },
                },
            ],
        });

    return res.json(appointments);
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
}


module.exports = appointmentController;