import { Router, Request, Response } from "express";
import { v4 as uuid } from "uuid";

import { User } from "../models/User";
import { AuthRouter } from "./auth.router";

const router: Router = Router();

router.use("/auth", AuthRouter);

router.get("/", async (req: Request, res: Response) =>
  res.status(200).send("Id Required!"),
);

router.get("/:id", async (req: Request, res: Response) => {
  const requestId = uuid();
  console.log(`${requestId} - start at ${new Date(Date.now()).toISOString()}`);
  const { id } = req.params;
  const item = await User.findByPk(id);
  res.send(item);
  return console.log(
    `${requestId} - end at ${new Date(Date.now()).toISOString()}`,
  );
});

export const UserRouter: Router = router;
