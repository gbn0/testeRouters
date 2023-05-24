import express from "express";
import routes from "./routers/routers";

const app = express();
const port = 8000;

app.use("/", routes);

// app.post("/", async (req, res, next) => {
//   const user = await prisma.user.create({
//     data: {
//       name: req.body.name,
//       height: req.body.height,
//     },
//   });
//   res.send("Usuario criado");
// });

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
