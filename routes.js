import express from "express";
import NodeCache from "node-cache";
import People from "./Model.js";
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let myCache = new NodeCache();
let router = express.Router();

router.post("/login", async (req, res) => {
    try {

        if (req.body.OTP)
        {
            if (myCache.has(req.body.phone) && myCache.get(req.body.phone) == req.body.OTP)
            {
                myCache.del(req.body.phone);
                return res.send("Logged In");
            }
            return res.send("Invalid OTP");
        }
        
        if (req.body.phone)
        {
            let userFound = await People.findOne({phone : req.body.phone});
            if (!userFound) return res.send("No User found!");
            if (req.body.password != userFound.password) return res.send("Invalid Credentials!");

            let auth = OTP(6, "");
            myCache.set(userFound.phone, auth, 120);
            return res.send(auth);
        }

        res.send("Empty Params!");

    } catch (error) {
        console.log(error);
    }
});

function OTP(length, str)
{
    if (length >= 1)
    {
        str += nums[Math.floor(Math.random() * (nums.length - 1))];
        return OTP(length - 1, str);
    }
    return str;
}

export default router;