import { Card, Columns, Content, Heading } from "react-bulma-components";

interface ProductData {
  name: string;
  priceUnitary: string;
  size: string;
  description: string;
  image: string;
}

interface ListProductsProps {
  products: Array<ProductData>;
}

const ListProducts = ({ products }: ListProductsProps) => {
  return (
    <Columns className=" has-text-centered">
      {products.map(
        ({ description, image, name, priceUnitary, size }, index) => (
          <Columns.Column size={3} key={index}>
            <Card>
              <Card.Image size="16by9" src={image} />
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
            </Card>
          </Columns.Column>
        )
      )}
    </Columns>
  );
};

export default ListProducts;
