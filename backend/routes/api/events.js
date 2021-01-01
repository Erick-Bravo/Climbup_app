const express = require("express");
const router = express.Router();

const { Event } = require("../../db/models")

router.get("/", async(req, res, next) => {
    try {
        const events = await Event.findAll();
        res.json({events: events})
    } catch (e) {
        next(e)
    }
})


module.exports = router;
