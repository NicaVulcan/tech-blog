const express = require('express');
const controllers = require('./controllers');
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(controllers);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});