const db = require("../models");
const responseCode = require("../constant/responseCode");
const User =db.user;
const Vehicle =db.vehicle ;
const VehicleOwnership = db.vehicleOwnership;
const Op = db.Sequelize.Op;
const {v4 : uuidv4} = require('uuid');
const utils = require("../utility/utils")

exports.createUser = (req, res) => {

  if (!req.body.name || !req.body.surname || !req.body.email || !req.body.phone || !req.body.latitude || !req.body.longitude) {
    res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.CONTENT_MESSAGE });
    return;
  }
  const userIdUuid = uuidv4()

  const user = {
    user_uuid:userIdUuid,
    name: req.body.name,
    surname:req.body.surname,
    email:req.body.email,
    phone:req.body.phone,
    latitude:req.body.latitude,
    longitude:req.body.longitude
  };

  User.create(user)
  .then(data => {
    res.json({ resultCode:responseCode.SUCCESS, result:true, msg: responseCode.USER_REGISTER_MESSAGE,userRegisterData:data });
  })
  .catch(err => {
    res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.USER_REGISTER_MESSAGE_INVALID });
  });
};

exports.createVehicle = (req, res) => {

  if (!req.body.vehicleName || !req.body.vehicleBrand || !req.body.vehicleNumber) {
    res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.CONTENT_MESSAGE });
    return;
  }
  const vehicleIdUuid = uuidv4()

  const vehicle = {
    vehicle_uuid:vehicleIdUuid,
    vehicle_name: req.body.vehicleName,
    vehicle_brand:req.body.vehicleBrand,
    vehicle_number:req.body.vehicleNumber,
    isAssign:0
  };

  Vehicle.create(vehicle)
  .then(data => {
    res.json({ resultCode:responseCode.SUCCESS, result:true, msg: responseCode.VEHICLE_REGISTER_MESSAGE,vehicleRegisterData:data });
  })
  .catch(err => {
    res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.VEHICLE_REGISTER_MESSAGE_INVALID });
  });
};

exports.vehicle_available = (req, res) => {
  const { page, size } = req.query;

  const { limit, offset } = utils.getPagination(page, size);

  Vehicle.findAndCountAll({ where: {isAssign:0}, limit, offset })
  .then(data => {
    const response = utils.getPagingData(data, page, limit);
    res.json({ resultCode:responseCode.SUCCESS, result:true, msg: responseCode.VEHICLE_AVAILABLE,availableList:response });
  })
  .catch(err => {
    res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.VEHICLE_AVAILABLE_INVALID });
  });
};

exports.vehicles_occupied = (req, res) => {
  const { page, size, title } = req.query;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  const { limit, offset } = utils.getPagination(page, size);

  Vehicle.findAndCountAll({ where: {isAssign:1},condition, limit, offset })
  .then(data => {
    const response = utils.getPagingData(data, page, limit);
    res.json({ resultCode:responseCode.SUCCESS, result:true, msg: responseCode.VEHICLE_OCCUPIED,occupiedList:response });
  })
  .catch(err => {
    res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.VEHICLE_OCCUPIED_INVALID });
  });
};

exports.user_owned_vechicles = (req, res) => {
  const useruuId = req.body.user_uuid;

  User.findByPk(useruuId)
  .then(data => {
    if(data.user_uuid){
      res.json({ resultCode:responseCode.SUCCESS, result:true, msg: responseCode.USER_VEHICLE,userOwnedVehicle:data });
    }else{
      res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.USER_VEHICLE_UUID_INVALID,userOwnedVehicle:{} });
    }
  })
  .catch(err => {
    res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.USER_VEHICLE_INVALID });
  });

};

exports.assignVehicle = (req, res) => {

  if (!req.body.vehicle_uuid || !req.body.user_uuid) {
    res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.CONTENT_MESSAGE });
    return;
  }
  const vehicleIdUuid = uuidv4()

  const vehicleOwnership = {
    vehicle_Ownership_uuid:vehicleIdUuid,
    user_uuid: req.body.user_uuid,
    vehicle_uuid:req.body.vehicle_uuid,
    isDeleted :0
  };

  VehicleOwnership.count({
    where: {
      user_uuid:req.body.user_uuid,
      isDeleted:0
    }
  }).then(isAlreadyHaveVehicle =>{
    if(isAlreadyHaveVehicle == 0){
      Vehicle.count({
        attributes: ['isAssign'],
        where: {
          vehicle_uuid:req.body.vehicle_uuid,
          isAssign:1
        }
      }).then(isAlreadyAssign =>{
        if(isAlreadyAssign == 0){
          VehicleOwnership.create(vehicleOwnership)
          .then(data => {
            Vehicle.update(
              {isAssign: 1},
              {where: {vehicle_uuid: req.body.vehicle_uuid}})
              .then(isUpdate => {
                if (isUpdate == 1) {
                  res.json({ resultCode:responseCode.SUCCESS, result:false, msg: responseCode.ASSIGN_MESSAGE });
                } else {
                  res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.ASSIGN_INVALID });              }
                })
              })
            }else{
              res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.ASSIGN_VEHICLE_INVALID });
              message: `Already assign this vehicle to another user.`
            }
          });
        }
        else{
          res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.ASSIGN_USER_INVALID });
        }
      });
    };

exports.delete = (req, res) => {

  const vehicle_Ownership_uuid_id = req.body.vehicle_Ownership_uuid;
  console.log(vehicle_Ownership_uuid_id);

      VehicleOwnership.update
      (
        {isDeleted: 1},
        {where: {vehicle_Ownership_uuid: vehicle_Ownership_uuid_id}})
      .then(isDeletedFlag => {
        if (isDeletedFlag == 1) {
          res.json({ resultCode:responseCode.SUCCESS, result:false, msg: responseCode.DELETE_MESSAGE });
        } else {
          res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.DELETE_INDIVIDUAL_MESSAGE });
        }
      })
      .catch(err => {
        res.json({ resultCode:responseCode.ERROR, result:false, msg: responseCode.DELETE_INVALID });
      });
    };

