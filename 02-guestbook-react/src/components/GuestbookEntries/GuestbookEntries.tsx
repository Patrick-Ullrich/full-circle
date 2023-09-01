import { Spinner } from "reactstrap";
import { Comment } from "../../mocks/handlers";

interface GuestbookEntriesProps {
  comments: Comment[];
  isLoading: boolean;
}

export const GuestbookEntries = ({
  isLoading,
  comments,
}: GuestbookEntriesProps) => {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner />
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="d-flex justify-content-center">
        <p className="lead">No comments yet!</p>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <h3>What people have said:</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="bg-body-tertiary p-5 rounded mb-4">
          <h3>{comment.name}</h3>
          <p>{comment.message}</p>
        </div>
      ))}
    </div>
  );
};
