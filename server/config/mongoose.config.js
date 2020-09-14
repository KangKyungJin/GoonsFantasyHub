const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/fantasyGoons", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database."))
    .catch(err => console.log("There was an error connecting to the database", err));