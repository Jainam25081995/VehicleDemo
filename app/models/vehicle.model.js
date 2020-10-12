module.exports = (sequelize, Sequelize) => {
  const Vehicle = sequelize.define("vehicle", {
    vehicle_uuid :{
      type:Sequelize.STRING,
      allowNull:false,
      primaryKey:true
    },
    vehicle_name: {
      type: Sequelize.STRING
    },
    vehicle_brand: {
      type: Sequelize.STRING
    },
    vehicle_number: {
      type: Sequelize.STRING
    },
    isAssign: {
      type: Sequelize.INTEGER
    }
  });

  return Vehicle;
};
