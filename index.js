/**
 * Third party module
 */

const express = require("express");
const app = express();
const morgan = require("morgan");
const dbconfig = require("./dbConfig/db.config");

/**
 * Import Routes
 */

const routes = require("./routes/routes");

/**
 * Middleware
 */

app.use(morgan("dev"));

/**
 * Body-Parser
 */

app.use(express.json());

/**
 * Route Middleware
 */

app.use("/api", routes);

/**
 * Localhost
 */
const PORT = process.env.PORT || 4000
app.listen(PORT,dbconfig, () => {
  console.log("Server started on port:", PORT);
});
