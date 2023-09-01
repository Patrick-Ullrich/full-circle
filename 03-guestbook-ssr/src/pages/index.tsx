import { GuestbookEntries } from "@/components/GuestbookEntries";
import { GuestbookForm } from "@/components/GuestbookForm";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Comment } from "./api/comments";

export const getServerSideProps = async () => {
  const comments = await fetch("http://localhost:3000/api/comments").then(
    (res) => res.json()
  );

  return {
    props: {
      comments,
    },
  };
};

interface PageProps {
  comments: Comment[];
}

export default function Home({ comments: initialComments }: PageProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  return (
    <>
      <Layout>
        <GuestbookEntries comments={comments} />

        <div className="flex mt-10 justify-center">
          <div className="w-full">
            <GuestbookForm
              onSuccess={(comment) => {
                setComments((prev) => [comment, ...prev]);
              }}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
