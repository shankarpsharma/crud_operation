const express=require('express');
const router=express.Router();

const controller=require('../controller/crud');

router.get('/',controller.details);
router.post('/create',controller.create);
router.put('/:id',controller.update);
router.delete('/:id',controller.delete);

module.exports=router;
