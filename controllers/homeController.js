const { json } = require("body-parser");
const homemodel = require("../models/home");
module.exports = {
  details: async (req, res) => {
    console.log(req.headers);
    const { id } = req.params;
    console.log("params", id);
    console.log(req.body)
    homemodel.address(req, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
};
