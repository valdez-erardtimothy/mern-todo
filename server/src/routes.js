let noteRoutes = require('./endpoints/notes');


/**
 * sets routes for the expressjs app
 * @param {Express} app 
 */
module.exports = (app) => {
  app.get('/notes', noteRoutes.list);
  app.get('/test', (req, res) => {
    res.send({ message: 'you are connected to mern-todo!' });
  });
}