const app = require("./app");
//returning console log saying the db is connected
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");

//gives us access to port, mongoURI and something else ...
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server started on ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
