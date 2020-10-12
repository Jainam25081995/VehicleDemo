module.exports = {
  HOST:"localhost",
  USER:"root",
  PASSWORD:"root",
  DB:"vehicleDb",
  dialect:"mysql",
  pool:{
    max:50,
    min:0,
    acquires:3000,
    idle:10000
  }

};
