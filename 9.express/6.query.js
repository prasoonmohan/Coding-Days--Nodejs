let express = require("express");
let app = express();

app.listen(8000);

app.get("/student", (req, res) => {
    res.send(req.query);
});


// try this typeof url
    // http://localhost:8000/student?name=prasoon&age=20