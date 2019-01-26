// Dependencies
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Routes
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne([
        "burger_name", "devoured"
    ], [req.body.burger_name, req.body.devoured], (data) => {
        // Send back the id of the newly created burger.
        res.json({ id: data.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (data) => {
        if(data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
