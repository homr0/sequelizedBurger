// Dependencies
const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
router.get("/eaters", (req, res) => {
    db.Eater.findAll({
        include: [{
            model: db.Burger
        }]
    }).then((data) => {
        const hbsObject = {
            eaters: data
        };

        console.log(hbsObject.eaters)

        res.render("eaters", hbsObject);
    });
});

router.post("/api/eaters", (req, res) => {
    db.Eater.create(req.body).then((data) => {
        res.json(data);
    });
});

router.delete("/api/eaters/:id", (req, res) => {
    db.Eater.destroy({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.json(data);
    });
});

module.exports = router;