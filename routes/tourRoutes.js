const express = require("express");

const tourController = require(`${__dirname}/../controllers/toursController`);

const router = express.Router();

router.param("id", tourController.checkId);

router
    .route("/")
    .get(tourController.getAllTours)
    .post(
        tourController.checkBody,
        tourController.createTour
    );

router
    .route("/:id")
    .get(tourController.getTourById)
    .patch(
        tourController.checkBody,
        tourController.editTour
    )
    .delete(tourController.removeTour);

module.exports = router;
