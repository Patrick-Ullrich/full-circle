import { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";

interface GuestbookFormProps {
  onCreateComment: (data: { name: string; message: string }) => void;
  isLoading: boolean;
}

export const GuestbookForm = ({
  onCreateComment,
  isLoading,
}: GuestbookFormProps) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onCreateComment({ name, message });
        setName("");
        setMessage("");
      }}
    >
      <Row>
        <Col lg="3">
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <Input
          type="textarea"
          id="message"
          name="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormGroup>
      <Button color="primary">
        {isLoading ? <Spinner size="sm" /> : "Submit"}
      </Button>
    </Form>
  );
};
