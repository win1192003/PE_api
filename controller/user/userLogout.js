
module.exports = async (req, res) => {
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
  }