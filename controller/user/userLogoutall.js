
module.exports = async(req, res) => {
    // Log user out of all devices
    try {
      // Change the user's token to an empty string
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)} 
    }