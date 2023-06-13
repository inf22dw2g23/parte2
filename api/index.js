const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const config = require("./src/configs/env");
const passport = require("./src/middlewares/passport");
const routes = require("./src/routes/Routes");

const app = express();
const sessionOptions = {
  secret: "my top secret key",
  resave: false,
  saveUninitialized: true,
};

const corsOptions = {
  credentials: true,
  exposeHeaders: ["set-cookie"],
  origin: ["http://localhost:3006"],
  methods: ["POST", "GET", "DELETE", "PUT", "OPTIONS"],
  allowedHeaders: [
    "content-type",
    "Authorization",
    "Origin",
    "Access-Control-Allow-Origin",
    "Accept",
    "Options",
  ],
};

app.use(cors(corsOptions));
app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/public"));

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.get("/docs/swagger.json", (req, res) => res.json(swaggerSpec));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/", routes);

app.listen(config.port, function () {
  console.log(`App running on http://localhost:${config.port}`);
});
