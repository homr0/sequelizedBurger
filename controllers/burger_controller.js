// Dependencies
const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
router.get("/", (req, res) => {
    db.Burger.findAll({}).then((data)=> {
        const hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    db.Burger.create(req.body).then((data) => {
        res.json(data);
    });
});

router.put("/api/burgers/:id", (req, res) => {
    db.Burger.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;
