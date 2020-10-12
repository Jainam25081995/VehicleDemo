module.exports = app => {
  const users = require("../controllers/controller.js");

  var router = require("express").Router();

  router.post("/createUser", users.createUser);

  router.post("/createVehicle", users.createVehicle);;

  router.get("/vehicles_occupied", users.vehicles_occupied);

  router.get("/vehicle_available", users.vehicle_available);

  router.get("/:user_uuid", users.user_owned_vechicles);

  router.post("/assignVehicle", users.assignVehicle)

  router.delete("/:vehicle_Ownership_uuid", users.delete)

  app.use('/api/v1', router);
};
