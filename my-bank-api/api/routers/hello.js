module.exports = (app) => {
  const controller = require('../controllers/hello')();

  app.route('/api/v1/hello').get(controller.listhello);
};
