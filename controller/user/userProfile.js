
module.exports = async (req, res) => {
    // View logged in user profile
    // Create a copy of the user object
    const userObject = req.user.toObject();

    // Remove password and tokens from the user object
    delete userObject.password;
    delete userObject.tokens;
    
    res.send(userObject);
  }