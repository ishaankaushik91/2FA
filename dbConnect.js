import mongoose from "mongoose";
mongoose.set(`strictQuery`, false);

async function DBconnect()
{
    try {
        
        await mongoose.connect("UR_DB_URL");
        console.log('DB Connected');
    } catch (error) {
        console.log(error);
    }
}

DBconnect();