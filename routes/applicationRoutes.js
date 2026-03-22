const express = require('express');
const applicationController = require('./../controller/applicationController');
const protect=require("../Middleware/protectMiddleware");
const {restrictTo}=require("../Middleware/restrictMiddleware")

const router=express.Router();

//candidate apply for job
router.route('/apply-job/:jobId')
    .post(protect, restrictTo("candidate"), applicationController.applyJob);

//candidate see their application
router.route("/my-applications")
    .get(protect, restrictTo("candidate"), applicationController.getMyApplications);


//recruiter see applicant for their jobs
router.route("/job-applications/:jobId")
    .get(protect, restrictTo("recruiter"), applicationController.getJobApplications);


//recruiter update application status
router.route("/application/:id")
    .patch(protect, restrictTo("recruiter"), applicationController.updateApplicationStatus);

module.exports = router;