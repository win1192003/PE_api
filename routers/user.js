const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();
const userLogin = require("../controller/user/userLogin");
const userRegis = require("../controller/user/userRegis");
const userProfile = require("../controller/user/userProfile");
const userLogout = require("../controller/user/userLogout");
const userLogoutall = require("../controller/user/userLogoutall");

router.post("/users/regis", userRegis);

router.post('/users/login', userLogin);

router.get("/users/profile", auth, userProfile);
 
router.post("/users/me/logout", auth, userLogout);

router.post('/users/me/logoutall', auth, userLogoutall);

module.exports = router;