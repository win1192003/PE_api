const User = require('../../models/User');

module.exports = async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body;

        if (!email || !password) {
        //   console.log('Missing email or password');
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
}
