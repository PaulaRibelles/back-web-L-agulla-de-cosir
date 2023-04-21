const isAdmin = (req, res, next) => {
    try{
        const admin = 1;
        if(req.roleId !== admin) {
            return res.send('You have not permission');
        }
        next();
    }catch (error) {

        return res.status(500).send(error.message)
    }
}

module.exports = isAdmin;