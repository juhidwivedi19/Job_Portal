const express = require('express');
const jobController = require('./../controller/jobController');
const protect=require("../Middleware/protectMiddleware");
const {restrictTo}=require("../Middleware/restrictMiddleware");

const router = express.Router();



router.route('/')
    .get(jobController.getAllJobs)
    .post(protect,restrictTo("recruiter"), jobController.createJob)


router.route('/:id')
    .get(jobController.getJob)
    .patch(protect, restrictTo("recruiter"), jobController.updateJob)
    .delete(protect, restrictTo("recruiter"), jobController.deleteJob)

module.exports = router;