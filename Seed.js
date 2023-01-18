import People from "./Model.js";
import "./dbConnect.js";
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

async function Growth() {
  try {
    for (let i = 0; i <= 10; i++) {
      let newAadmi = {
        name: OTP(6, ""),
        password: OTP(20, ""),
        phone: Gen(10, ""),
      };

      let haha = new People(newAadmi);
      await haha.save();
    }
  } catch (error) {
    console.log(error);
  }
}
Growth();

function Gen(length, str) {
  if (length >= 1) {
    str += nums[Math.floor(Math.random() * (nums.length - 1))];
    return OTP(length - 1, str);
  }
  return str;
}

function OTP(length, str) {
  if (length >= 1) {
    str += String.fromCharCode(Math.floor(Math.random() * 127));
    return OTP(length - 1, str);
  }
  return str;
}
