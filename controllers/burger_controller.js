// Dependencies
const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
router.get("/", (req, res) => {
    db.Burger.findAll({
        include: [{
            model: db.Eater
        }],

        order: [
            ["burger_name", "ASC"]
        ]
    }).then((data)=> {
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
    db.Eater.findOrCreate({
        where: {
            eater_name: req.body.eater_name
        }
    }).then((eater) => {
        db.Burger.update({
            devoured: req.body.devoured,
            EaterId: eater[0].dataValues.id
        }, {
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        });
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;
