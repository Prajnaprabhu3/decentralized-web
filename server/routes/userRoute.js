const router= require('express').Router();
const {registerUser, loginUser,getAllUser }=require('../controllers/userController');

router.post('/register',registerUser);
router.post('/login', loginUser);
router.get('/users/:id', getAllUser);


module.exports=router;