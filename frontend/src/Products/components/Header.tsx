import { Container, Section } from "react-bulma-components";

type HeaderProps = {
  title: String;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <Section>
      <Container>
        <h1 className="title has-text-centered">{title}</h1>
      </Container>
    </Section>
  );
};

export default Header;
