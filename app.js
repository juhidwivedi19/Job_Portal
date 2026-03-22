/*
//FIRST:- Create A Server using express
const express=require("express");
const dotenv=require("dotenv").config(); //to load environment variables from a .env file into process.env, which is useful for managing configuration settings in a secure and flexible way. It allows you to keep sensitive information like database credentials, API keys, and other configuration details separate from your codebase, making it easier to manage different environments (development, testing, production) without hardcoding values in your application.
const bcrypt=require("bcryptjs"); //to hash passwords before storing them in the database, enhancing security by making it difficult for attackers to retrieve the original password even if they gain access to the stored hashes. It provides a simple and effective way to protect user credentials and is widely used in authentication systems.
const jwt=require("jsonwebtoken"); //to generate and verify JSON Web Tokens (JWTs) for authentication and authorization purposes. JWTs are a compact and self-contained way to securely transmit information between parties as a JSON object. They are commonly used in web applications to manage user sessions and protect routes by ensuring that only authenticated users can access certain resources.


const app=express();
app.use(express.json()); // To parse JSON bodies in incoming requests

  let users=[];
    //  let isLoggedIn=false; //replace with jwt token for better security and scalability

//CREATE ROUTES:- http + url
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Hello  World",status:200
    });
})



// 3 step //Use POST Routes for registration and login
// (1)first receive data from the client using req.body and then send response to the client using res.json
app.post("/register",(req,res)=>{  //REGISTER KO MONGODB KE ACCORDING REPLACE KARENGE USING AWAIT,TRY ETC
    const{name,email,password} =req.body; 

        //THERE WE WILL KEEP REGISTRATION ONLY FOR JOBSEEKER AND RECRUITER

        




//3(2) Validate data 
   if(!name || !email || !password){
    return res.status(400).json({
        message:"All fields are required"
    })
}

    if(password.length<8){
        return res.status(400).json({
            message:"Password must be at least 8 characters long"
        })
    }

 if (!email.includes("@")) {
    return res.status(400).json({ message: "Invalid email" });
  }

      // Store user in memory  important without storiing user data we cannot implement login functionality further i will use mongodb instead of this bcoz it is temporary storage and it will be lost when the server restarts but for now we are using this for simplicity
    users.push({ name, email, password });

        console.log(users);

    
        


  //response to the client
   res.status(200).json({
        message:"User registered successfully", 
    name,
    email
      
    });
    });

    //STEP 4 A:-ADD USER LOGIN

    app.post("/login",(req,res) =>{
        const{email,password} =req.body;

        //Validate Data
        if(!email || !password){
            return res.status(400).json({
                message:"All fields are required"
            })
        }

       const user=users.find(u=> u.email===email)
       if(!user || user.password!= password){
        return res.status(400).json({
            message:"Email or Password is invalid"
        });
       }

        //  isLoggedIn=true;
        // res.status(200).json({
        //     message:"Logged in successfully"
           
        // });
    })


    //AUTHENTIFICATION :- CUSTOM middleware
    const logger=(req,res,next)=>{  //we use logger to track every issue debugging purpose and also to track the request and response time
        console.log("Request received at", new Date().toISOString());
        next();
    }

    app.use(logger);  //Apply the logger middleware to all routes
    // app.use((req,res,next)=>{
    //     if(!isLoggedIn){
    //         return res.status(400).json({
    //             message:"Unauthorized"
    //         })
    //     }
    // })


    


//START THE SERVER
const port=3000;
app.listen(port,()=>{
    console.log('Server has started...');
})

*/



























const express=require("express");
const mongoose=require("mongoose");

const app=express();  //create app first

app.use(express.json());  //middleware  // To parse JSON bodies in incoming requests

const authRoutes=require("./routes/authRoutes.js");
app.use("/api/auth", authRoutes);

const jobRoutes=require("./routes/jobRoutes.js");
app.use("/api/jobs",jobRoutes);

const applicationRoutes = require("./routes/applicationRoutes");
app.use("/api/application", applicationRoutes);

const authMiddleware = require("./Middleware/authMiddleware");






//CONNECT TO MONGODB
mongoose.connect(process.env.CONN_STR)
.then(() => console.log("MongoDb connected"))
.catch((err) => console.log(err));  //We are connecting to MongoDB using the connection string stored in the environment variable CONN_STR. If the connection is successful, we log "MongoDb connected". If there is an error during the connection, we catch it and log the error message.




// let users = [];   //NOW WE WILL USE MONGODB INSTEAD OF THIS TEMPORARY IN-MEMORY STORAGE FOR USERS, SO THIS LINE IS COMMENTED OUT. WE WILL DEFINE A USER MODEL USING MONGOOSE TO INTERACT WITH THE DATABASE INSTEAD OF USING THIS ARRAY TO STORE USER DATA TEMPORARILY IN MEMORY. THIS CHANGE ALLOWS US TO PERSIST USER DATA ACROSS SERVER RESTARTS AND SCALE OUR APPLICATION MORE EFFECTIVELY.

//------ Home Route---------
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World",
        status: 200
    });
});


module.exports=app;

































