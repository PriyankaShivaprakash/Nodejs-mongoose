const express =require('express')
const router=express.Router();
const Users=require('../model/userModel')
const user_Controller=require('../controller/userController')

router.post('/create',user_Controller.user_create);
router.get('/:id',user_Controller.user_details);
router.put('/:id/update',user_Controller.user_update);
router.delete('/:id/delete',user_Controller.user_delete);

module.exports = router;