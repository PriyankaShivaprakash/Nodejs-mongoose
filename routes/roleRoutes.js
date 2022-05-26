const express =require('express')
const router=express.Router();
const Roles=require('../model/roleModel')
const role_Controller=require('../controller/roleController')

router.post('/create',role_Controller.role_create);
router.get('/:id',role_Controller.role_details);
router.put('/:id/update',role_Controller.role_update);
router.delete('/:id/delete',role_Controller.role_delete);

module.exports = router;