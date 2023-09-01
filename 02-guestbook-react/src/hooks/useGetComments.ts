import { useCallback, useEffect, useState } from "react";
import { Comment } from "../mocks/handlers";

const loadComments = async () => {
  const res = await fetch("/api/comments");
  return res.json();
};

export const useGetComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadComments()
      .then(setComments)
      .finally(() => setLoading(false));
  }, []);

  const refetch = useCallback(async () => {
    setLoading(true);
    loadComments()
      .then(setComments)
      .finally(() => setLoading(false));
  }, []);

  return {
    refetch,
    comments,
    isLoading,
  };
};
