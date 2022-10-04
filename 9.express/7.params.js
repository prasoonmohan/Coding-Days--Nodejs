let express = require("express");
let app = express();

app.listen(8000);

app.get("/student/:id", (req, res) => {
    res.send(req.params)
});

// try this typeof url
      // http://localhost:8000/student/3