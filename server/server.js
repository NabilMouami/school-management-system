require('dotenv').config();
const express = require('express');
const cors = require('cors');

const adminRoute = require('./routes/userRoute');
const bodyParser = require("body-parser")


require('./database/dbConnect')();
const app = express();
app.use(bodyParser.json());

//Routes
app.use(express.json());

app.use(cors())

app.use('/admin', adminRoute.router);

const studentRouter = require('./routes/students');
app.use('/students', studentRouter);

const noteRouter = require('./routes/noteRoute');
app.use('/notes', noteRouter)

const teacherRouter = require('./routes/teacherRoute');
app.use('/teachers', teacherRouter);

const noticeRouter = require('./routes/noticeRoute');
app.use('/notices', noticeRouter);

const attRouter = require('./routes/attendanceRoute');
app.use('/attendances', attRouter);

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
