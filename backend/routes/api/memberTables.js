const express = require("express");
const router = express.Router();

const { Member } = require("../../db/models")

router.get("/", async(req, res, next) => {
    try {
        const members = await Member.findAll();
        res.json({memberTables: members})
    } catch (e) {
        next(e)
    }
})


module.exports = router;
