const Router = require('express').Router;const Router = require('express').Router;
const friendController = require('../controllers/friends-controller')
const authMiddleware = require('../middlewares/auth-middleware');
const router = new Router();


router.post('/subscribe', authMiddleware, friendController.subscribe);
router.post('/removeFriend', authMiddleware, friendController.removeFriend);
router.post('/acceptFriend', authMiddleware,  friendController.acceptFriend);
router.post('/dismissFriend', authMiddleware, friendController.dismissFriend);
router.post('/unsubscribe', authMiddleware, friendController.unsubscribe);


router.get('/getFriendsByName/:name', authMiddleware, friendController.allFriends);
router.get('/getSubscribersByName/:name',authMiddleware, friendController.allFriends);
router.get('/getFriendRequestsByName/:name', authMiddleware, friendController.allFriends);


module.exports = router