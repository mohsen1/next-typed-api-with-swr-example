// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiHandler } from "next";

import data from "../../../data.json";
import User from "../../../User";

const handler: NextApiHandler<User[]> = (req, res) => {
  res.status(200).json(data.users.filter((user) => user.isAdmin));
};

export default handler;
