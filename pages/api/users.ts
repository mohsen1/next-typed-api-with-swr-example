// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiHandler } from "next";

interface User {
  id: number;
  name: string;
  email: string;
}

const handler: NextApiHandler<User[]> = (req, res) => {
  res
    .status(200)
    .json([{ id: 0, name: "John Doe", email: "john.doe@example.com" }]);
};

export default handler;
