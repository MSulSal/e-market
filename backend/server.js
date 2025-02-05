import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
/*
 * security middleware that helps protect app by setting
 * various HTTP headers
 */
app.use(helmet());
/*
 * request logging middleware
 */
app.use(morgan("dev"));

app.get("/test", (req, res) => {
  console.log(res.getHeaders());
  res.send("<h1>Hello from the test route.</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
