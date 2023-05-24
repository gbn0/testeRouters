import { PrismaClient } from "@prisma/client";
import express, { Request, Response, NextFunction } from "express";

const app = express();
const prisma = new PrismaClient();

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  return res.send(await prisma.user.findMany());
};

export default { getUsers };
