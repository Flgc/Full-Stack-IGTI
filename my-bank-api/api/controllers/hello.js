module.exports = () => {
  const helloDB = require('../data/hello.json');
  const controller = {};

  controller.listhello = (req, res) => res.status(200).json(helloDB);

  return controller;
};
