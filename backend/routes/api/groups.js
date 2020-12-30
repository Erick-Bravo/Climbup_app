const express = require("express");
const router = express.Router();

const { Group } = require("../../db/models")

router.get("/", async(req, res, next) => {
    try {
        const groups = await Group.findAll();
        res.json({groups: groups})
    } catch (e) {
        next(e)
    }
})


module.exports = router;
