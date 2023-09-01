import { rest } from "msw";

export type Comment = {
  id: number;
  name: string;
  message: string;
};

const comments: Comment[] = [];

export const handlers = [
  rest.get("/api/comments", (req, res, ctx) => {
    console.log("comments", comments);
    return res(
      ctx.delay(1500),
      ctx.status(202, "Mocked status"),
      ctx.json(comments)
    );
  }),
  rest.post("/api/comments", async (req, res, ctx) => {
    const { name, message } = (await req.json()) as Comment;
    const newComment = { id: comments.length + 1, name, message };
    comments.push(newComment);
    return res(ctx.delay(1500), ctx.json(newComment));
  }),
];
