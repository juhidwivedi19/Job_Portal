const Application = require("../models/Application");

exports.applyJob = async (req,res)=>{  //You should also check if user already applied to the job.Otherwise a candidate could apply 100 times to same job.
 try{



  const existingApplication = await Application.findOne({
   userId:req.user.id,
   jobId:req.params.jobId
  });

  if(existingApplication){
   return res.status(400).json({
    message:"You have already applied to this job"
   });
  }
  
  const application = await Application.create({  

    userId:req.user.id,
    jobId:req.params.jobId,
    status:"pending"
  });

  res.status(201).json({
    message:"Job applied successfully",
    application
  });

 }catch(err){
  res.status(500).json({
    message:err.message
  });
 }
}


//GET APPLICATION OF LOGGED IN CANDIDATE

exports.getMyApplications = async (req, res) => {
 try {

   const applications = await Application.find({ userId: req.user.id })
        .populate("jobId");

   res.status(200).json({
     status: "success",
     count: applications.length,
     applications
   });

 } catch (err) {
   res.status(500).json({
     message: err.message
   });
 }
};



//RECRUITER SEE APPLICATION FOR A JOB

exports.getJobApplications = async (req,res)=>{
 try{

   const applications = await Application.find({
     jobId: req.params.jobId
   }).populate("userId","name email");

   res.status(200).json({
     status:"success",
     count:applications.length,
     applications
   });

 }catch(err){
   res.status(500).json({
     message:err.message
   });
 }
};



//RECRUITER UPDATE APPLICATION STATUS

exports.updateApplicationStatus = async (req,res)=>{
 try{

   const application = await Application.findByIdAndUpdate(
     req.params.id,
     { status: req.body.status },
     { new:true, runValidators:true }
   );

   res.status(200).json({
     status:"success",
     application
   });

 }catch(err){
   res.status(500).json({
     message:err.message
   });
 }
};