const Router = require('express').Router;const Router = require('express').Router;
const authController = require('../controllers/auth-controller')
const router = new Router();



router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/restore', userController.restore);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);

module.exports = router