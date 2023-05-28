const router = require("express").Router();
const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/verify", (req, res) => {
  try {
    console.log("router req");
    console.log(req);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSldUIiwibmFtZSI6InRlc3RlciIsImlhdCI6MTY4Mzk4ODk4NiwiZXhwIjoxNjgzOTg5NTg2LCJpc3MiOiJhZG1pbiJ9.X4ni3iSw407gWJBM0EL23-3YMx2Tu4BmZ3r-4i5QU0Q";
    const key = process.env.KEY2;
    // console.log("token");
    // console.log(token);
    const ver = jwt.verify(token, key, (err, decoded) => {
      if (err) {
        console.log("route_verify error");
        console.error(err);
      } else {
        console.log(decoded);
      }
    });
    // console.log(ver);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
