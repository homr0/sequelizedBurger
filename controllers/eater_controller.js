// Dependencies
const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
router.get("/eaters", (req, res) => {
    db.Eater.findAll({}).then((data) => {
        const hbsObject = {
            eaters: data
        };

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