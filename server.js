require("dotenv").config({path: "./config.env"});   // Load env first

const app=require("./app");


const port = process.env.PORT || 3000;

// Start Server
app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});