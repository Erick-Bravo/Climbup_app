const express = require("express");
const router = express.Router();

const handler = require("express-async-handler")

const { Member } = require("../../db/models")

router.get("/", handler(async(req, res) => {

        const members = await Member.findAll();
        res.json({memberTables: members})

}))

// const joinGroup = async(details, userId) => {
//     const member = await Member.create({

//     })
// }

router.post("/:id", handler(async(req, res) => {

        const members = await Member.create();
        res.json({memberTables: members})

}))


module.exports = router;
