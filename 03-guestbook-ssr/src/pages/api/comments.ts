import type { NextApiRequest, NextApiResponse } from "next";

export type Comment = {
  id: number;
  name: string;
  message: string;
};

const comments: Comment[] = [];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment[] | Comment>
) {
  if (req.method === "POST") {
    const comment = { ...(req.body as Comment), id: comments.length + 1 };
    comments.push(comment);
    res.status(201).json(comment);
  } else if (req.method === "GET") {
    res.status(200).json(comments.sort((a, b) => b.id - a.id));
  }
}
