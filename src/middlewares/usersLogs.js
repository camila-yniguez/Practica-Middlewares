const fs = require("fs");
const path = require("path");
module.exports = (req, res, next) => {
      fs.appendFileSync(path.join(__dirname, "..", "data", "userLogs.txt"), `El ususario ingreso ala ruta: ${req.url} \n`);

      next();
};
