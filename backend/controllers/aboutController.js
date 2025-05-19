const About = require("../models/About");

const getAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    res.send(about);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getAbout };
