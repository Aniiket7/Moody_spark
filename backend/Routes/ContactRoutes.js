const express = require('express');
const router = express.Router();

const contact_table = require("../Models/ContactModel")


const contact = async (req, res) => {
    const { name, mail, message } = req.body;

    if (!name || !mail || !message) {
        res.status(400).json({
            "error":"please fill all"
        })
    }
    
    const contact_obj = await contact_table.create({ // craeting user in db
        name, mail, message
    }

    );

    if (contact_obj) {
        res.status(201).json({
            _id: contact_obj._id,
            name: contact_obj.name,
            mail: contact_obj.mail,
            message: contact_obj.message
        })

    }
    else{
        res.status(400);
        throw new error("failed to create user");

    }


}

router.post("/", contact)

module.exports = router;