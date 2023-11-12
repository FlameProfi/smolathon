const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const gameController = require('../controllers/game-controller');
const friendController = require('../controllers/friends-controller')
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

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
router.post('/updatePhoto', authMiddleware, userController.uploadPhoto);


router.post('/addFriend', authMiddleware, friendController.addFriend);
router.post('/removeFriend', authMiddleware, friendController.removeFriend);
router.post('/acceptFriend', authMiddleware,  friendController.acceptFriend);
router.post('/dismissFriend', authMiddleware, friendController.dismissFriend);
router.get('/getFriendsByUserName/:name', authMiddleware, friendController.allFriends);
router.get('/getSubscribeByUsername/:name',authMiddleware, friendController.allFriends);
router.get('/getRequestByUserName/:name', authMiddleware, friendController.allFriends);


router.get('/getMonumentInfo', gameController.getMonument);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/usersRating', authMiddleware, gameController.getRating);



module.exports = router
