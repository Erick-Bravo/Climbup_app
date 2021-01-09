const express = require("express");
const router = express.Router();
const handler = require("express-async-handler")

const { Group, User, Member } = require("../../db/models")


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

router.post("/:groupId/join-group", handler(async(req, res) => {

    const { groupId, userId } = req.body

    
    const member = await Member.create({
        groupId,
        userId
    })

    return res.json(member);
}))



module.exports = router;
