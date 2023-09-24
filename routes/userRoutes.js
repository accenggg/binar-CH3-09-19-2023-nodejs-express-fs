const express = require("express");

const userController = require(`${__dirname}/../controllers/usersController`);

const router = express.Router();

router.param("id", userController.checkId);

router
    .route("/")
    .get(userController.getAllUsers)
    .post(
        userController.checkBody,
        userController.createUser
    );

router
    .route("/:id")
    .get(userController.getUserById)
    .patch(
        userController.checkBody,
        userController.editUser
    )
    .delete(userController.removeUser);

module.exports = router;
