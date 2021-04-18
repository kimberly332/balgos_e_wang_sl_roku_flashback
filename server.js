const express = require('express');
const app = express();

const port = process.env.port || 5051;

// handle API routes
app.use("/api", require("./routes/api"));
app.use("/ums", require("./routes/ums"));


// frontend client
app.use(express.static("client"));

// frontend application start point
app.use("/", (req, res) => {
    //res.status(200).sendFile("client/dist/index.html", {root: __dirname })
    res.sendFile(path.join(__dirname, "client/index.html"));
});

app.use((error, req, res, next) => {
    next()
})
  

// run the app at the port
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

