const Job = require("../models/job");


// -------- CREATE JOB --------
exports.createJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                job
            }
        });

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};



// -------- GET ALL JOBS --------
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();

        res.status(200).json({
            status: "success",
            length: jobs.length,
            data: {
                jobs
            }
        });

    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};



// -------- GET SINGLE JOB --------
exports.getJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({
                status: "fail",
                message: "Job not found"
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                job
            }
        });

    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};



// -------- UPDATE JOB --------
exports.updateJob = async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedJob) {
            return res.status(404).json({
                status: "fail",
                message: "Job not found"
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                job: updatedJob
            }
        });

    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};



// -------- DELETE JOB --------
exports.deleteJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);

        if (!job) {
            return res.status(404).json({
                status: "fail",
                message: "Job not found"
            });
        }

        res.status(204).json({
            status: "success",
            data: null
        });

    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        });
    }
};