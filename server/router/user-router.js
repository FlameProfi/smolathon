const Router = require('express').Router;
const authMiddleware = require('../middlewares/auth-middleware');
const router = new Router();
const userController = require('../controllers/user-controller');



router.post('/updatePhoto', authMiddleware, userController.uploadPhoto);
router.get('/getUsers', authMiddleware, userController.getUsers);

router.get('/getUserByName/:name', authMiddleware, userController.getUserByName);


module.exports = router