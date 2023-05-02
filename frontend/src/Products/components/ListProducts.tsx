import {
  Card,
  Columns,
  Content,
  Heading,
  Button,
} from "react-bulma-components";

interface ProductData {
  name: string;
  priceUnitary: string;
  size: string;
  description: string;
  imgUrl: string;
  id: string;
  _id: string;
}

interface ListProductsProps {
  products: Array<ProductData>;
  handleDelete: (_id: string) => void;
}

const ListProducts = ({ products, handleDelete }: ListProductsProps) => {
  return (
    <Columns className=" has-text-centered">
      {products.map(
        ({ description, imgUrl, name, priceUnitary, size, _id }) => (
          <Columns.Column size={3} key={_id}>
            <Card>
              <Card.Image size="16by9" src={imgUrl} />
              <Content>
                <Heading>{name}</Heading>
                <Heading subtitle size={6}>
                  {priceUnitary}
                </Heading>
                <Heading subtitle size={6}>
                  {size}
                </Heading>
                <p>{description}</p>
              </Content>
              <Button
                onClick={() => handleDelete(_id)}
                color="danger"
                renderAs="span"
              >
                Borrar
              </Button>
            </Card>
          </Columns.Column>
        )
      )}
    </Columns>
  );
};

export default ListProducts;
