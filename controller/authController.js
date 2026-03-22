  


   const bcrypt = require("bcryptjs");
   const jwt = require("jsonwebtoken");
   const User = require("../models/User");  //importing the user model defined in the model/user.js file


   const JWT_SECRET = process.env.JWT_SECRET;

    //---------- REGISTER------------

exports.register= async  (req, res) => {
    try {
        const { name, email, password ,role} = req.body;
 //VALIDATION
        
        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }
          

         if(!["recruiter","candidate"].includes(role)){
            return res.status(400).json({ message: "Invalid role" });
             }

        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 characters long"
            });
        }

        if (!email.includes("@")) {
            return res.status(400).json({ message: "Invalid email" });
        }

        // Check if user exists in MongoDB
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

      //HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        //CREATE NEWUSER IN MONGODB
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role

        });

        await newUser.save();

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
    };




    
// ---------LOGIN---------
exports.login= async (req, res) => {
    try{
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
  const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({
            message: "Email or Password is invalid"
        });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({
            message: "Email or Password is invalid"
        });
    }

    // Generate JWT
    const token = jwt.sign(
        { id: user._id ,
          role: user.role
        },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.status(200).json({
        message: "Logged in successfully",
        token
    });
    } catch(error) {
        res.status(500).json({message:"Server error"});
    }
};





