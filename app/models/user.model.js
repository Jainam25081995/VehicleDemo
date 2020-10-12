
module.exports = (sequelize, Sequelize,DataTypes  ) => {
  const User = sequelize.define("user", {
    user_uuid:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    name: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    latitude: {
      type: Sequelize.DECIMAL(11,8)
    },
    longitude: {
      type: Sequelize.DECIMAL(11,8)
    }
  });

  return User;
};
