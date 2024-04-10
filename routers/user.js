const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/users/regis", async (req, res) => {
  // Create a new user
  try {
    const user = new User(req.body);
    console.log(user);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/users/login', async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body;
        console.log(email, password);

        if (!email || !password) {
          console.log('Missing email or password');
          return res.status(400).send({error: 'Missing email or password'});
        }
        const user = await User.findByCredentials(email, password);
        
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'});
        }
        const token = await user.generateAuthToken();
        res.send(token);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/users/me", auth, async (req, res) => {
    // View logged in user profile
        // Create a copy of the user object
    const userObject = req.user.toObject();

    // Remove password and tokens from the user object
    delete userObject.password;
    delete userObject.tokens;
    res.send(userObject);
  });
 
  router.post("/users/me/logout", auth, async (req, res) => {
    // Log user out of the application
    try {
      // Remove the token from the user's tokens array.
      req.user.tokens = req.user.tokens.filter(token => {
        return token.token != req.token;
      });
      await req.user.save();
      res.send();
    } catch (error) {
      res.status(500).send(error);
    }
  });
  router.post('/users/me/logoutall', auth, async(req, res) => {
    // Log user out of all devices
    try {
      // Change the user's token to an empty string
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)} 
    });

module.exports = router;