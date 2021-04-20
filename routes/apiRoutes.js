const express = require("express");
const router = express.Router();
const Workout = require("../models/index.js");


module.exports = function (app) {
    // middleware that is specific to this router
    // router.use(function timeLog(req, res, next) {
    //     console.log("Time: ", Date.now());
    //     next();
    // });

    router.get("/api/workouts", (req, res) => {
        Workout.find()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    router.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    router.put("/api/workouts/:id", async (req, res) => {
        db.Workout.findOneAndUpdate(
            {
                _id: req.params.id
            }, {
            $push: { exercises: req.body }
        })
            .then(dbWorkout => {
                console.log(dbWorkout);
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    router.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                // console.log(dbWorkout)
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};