import { Container } from "reactstrap";
import { GuestbookForm } from "./components/GuestbookForm";
import { Nav } from "./components/Nav";
import { GuestbookEntries } from "./components/GuestbookEntries";
import { useGetComments } from "./hooks/useGetComments";
import { useCreateComment } from "./hooks/useCreateComment";

function App() {
  const { comments, isLoading, refetch } = useGetComments();
  const { isCreatingComment, createComment } = useCreateComment();

  return (
    <>
      <Nav />

      <Container>
        <div className="bg-body-tertiary p-5 rounded mb-4">
          <h1>Guestbook</h1>
          <p className="lead">Feel free to leave your comments and memories!</p>
        </div>

        <GuestbookForm
          onCreateComment={(data) => {
            createComment(data).then(() => refetch());
          }}
          isLoading={isCreatingComment}
        />
        <GuestbookEntries comments={comments} isLoading={isLoading} />
      </Container>
    </>
  );
}

export default App;
