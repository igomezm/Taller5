var express = require('express');
var router = express.Router();
const userController = require ('../controllers/user.controller'); 
/**
 * GET Route to list all users
 */
router.get('/', userController.findAllUsers);
/**
 * GET Route to find user by id
 */
router.get('/:idUser', userController.findOneUser);
/**
 * POST Route to create user
 */
router.post ('/',userController.createUser);

/**
 * PUT Route to update an user by id
 */
router.put ('/:idUser',userController.updateUser);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:username',userController.deleteUserByUsername);
/**
 * DELETE Route to delete all users
 */
router.delete ('/',userController.deleteAllUsers);

router.post('/login',userController.login);


/**
 * TASK:
 * ADD THE MISSING ROUTES ______________________________________________________ 
 */

// Export router
module.exports = router;

