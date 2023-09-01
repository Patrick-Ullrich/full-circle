import { useState } from "react";

export const useCreateComment = () => {
  const [isLoading, setLoading] = useState(false);

  const createComment = async ({
    name,
    message,
  }: {
    name: string;
    message: string;
  }) => {
    setLoading(true);
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        name,
        message,
      }),
    });
    setLoading(false);
  };

  return {
    isCreatingComment: isLoading,
    createComment,
  };
};
