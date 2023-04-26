import { Container, Section, Button } from "react-bulma-components";

type buttonProps = {
  onClick: () => void;
};

const AddButton = ({ onClick }: buttonProps) => {
  return (
    <Section>
      <Container>
        <div className="is-pulled-right">
          <Button onClick={onClick} color="primary">
            Add
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default AddButton;
