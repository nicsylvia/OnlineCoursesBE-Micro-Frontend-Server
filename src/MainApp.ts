import express, { Application, Request, Response } from "express";

import cors from "cors";

import morgan from "morgan";

export const MainAppConfig = (app: Application) => {
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));

  app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
      message: "Online Courses Project API ready for consumption",
    });
  });
};
