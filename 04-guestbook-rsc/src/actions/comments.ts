"use server";
import { revalidatePath } from "next/cache";

export type Comment = {
  id: number;
  name: string;
  message: string;
};

const comments: Comment[] = [];

export const getComments = () => comments;

export const createComment = async (comment: {
  name: string;
  message: string;
}) => {
  comments.push({ ...comment, id: comments.length + 1 });
  revalidatePath("/");
};
