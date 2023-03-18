import express, { Application, Request, Response } from "express";
const port = 9999;

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Server is up and cleaning",
  });
});

app.listen(port, () => {
  console.log("server is listening", port);
});
