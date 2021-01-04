const express = require("express");
const router = express.Router();
const handler = require("express-async-handler")

const { Group, User } = require("../../db/models")


router.get("/", handler(async(req, res) => {

        const groups = await Group.findAll();
        res.json({ groups: groups })

}))

router.get("/:groupId/members", handler(async (req, res) => {
    const { groupId } = req.params
    
    const members = await Group.findOne({
        where: { id: groupId },
        include: User
    })
    res.json({ members })
}))


module.exports = router;
