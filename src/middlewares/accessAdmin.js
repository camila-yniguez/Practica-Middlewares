module.exports = (req, res, next) => {
      let admin = ["Ada", "Greta", "Vim", "Tim"];
      if (admin.includes(req.body.name)) {
            res.send("Bien");
      } else {
            res.send("No tiene acceso");
      }
      res.send(req.body.name);
};
