import { useState, useRef } from "react";
import { Form, Button } from "react-bulma-components";

const { Input, Field, Control, Label } = Form;

interface MyFormProps {
  name: string;
  priceUnitary: number;
  size: number;
  description: string;
  image: string;
}

const MyForm = ({ handleSubmit }: any) => {
  const [formValues, setFormValues] = useState<MyFormProps>({
    name: "",
    priceUnitary: 0,
    size: 0,
    description: "",
    image: "",
  });

  let inputFileRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const _handleSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit({ ...formValues, image: inputFileRef.current?.files });
    // console.log(formValues);
    // console.log(inputFileRef.current?.files);
  };

  return (
    <form onSubmit={_handleSubmit}>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input
            placeholder="Text input"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>priceUnitary</Label>
        <Control>
          <Input
            placeholder="Text number"
            type="number"
            name="priceUnitary"
            value={formValues.priceUnitary}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>size</Label>
        <Control>
          <Input
            placeholder="Text input"
            type="number"
            name="size"
            value={formValues.size}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>description</Label>
        <Control>
          <Input
            placeholder="Text input"
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Image</Label>
        <Control>
          <input type="file" ref={inputFileRef} />
        </Control>
      </Field>
      <Button type="submit" color="primary">
        Save
      </Button>
    </form>
  );
};

export default MyForm;
