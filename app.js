const express = require("express");
const userRouter = require('./routers/user');
const adminRouter = require('./routers/admin');
const path = require('path');
const port = process.env.PORT;
const cors = require('cors');
const uploadImage = require('./controller/upload_images');

require("./db/db");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(uploadImage);
app.use(userRouter);
app.use(adminRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});