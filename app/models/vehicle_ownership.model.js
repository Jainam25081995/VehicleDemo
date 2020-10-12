module.exports = (sequelize, Sequelize) => {
  const Vehicle_Ownership = sequelize.define("vehicleOwnership", {
    vehicle_Ownership_uuid :{
      type:Sequelize.STRING,
      allowNull:false,
      primaryKey:true
    },
    user_uuid: {
      type: Sequelize.STRING
    },
    vehicle_uuid: {
      type: Sequelize.STRING
    },
    isDeleted: {
      type: Sequelize.BOOLEAN
    }
  });

  return Vehicle_Ownership;
};
