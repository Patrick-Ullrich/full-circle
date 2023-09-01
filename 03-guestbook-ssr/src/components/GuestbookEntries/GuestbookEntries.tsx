import { Comment } from "@/pages/api/comments";

export const GuestbookEntries = ({ comments }: { comments: Comment[] }) => {
  if (comments.length === 0) {
    return <p className="text-center">No Comments yet!</p>;
  }

  return (
    <div className="divide-y-2">
      {comments.map((comment) => (
        <div key={comment.id} className="py-6">
          <div className="flex items-center">
            <h4 className="text-sm font-bold text-gray-900">{comment.name}</h4>
          </div>

          <div
            className="mt-1 text-base italic text-gray-600"
            dangerouslySetInnerHTML={{ __html: comment.message }}
          />
        </div>
      ))}
    </div>
  );
};
